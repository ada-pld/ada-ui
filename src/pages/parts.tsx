import { useState } from "react";

import Head from "next/head";

import { AppShell, Group, Button } from "@mantine/core";

import { useListParts } from "hooks/api/useListParts";

import NavBar from "features/global/navigation/NavBar";

import { BiAddToQueue } from "react-icons/bi";

import PartsTable from "features/home/listParts/table/PartsTable";

import AddPart from "features/home/listParts/addPart/AddPart";

const Parts = () => {
    const [opened, setOpened] = useState(false);
    const { data, refetch } = useListParts();

    return (
        <>
            <Head><title>WAP | Parts</title></Head>
            <AddPart opened={opened} setOpened={setOpened} refetch={refetch} />
            <AppShell
                padding="md"
                navbar={<NavBar page={"Parts"} />}
            >
                {data &&
                    <>
                        <Group>
                            <h1 style={{paddingBottom: 20}}>Parts</h1>
                            <PartsTable parts={data} />
                        </Group>
                        <Group position="center" style={{width: "100%", minWidth: 400}}>
                            <Button w={"30%"} mt={35} miw={250} leftIcon={<BiAddToQueue size={20} />} variant="outline" onClick={() => setOpened(true)}>
                                Add a part
                            </Button>
                        </Group>
                    </>
                }
            </AppShell>
        </>
    );
}

export default Parts;