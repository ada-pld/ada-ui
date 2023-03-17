import { useEffect, useState } from "react";

import { Modal, useMantineTheme, TextInput, Container, Select, PasswordInput, Button, Group, Switch, Title, Text } from "@mantine/core";

import { EditUserForm } from "./utils/editUserForm";

import { UsersList } from "store/api/types/fetchedData";

import { CiWarning } from "react-icons/ci";
import { IoSaveOutline } from "react-icons/io5";
import { useEditUserMutation, useForgotPasswordMutation } from "store/api/usersAPI";
import { emailErrorNotification, missingIdNotification, unauthorizedNotification } from "components/notifications/errors";
import { forgotPasswordNotification, userModifiedNotification } from "components/notifications/success";
import { editUserHandling } from "./utils/editUserHandling";

interface Props {
    opened: boolean;
    setOpened: React.Dispatch<React.SetStateAction<boolean>>;
    user: UsersList | null;
    setSelectedUser: React.Dispatch<React.SetStateAction<UsersList | null>>;
    refetch: any;
}

const EditUser: React.FC<Props> = ({opened, setOpened, user, setSelectedUser, refetch}) => {
    const [editPassword, setEditPassword] = useState<boolean>(false);

    const [editUser, editResult] = useEditUserMutation<any>();
    const [forgotPassword, forgotResult] = useForgotPasswordMutation<any>();

    const roleFirstUpper = user!.role[0].toUpperCase() + user!.role.slice(1).toLowerCase();
    const form = EditUserForm({firstname: user!.firstname, lastname: user!.lastname, email: user!.email, role: roleFirstUpper, editPassword: editPassword});
    
    const theme = useMantineTheme();

    useEffect(() => {
        if (editResult.isError) {
            if (editResult.error.status === 400)
                missingIdNotification();
            if (editResult.error.status === 403)
                unauthorizedNotification();
            setSelectedUser(null);
        } else if (editResult.isSuccess) {
            userModifiedNotification();
            setSelectedUser(null);
            refetch();
        }
    }, [editResult])

    useEffect(() => {
        if (forgotResult.isError) {
            if (forgotResult.error.status === 409)
                emailErrorNotification();
            setSelectedUser(null);
        } else if (forgotResult.isSuccess) {
            forgotPasswordNotification();
            setSelectedUser(null);
        }
    }, [forgotResult])

    return (
        <Modal
            centered
            opened={opened}
            onClose={() => (setOpened(false), setSelectedUser(null), form.reset())}
            size={"xl"}
            title={<Text>Edit user</Text>}
            overlayProps={{color: theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2], opacity: 0.55, blur: 3}}
            radius={10}
            transitionProps={{duration: 0}}
        >
            <Container style={{width: "90%"}} mt={-20} p={20}>
                <form onSubmit={form.onSubmit((values) => (editUserHandling({user, editUser, values, setOpened})))}>
                    <Group position="apart" grow>
                        <TextInput required label="First name" mt={20} {...form.getInputProps('firstname', { type: 'input' })} />
                        <TextInput required label="Last name" mt={20} {...form.getInputProps('lastname', { type: 'input' })} />
                    </Group>
                    <TextInput required label="Email" mt={20} {...form.getInputProps('email', { type: 'input' })} />
                    <PasswordInput disabled={!editPassword} label="Password" mt={20} {...form.getInputProps('password', { type: 'input' })} />
                    <Switch mt={10} label="Edit user password" size="xs" color="violet" checked={editPassword} onChange={(event) => {setEditPassword(event.currentTarget.checked); form.values.password = ""}} />
                    <Select
                        searchable
                        clearable
                        required
                        data={['User', 'Maintener', 'Editor', 'Admin']}
                        label="Role"
                        radius={"sm"}
                        withAsterisk
                        mt={20}
                        {...form.getInputProps('role', { type: 'input' })}
                    />
                    <Group position="center" mt={30} grow>
                        <Button disabled={!form.isDirty()} color={"violet"} leftIcon={<IoSaveOutline size={20} />} miw={240} variant="outline" type="submit">
                            Save
                        </Button>
                        <Button color={"red"} leftIcon={<CiWarning size={24} />} miw={240} variant="outline" onClick={() => forgotPassword(user!.email)}>
                            Reset password
                        </Button>
                    </Group>
                </form>
            </Container>
        </Modal>
    );
}

export default EditUser;