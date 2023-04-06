import { useState } from "react";

import Head from "next/head";

import { Group, Button, Container } from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";

import { BiAddToQueue } from "react-icons/bi";

import SprintsTable from "features/home/editor/listSprints/table/SprintsTable";

import AddPart from "features/home/editor/listParts/addPart/AddPart";
import CustomLoader from "components/loader/CustomLoader";
import { useListSprints } from "hooks/api/useListSprints";
import CreateSprint from "features/home/editor/listSprints/createSprint/CreateSprint";

const Sprints = () => {
    const [opened, setOpened] = useState(false);
    const { data, refetch } = useListSprints();
    const { width } = useViewportSize();

    return data ? (
        <>
            <Head><title>ADA | Sprints</title></Head>
            <CreateSprint opened={opened} setOpened={setOpened} refetch={refetch} />
            <Container m={0} p={width <= 800 ? 0 : 20} fluid>
                <h1 style={{paddingBottom: 20, textAlign: 'center'}}>Sprints</h1>
                <SprintsTable sprints={data} refetch={refetch} />
                <Group position="center" style={{width: "100%", minWidth: 250}}>
                    <Button w={"30%"} mt={35} miw={250} leftIcon={<BiAddToQueue size={20} />} variant="outline" onClick={() => setOpened(true)}>
                        Create a sprint
                    </Button>
                </Group>
            </Container>
        </>
    ) : <CustomLoader />;
}

export default Sprints;