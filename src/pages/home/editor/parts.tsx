import { useState } from "react";

import Head from "next/head";

import { Group, Button, Container } from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";

import { useListParts } from "hooks/api/useListParts";

import { BiAddToQueue } from "react-icons/bi";

import PartsTable from "features/home/editor/listParts/table/PartsTable";

import AddPart from "features/home/editor/listParts/addPart/AddPart";
import CustomLoader from "components/loader/CustomLoader";

const Parts = () => {
    const [opened, setOpened] = useState(false);
    const { data, refetch } = useListParts(true);
    const { width } = useViewportSize();

    return data ? (
        <>
            <Head><title>WAP | Parts</title></Head>
            <AddPart opened={opened} setOpened={setOpened} refetch={refetch} />
            <Container m={0} p={width <= 800 ? 0 : 20} fluid>
                <h1 style={{paddingBottom: 20, textAlign: 'center'}}>Parts</h1>
                <PartsTable parts={data} />
                <Group position="center" style={{width: "100%", minWidth: 250}}>
                    <Button w={"30%"} mt={35} miw={250} leftIcon={<BiAddToQueue size={20} />} variant="outline" onClick={() => setOpened(true)}>
                        Add a part
                    </Button>
                </Group>
            </Container>
        </>
    ) : <CustomLoader />;
}

export default Parts;