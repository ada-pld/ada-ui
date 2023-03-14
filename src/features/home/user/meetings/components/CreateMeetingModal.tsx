import { useEffect, useState } from "react";

import { Button, Container, Group, Modal, Select, Text, Textarea, TextInput, useMantineTheme } from "@mantine/core";
import { DateTimePicker } from "@mantine/dates";
import { IoSaveOutline } from "react-icons/io5";

import { CreateMeeting, createMeetingForm } from "../utils/createForm";
import NewGroupForm from "./NewGroupForm";
import { SelectItem } from "./SelectItem";
import { AiOutlinePlus } from "react-icons/ai";
import ExistingGroupForm from "./ExistingGroupForm";
import { useCreateMeetingMutation } from "store/api/meetingsAPI";

import moment from "moment";

import { Meeting } from "store/api/types/fetchedData";
import { meetingErrorNotification } from "components/notifications/errors";
import { meetingCreatedNotification } from "components/notifications/success";

interface Props {
    meetings: Meeting[];
    opened: boolean;
    close: () => void;
    refetch: any;
}

interface Group {
    id: string | number;
    name: string;
    color?: string;
    icon?: React.ReactNode;
    location?: string;
    duration?: any;
}

const CreateMeetingModal: React.FC<Props> = ({ meetings, opened, close, refetch }) => {
    const theme = useMantineTheme();
    const form = createMeetingForm();
    const [isNewGroup, setIsNewGroup] = useState(false);
    const [createMeeting, result] = useCreateMeetingMutation<any>();

    const meetingsById = meetings.reduce((acc: {[key: number]: Meeting}, meeting) => {
        acc[meeting.rendezVousGroup.id] = meeting;
        return acc;
    }, {});

    const meetingsGroups = Object.values(meetingsById).flatMap((meeting) => meeting.rendezVousGroup).map((meeting) => {return { id: meeting.id, name: meeting.groupName, color: meeting.groupColor, duration: meeting.typicalDuration, location: meeting.typicalLocation }});

    const groups: Group[] = [
        ...meetingsGroups,
        { id: "new", name: "Create new group", icon: <AiOutlinePlus /> },
    ];

    useEffect(() => {
        if (result.isError) {
            if (result.error.status === 400)
                meetingErrorNotification(result.data.message);
            form.reset();
            close();
        } else if (result.isSuccess) {
            meetingCreatedNotification();
            form.reset();
            close();
            refetch();
        }
    }, [result])

    useEffect(() => {
        const selected = groups.find((group) => group.id.toString() === form.values.group);
        const duration = moment.utc().startOf('day').add({ minutes: selected?.duration }).format('HH:mm');

        if (form.values.group === "new") {
            form.setValues({location: "", duration: "", groupColor: "", groupName: ""});
            setIsNewGroup(true)
        }
        else if (selected) {
            form.setValues({location: selected.location, duration: duration});
            setIsNewGroup(false)
        }
    }, [form.values.group])

    const meetingHandling = (values: CreateMeeting) => {
        const meeting = {
            title: values.title,
            date: new Date(values.datetime).toISOString(),
            agenda: values.agenda,
            duration: moment.duration(values.duration).asMinutes(),
            location: values.location,
            groupId: values.group !== "new" ? values.group : undefined,
            ...(isNewGroup && {
                newGroup: {
                    name: values.groupName,
                    color: values.groupColor,
                    duration: moment.duration(values.duration).asMinutes(),
                    location: values.location
                }
            }),
            ...(isNewGroup && {groupId: values.group})
        }

        createMeeting({meeting});
    }

    return (
        <Modal
            centered
            opened={opened}
            onClose={() => (close(), form.reset())}
            size={"xl"}
            title={<Text>Create a meeting</Text>}
            overlayProps={{color: theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2], opacity: 0.55, blur: 3}}
            radius={10}
        >
            <Container style={{width: "90%"}} mt={-20} p={20}>
                <form onSubmit={form.onSubmit((values) => meetingHandling(values))}>
                    <TextInput required label="Title" placeholder="Meeting title" {...form.getInputProps('title')} />
                    <DateTimePicker
                        required
                        clearable
                        dropdownType="popover"
                        valueFormat="DD MMM YYYY hh:mm A"
                        label="Pick date and time of the meeting"
                        placeholder="Pick date and time of the meeting"
                        mt={10}
                        {...form.getInputProps('datetime')}
                    />
                    <Textarea required autosize minRows={5} maxRows={6} label="Agenda" placeholder="Meeting plan" mt={7} {...form.getInputProps('agenda', { type: 'input' })} />
                    <Select transitionProps={{duration: 150, transition: "pop", timingFunction: "ease"}} required data={groups.map((group) => ({ value: String(group.id), label: group.name, icon: group.icon, location: group.location, duration: group.duration }))} label="Group" radius={"sm"} withAsterisk mt={7} itemComponent={SelectItem} {...form.getInputProps('group', { type: 'input' })}/>
                    {isNewGroup
                        ? <NewGroupForm form={form} isNewGroup={isNewGroup} />
                        : <ExistingGroupForm form={form} isNewGroup={isNewGroup} />
                    }
                    <Group position="center" mt={30} grow>
                        <Button disabled={!form.isDirty()} color={"green"} leftIcon={<IoSaveOutline size={20} />} miw={240} maw={300} variant="outline" type="submit">
                            Create
                        </Button>
                    </Group>
                </form>
            </Container>
        </Modal>
    );
}

export default CreateMeetingModal;