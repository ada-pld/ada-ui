import { Button, Container, Group, PasswordInput, Select, TextInput } from "@mantine/core";
import { IoSaveOutline } from "react-icons/io5";

import { UserInfos } from "store/api/types/fetchedData";

import { profileForm } from "./utils/profileForm";

interface Props {
    user: UserInfos;
}

const UserProfile: React.FC<Props> = ({ user }) => {
    const form = profileForm({user});

    return (
        <Container style={{width: "80%"}} miw={350} mt={0} p={20}>
            <form onSubmit={form.onSubmit((values) => console.log(values))}>
                <Group position="apart" grow>
                    <TextInput disabled={user.role === "USER" || user.role === "MAINTENER"} label="First name" mt={20} {...form.getInputProps('firstname', { type: 'input' })} />
                    <TextInput disabled={user.role === "USER" || user.role === "MAINTENER"} label="Last name" mt={20} {...form.getInputProps('lastname', { type: 'input' })} />
                </Group>
                <TextInput disabled={user.role === "USER" || user.role === "MAINTENER"} label="Email" mt={20} {...form.getInputProps('email', { type: 'input' })} />
                <PasswordInput label="Password" mt={20} {...form.getInputProps('password', { type: 'input' })} />
                <Select disabled={user.role === "USER" || user.role === "MAINTENER"} label={"Role"} mt={20} data={["USER", "MAINTENER", "EDITOR", "ADMIN"]}  {...form.getInputProps('role', { type: 'input' })}/>
                <Group position="center" mt={80} grow>
                    <Button disabled={!form.isDirty()} color={"green"} leftIcon={<IoSaveOutline size={20} />} miw={240} maw={400} variant="outline" type="submit">
                        Save
                    </Button>
                </Group>
            </form>
        </Container>
    );
}

export default UserProfile;