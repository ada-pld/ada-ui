import { useEffect, useState } from "react";
import Head from "next/head";

import { Alert, Button, Container, Group, Text, Textarea } from "@mantine/core";

import { useAppSelector } from "store/hooks/hooks";
import { useRouter } from "next/router";
import CustomLoader from "components/loader/CustomLoader";

import { IoIosArrowBack } from "react-icons/io";
import { AiOutlineArrowUp } from "react-icons/ai";
import { BiErrorCircle } from "react-icons/bi";

import PldDropZone from "features/home/editor/pld/PldDropzone";

import { useGetGeneratorQuery } from "store/api/pldAPI";

const Generator = () => {
    const { data: generator, refetch } = useGetGeneratorQuery();
    const [isLoaded, setIsLoaded] = useState(false);

    const router = useRouter();
    const role = useAppSelector((state) => state.user.auth.accessToken?.charAt(0));

    useEffect(() => {
        if (role === "0" || role === "1")
            router.back();
        else
            setIsLoaded(true);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return isLoaded && generator ? (
        <>
            <Head><title>ADA | Generator</title></Head>
            <Container m={0} p={20} fluid>
                <h1 style={{textAlign: "center"}}>PLD</h1>
                <h3 style={{textAlign: "center", color: "dimgrey"}}>Choose the PLD generator</h3>
                {generator.generatorExist
                    ?
                        <>
                            <Textarea autosize value={generator.actualCode} minRows={5} maxRows={7} label={<Text mt={40} size={22} weight={"bold"} pb={10}>Actual Generator</Text>} disabled mt={7} />
                            <Group position="center" style={{width: "100%", minWidth: 300}}>
                                <Button onClick={() => router.push("/home/pld/images")} w={"30%"} mt={20} miw={250} leftIcon={<AiOutlineArrowUp size={20} />} variant="outline">
                                    Use this generator
                                </Button>
                            </Group>
                        </>
                    :   role === "3"
                    ?   <></>
                    :   <>
                            <Alert mt={50} icon={<BiErrorCircle size={30} />} title={"Alert"} color={"red"}>
                                <Text>ADA doesn&apos;t have a generator of PLD</Text>
                                <Text>Please contact your ADA administrator to upload a PLD generator for the application</Text>
                            </Alert>
                            <Group position="center" style={{width: "100%", minWidth: 300}}>
                                <Button onClick={() => router.back()} w={"25%"} mt={20} miw={200} leftIcon={<IoIosArrowBack size={20} />} variant="outline">
                                    Go back
                                </Button>
                            </Group>
                        </>   
                }
                {role === "3" && 
                    <>
                        <Text mt={40} size={22} weight={"bold"}>Upload new generator</Text>
                        <PldDropZone refetch={refetch} />
                    </>
                }
            </Container>
        </>
    ) : <CustomLoader />;
}

export default Generator;