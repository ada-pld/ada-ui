import { useEffect } from "react";

import { Button, Container, Group, Modal, Table, Text, Textarea, useMantineTheme } from "@mantine/core";

import { IoSaveOutline } from "react-icons/io5";

import { useValidateMeetingMutation } from "store/api/meetingsAPI";
import { Meeting } from "store/api/types/fetchedData";
import { ValidateMeetingForm } from "./utils/ValidateForm";

import ValidateMeetingRows from "./ValidateMeetingRows";
import { meetingErrorNotification } from "components/notifications/errors";
import { meetingValidatedNotification } from "components/notifications/success";

interface Props {
    meeting: Meeting;
    opened: boolean;
    close: () => void;
    refetch: any;
}

const ValidateMeetingModal: React.FC<Props> = ({ meeting, opened, close, refetch }) => {
    const theme = useMantineTheme();
    const form = ValidateMeetingForm(meeting.id);

    const [validateMeeting, result] = useValidateMeetingMutation<any>();

    useEffect(() => {
        if (result.isError) {
            if (result.error.status === 400)
                meetingErrorNotification(result.data.message);
            close();
        } else if (result.isSuccess) {
            meetingValidatedNotification();
            close();
            refetch();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [result])

    return (
        <Modal
            centered
            opened={opened}
            onClose={() => (close(), form.reset())}
            size={"xl"}
            title={<Text>Validate meeting</Text>}
            overlayProps={{
                color:
                theme.colorScheme === "dark"
                    ? theme.colors.dark[9]
                    : theme.colors.gray[2],
                opacity: 0.55,
                blur: 3,
            }}
            radius={10}
        >
            <Container style={{ width: "90%" }} mt={-20} p={20}>
            <form onSubmit={form.onSubmit((values: any) => {
                const attendanceArray = meeting.userAttendances.map((attendance) => ({
                    id: attendance.id,
                    presence: values[`presence_${attendance.id}`]
                }));
                if (attendanceArray.length !== meeting.userAttendances.length)
                    form.setErrors({ report: 'Bug je suis en colere' })
                else
                    validateMeeting({ meetingId: meeting.id, report: values.report, attendances: attendanceArray });
            })}>
                    <Textarea
                        required
                        autosize
                        minRows={5}
                        maxRows={6}
                        label="Report"
                        placeholder="Meeting report"
                        mt={7}
                        {...form.getInputProps("report", { type: "input" })}
                    />
                    <Table mt={20} verticalSpacing="xs" withBorder>
                        <tbody><ValidateMeetingRows form={form} meeting={meeting} /></tbody>
                    </Table>
                    <Group position="center" mt={30} grow>
                        <Button
                            disabled={!form.isDirty()}
                            color={"green"}
                            leftIcon={<IoSaveOutline size={20} />}
                            miw={240}
                            maw={300}
                            variant="outline"
                            type="submit"
                        >
                            Validate meeting
                        </Button>
                    </Group>
                </form>
            </Container>
        </Modal>
    );
};

export default ValidateMeetingModal;