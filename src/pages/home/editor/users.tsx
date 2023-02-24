import { useState } from "react";

import Head from "next/head";

import { Button, Group, Container } from "@mantine/core";

import { useListUsers } from "hooks/api/useListUsers";

import UsersTable from "features/home/editor/listUsers/table/UsersTable";
import AddUser from "features/home/editor/listUsers/addUser/AddUser";

import { AiOutlineUserAdd } from "react-icons/ai";
import CustomLoader from "components/loader/CustomLoader";

const Users = () => {
    const { data, refetch } = useListUsers();
    const [opened, setOpened] = useState(false);

    return data ? (
        <div>
            <Head><title>WAP | Users</title></Head>
            <AddUser opened={opened} setOpened={setOpened} refetch={refetch} />
            <Container m={0} fluid>
                <h1 style={{paddingBottom: 20, textAlign: "center"}}>Users</h1>
                <UsersTable users={data} refetch={refetch} />
                <Group position="center" style={{width: "100%", minWidth: 400}}>
                    <Button w={"30%"} mt={20} miw={250} leftIcon={<AiOutlineUserAdd size={20} />} variant="outline" onClick={() => setOpened(true)}>
                        Add a user
                    </Button>
                </Group>
            </Container>
        </div>
    ) : <CustomLoader />;
}

export default Users;