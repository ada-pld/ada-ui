import { useEffect, useState } from "react";
import { Button, Container, Group, Loader, PasswordInput, Select, Switch, TextInput } from "@mantine/core";
import { IoSaveOutline } from "react-icons/io5";

import { UserInfos } from "store/api/types/fetchedData";
import { useEditUserMutation } from "store/api/usersAPI";

import { ProfileForm } from "./utils/ProfileForm";
import { useAppSelector } from "store/hooks/hooks";
import { editProfileErrorNotification } from "components/notifications/errors";
import { editProfileNotification } from "components/notifications/success";

interface Props {
    user: UserInfos;
    refetch: any;
}

const UserProfile: React.FC<Props> = ({ user, refetch }) => {
    const [editPassword, setEditPassword] = useState(false);
    const userId = useAppSelector((state) => state.user.auth.userId);
    const [editUser, editResult] = useEditUserMutation<any>();
    const form = ProfileForm({user, editPassword});

    useEffect(() => {
        if (editResult.isError) {
            if (editResult.error.status === 403)
                editProfileErrorNotification(editResult.error.data.message);
        } else if (editResult.isSuccess) {
            editProfileNotification();
            form.reset();
            refetch();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [editResult])

    return userId ? (
        <Container style={{width: "80%"}} miw={350} mt={0} p={20}>
            <form onSubmit={form.onSubmit((values) => editUser({id: userId, firstname: values.firstname, lastname: values.lastname, email: values.email, password: editPassword ? values.password : null, role: values.role}))}>
                <Group position="apart" grow>
                    <TextInput disabled={user.role === "USER" || user.role === "MAINTENER"} label="First name" mt={20} {...form.getInputProps('firstname', { type: 'input' })} />
                    <TextInput disabled={user.role === "USER" || user.role === "MAINTENER"} label="Last name" mt={20} {...form.getInputProps('lastname', { type: 'input' })} />
                </Group>
                <TextInput disabled={user.role === "USER" || user.role === "MAINTENER"} label="Email" mt={20} {...form.getInputProps('email', { type: 'input' })} />
                <PasswordInput disabled={!editPassword}  label="Password" mt={20} {...form.getInputProps('password', { type: 'input' })} />
                <Switch mt={10} label="Edit my password" size="sm" color="violet" checked={editPassword} onChange={(event) => {setEditPassword(event.currentTarget.checked)}} />
                <Select disabled={user.role === "USER" || user.role === "MAINTENER"} label={"Role"} mt={20} data={["USER", "MAINTENER", "EDITOR", "ADMIN"]}  {...form.getInputProps('role', { type: 'input' })}/>
                <Group position="center" mt={80} grow>
                    <Button disabled={!form.isDirty()} color={"green"} leftIcon={<IoSaveOutline size={20} />} miw={240} maw={400} variant="outline" type="submit">
                        Save
                    </Button>
                </Group>
            </form>
        </Container>
    ) : <Loader />;
}

export default UserProfile;