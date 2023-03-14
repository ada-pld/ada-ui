import { Button, Chip, Container, Group, Modal, Text, Textarea, TextInput, useMantineTheme } from "@mantine/core";
import { IoSaveOutline } from "react-icons/io5";
import { Meeting } from "store/api/types/fetchedData";
import { validateMeetingForm } from "./utils/validateForm";

interface Props {
    meeting: Meeting;
    opened: boolean;
    close: () => void;
    refetch: any;
}

const ValidateMeetingModal: React.FC<Props> = ({ meeting, opened, close, refetch }) => {
    const theme = useMantineTheme();
    const form = validateMeetingForm(meeting.id);

    return (
        <Modal
            centered
            opened={opened}
            onClose={() => (close(), form.reset())}
            size={"xl"}
            title={<Text>Validate meeting</Text>}
            overlayProps={{color: theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2], opacity: 0.55, blur: 3}}
            radius={10}
        >
            <Container style={{width: "90%"}} mt={-20} p={20}>
                <form onSubmit={form.onSubmit((values) => console.log(values))}>
                    <Textarea required autosize minRows={5} maxRows={6} label="Report" placeholder="Meeting report" mt={7} {...form.getInputProps('report', { type: 'input' })} />
                    <Group position="center" mt={30} grow>
                        <Button disabled={!form.isDirty()} color={"green"} leftIcon={<IoSaveOutline size={20} />} miw={240} maw={300} variant="outline" type="submit">
                            Validate
                        </Button>
                    </Group>
                </form>
            </Container>
        </Modal>
    );
}

export default ValidateMeetingModal;
