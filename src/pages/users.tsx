import { useState } from "react";

import Head from "next/head";

import { AppShell, Button, Container, Group } from "@mantine/core";

import { useListUsers } from "hooks/api/useListUsers";

import NavBar from "features/navigation/NavBar";
import UsersTable from "features/listUsers/table/UsersTable";
import AddUser from "features/listUsers/addUser/AddUser";

import { AiOutlineUserAdd } from "react-icons/ai";

const Users = () => {
    const { data } = useListUsers();
    const [opened, setOpened] = useState(false);

    return (
        <>
            <Head><title>WAP | Users</title></Head>
            <AddUser opened={opened} setOpened={setOpened} />
            <AppShell
                navbarOffsetBreakpoint="sm"
                asideOffsetBreakpoint="sm"
                padding="md"
                navbar={<NavBar page={"Users"} />}
            >
                { data && 
                    <Container>
                        <h1 style={{paddingBottom: 20}}>Users</h1>
                        <UsersTable users={data} />
                        <Group position="center">
                            <Button w={"30%"} mt={40} miw={250} leftIcon={<AiOutlineUserAdd size={20} />} variant="outline" onClick={() => setOpened(true)}>
                                Add a user
                            </Button>
                        </Group>
                    </Container>
                }
            </AppShell>
        </>
    );
}

export default Users;