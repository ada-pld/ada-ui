import { useState } from "react";

import Head from "next/head";

import { AppShell, Container } from "@mantine/core";

import { useListParts } from "hooks/api/useListParts";

import NavBar from "features/navigation/NavBar";

import AddUser from "features/listUsers/addUser/AddUser";

const Parts = () => {
    const { data } = useListParts();
    const [opened, setOpened] = useState(false);

    console.log(data)

    return (
        <>
            <Head><title>WAP | Parts</title></Head>
            <AddUser opened={opened} setOpened={setOpened} />
            <AppShell
                padding="md"
                navbar={<NavBar page={"Parts"} />}
            >
                {data &&
                    <Container>
                        <h1 style={{paddingBottom: 20}}>Parts</h1>
                    </Container>
                }
            </AppShell>
        </>
    );
}

export default Parts;