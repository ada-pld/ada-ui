import { useState } from "react";

import Head from "next/head";

import { AppShell, Group } from "@mantine/core";

import { useListParts } from "hooks/api/useListParts";

import NavBar from "features/global/navigation/NavBar";

import AddUser from "features/home/listUsers/addUser/AddUser";
import PartsTable from "features/home/listParts/table/PartsTable";

const Parts = () => {
    const { data } = useListParts();
    const [opened, setOpened] = useState(false);

    return (
        <>
            <Head><title>WAP | Parts</title></Head>
            <AppShell
                padding="md"
                navbar={<NavBar page={"Parts"} />}
            >
                {data &&
                    <Group>
                        <h1 style={{paddingBottom: 20}}>Parts</h1>
                        <PartsTable parts={data} />
                    </Group>
                }
            </AppShell>
        </>
    );
}

export default Parts;