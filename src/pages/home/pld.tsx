import Head from "next/head";

import { Button, Container, Group, Text } from "@mantine/core";
import PldTable from "features/home/editor/pld/PldTable";

import { HiOutlineDocumentPlus } from "react-icons/hi2";
import { useAppSelector } from "store/hooks/hooks";

import { useRouter } from "next/router";

import { useGetPLDs } from "hooks/api/useGetPLD";

import CustomLoader from "components/loader/CustomLoader";

const PLD = () => {
    const { data: pldList, refetch } = useGetPLDs();
    const router = useRouter();
    const role = useAppSelector((state) => state.user.auth.accessToken?.charAt(0));

    return pldList ? (
        <>
            <Head><title>WAP | PLD</title></Head>
            <Container m={0} fluid>
                <h1 style={{textAlign: 'center'}}>PLD</h1>
                <h3 style={{textAlign: "center", color: "dimgrey"}}>Generate and download PLD&apos;s</h3>
                {(role === "2" || role === "3") && 
                    <Group mt={20} position="center" style={{width: "100%", minWidth: 400}}>
                        <Button onClick={() => router.push("/home/pld/generator")} w={"30%"} miw={250} leftIcon={<HiOutlineDocumentPlus size={20} />} variant="outline">
                            Generate new PLD
                        </Button>
                    </Group>
                }
                {pldList.length >= 0
                    ? <PldTable pldList={pldList} />
                    : <Text mt={20} size={22} weight={"bold"} align={"center"}>No PLD Please generate one with the upper button</Text>
                }
            </Container>
        </>
    ) : <CustomLoader /> ;
}

export default PLD;