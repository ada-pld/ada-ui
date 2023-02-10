import { Modal, useMantineTheme, TextInput, Container, NativeSelect, Text, Button, Group } from "@mantine/core";

import { AiOutlineUserAdd } from "react-icons/ai";

import { addUserForm } from "./utils/addUserForm";

interface Props {
    opened: boolean;
    setOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddUser: React.FC<Props> = ({opened, setOpened}) => {
    const theme = useMantineTheme();
    const form = addUserForm();

    return (
        <Modal
            centered
            opened={opened}
            onClose={() => setOpened(false)}
            size={"xl"}
            title="Add a user"
            overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
            overlayOpacity={0.55}
            overlayBlur={3}
            radius={10}
        >
            <Container pb={30} pr={30} mt={30}>
                <form onSubmit={form.onSubmit((values) => console.log(values))}>
                    <TextInput required label="First name" placeholder="Paul" mt={20} {...form.getInputProps('firstname', { type: 'input' })} />
                    <TextInput required label="Last name" placeholder="Dubois" mt={20} {...form.getInputProps('lastname', { type: 'input' })} />
                    <TextInput required label="Email" placeholder="example@example.fr" mt={20} {...form.getInputProps('email', { type: 'input' })} />
                    <NativeSelect
                        data={['User', 'Maintener', 'Editor']}
                        label="Role"
                        description="You need to get higher permissions"
                        radius={"sm"}
                        withAsterisk
                        mt={20}
                        />
                    <Group position="center" mt={30}>
                        <Text size={14} fs="italic" mt={5}>A mail will be sent to the user with his credentials</Text>
                        <Button fullWidth maw={400} color={"green"} leftIcon={<AiOutlineUserAdd size={20} />} variant="outline" type="submit">
                            Add user
                        </Button>
                    </Group>
                </form>
            </Container>
        </Modal>
    );
}

export default AddUser;