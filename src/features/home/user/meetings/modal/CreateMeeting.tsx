import { Container, Modal, Text, TextInput, Title, useMantineTheme } from "@mantine/core";

import { createMeetingForm } from "../utils/createForm";

interface Props {
    opened: boolean;
    close: () => void;
}

const CreateMeeting: React.FC<Props> = ({ opened, close }) => {
    const theme = useMantineTheme();
    const form = createMeetingForm();

    return (
        <Modal
            centered
            opened={opened}
            onClose={close}
            size={"xl"}
            title={<Text>Create a meeting</Text>}
            overlayProps={{color: theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2], opacity: 0.55, blur: 3}}
            radius={10}
        >
            <Container style={{width: "90%"}} mt={-20} p={20}>
                <form onSubmit={form.onSubmit((values) => console.log(values))}>
                    <TextInput required label="Title" placeholder="Meeting title" mt={10} {...form.getInputProps('title')} />
                </form>
            </Container>
        </Modal>
    );
}

export default CreateMeeting;