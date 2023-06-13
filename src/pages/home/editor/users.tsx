import { useState } from "react";

import Head from "next/head";

import { Button, Group, Container } from "@mantine/core";

import { useListUsers } from "hooks/api/useListUsers";

import UsersTable from "features/home/editor/listUsers/table/UsersTable";
import AddUser from "features/home/editor/listUsers/addUser/AddUser";

import { AiOutlineUserAdd } from "react-icons/ai";
import CustomLoader from "components/loader/CustomLoader";
import { useViewportSize } from "@mantine/hooks";

const Users = () => {
    const { data, refetch } = useListUsers(true);
    const [opened, setOpened] = useState(false);
    const { width } = useViewportSize();

    return data ? (
        <div>
            <Head><title>ADA | Users</title></Head>
            <AddUser opened={opened} setOpened={setOpened} refetch={refetch} />
            <Container m={0} p={width <= 800 ? 0 : 20} fluid>
                <h1 style={{paddingBottom: 20, textAlign: "center"}}>Users</h1>
                <div style={{overflow: 'auto'}}>
                    <UsersTable users={data} refetch={refetch} />
                </div>
                <Group position="center" mt={50} style={{width: "100%", minWidth: 250}}>
                    <Button id="add-user-button" w={"30%"} miw={250} leftIcon={<AiOutlineUserAdd size={20} />} variant="outline" onClick={() => setOpened(true)}>
                        Add a user
                    </Button>
                </Group>
            </Container>
        </div>
    ) : <CustomLoader />;
}

export default Users;