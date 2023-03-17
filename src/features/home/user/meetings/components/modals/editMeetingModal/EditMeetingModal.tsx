import { Button, Container, Group, Modal, Text, Textarea, TextInput, useMantineTheme } from "@mantine/core";

import { DateTimePicker, TimeInput } from "@mantine/dates";

import { IoSaveOutline } from "react-icons/io5";

import { useEditMeetingMutation } from "store/api/meetingsAPI";
import { Meeting } from "store/api/types/fetchedData";

import { EditMeeting, EditMeetingForm } from "./utils/EditForm";

import moment from "moment";
import { useEffect } from "react";
import { meetingErrorNotification } from "components/notifications/errors";
import { meetingEditedNotification } from "components/notifications/success";

interface Props {
    meeting: Meeting;
    opened: boolean;
    close: () => void;
    refetch: any;
}

const EditMeetingModal: React.FC<Props> = ({ meeting, opened, close, refetch }) => {
    const form = EditMeetingForm({ meeting });
    const theme = useMantineTheme();
    const [editMeeting, result] = useEditMeetingMutation<any>();

    const meetingEditHandling = (values: EditMeeting) => {
        const meeting = {
            id: values.id,
            title: values.title,
            date: new Date(values.datetime).toISOString(),
            agenda: values.agenda,
            duration: moment.duration(values.duration).asMinutes(),
            location: values.location,
        }

        editMeeting({meeting});
    }

    useEffect(() => {
        if (result.isError) {
            if (result.error.status === 400)
                meetingErrorNotification(result.data.message);
            form.reset();
            close();
        } else if (result.isSuccess) {
            meetingEditedNotification();
            close();
            refetch();
        }
    }, [result])

    return (
        <Modal
            centered
            opened={opened}
            onClose={() => (close())}
            size={"xl"}
            title={<Text>Edit meeting</Text>}
            overlayProps={{color: theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2], opacity: 0.55, blur: 3}}
            radius={10}
        >
            <Container style={{width: "90%"}} mt={-20} p={20}>
                <form onSubmit={form.onSubmit((values) => meetingEditHandling(values))}>
                    <TextInput required label="Title" placeholder="Meeting title" {...form.getInputProps('title')} />
                    <DateTimePicker
                        required
                        clearable
                        valueFormat="DD MMM YYYY HH:mm"
                        minDate={new Date()}
                        dropdownType="popover"
                        label="Pick date and time of the meeting"
                        placeholder="Pick date and time of the meeting"
                        mt={10}
                        {...form.getInputProps('datetime')}
                    />
                    <Textarea required autosize minRows={5} maxRows={6} label="Agenda" placeholder="Meeting plan" mt={7} {...form.getInputProps('agenda', { type: 'input' })} />
                    <Group position="center" grow mt={10}>
                        <TextInput required label="Location" placeholder="Discord" {...form.getInputProps('location')} />
                        <TimeInput
                            label="Meeting duration"
                            required
                            maw={400}
                            mx="auto"
                            {...form.getInputProps('duration')}
                        />
                    </Group>
                    <Group position="center" mt={30} grow>
                        <Button disabled={!form.isDirty()} color={"green"} leftIcon={<IoSaveOutline size={20} />} miw={240} maw={300} variant="outline" type="submit">
                            Save
                        </Button>
                    </Group>
                </form>
            </Container>
        </Modal>
    );
}

export default EditMeetingModal;