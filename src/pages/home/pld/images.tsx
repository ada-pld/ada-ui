import { useEffect, useState } from "react";

import Head from "next/head";
import { useRouter } from "next/router";

import { Button, Container, Divider, Grid, Group, Stack, Text } from "@mantine/core";

import { useAppSelector } from "store/hooks/hooks";
import { useGetPLDImages } from "hooks/api/useGetPLDImages";

import CustomLoader from "components/loader/CustomLoader";
import ImagesDropZone from "features/home/editor/pld/ImagesDropzone";

import { IoImagesOutline } from "react-icons/io5";

const Images = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const { data, refetch } = useGetPLDImages();

    const router = useRouter();
    const role = useAppSelector((state) => state.user.auth.accessToken?.charAt(0));

    useEffect(() => {
        if (role === "0" || role === "1")
            router.back();
        else
            setIsLoaded(true);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return isLoaded && data ? (
        <>
            <Head><title>ADA | PLD Images</title></Head>
            <Container m={0} fluid>
                <h1 style={{textAlign: "center"}}>PLD</h1>
                <h3 style={{textAlign: "center", color: "dimgrey"}}>Document images</h3>
                <Grid grow mt={40}>
                    {data.map((fileName, index) => (
                        <Grid.Col key={index} span={3}>
                            <ImagesDropZone fileName={fileName} />
                        </Grid.Col>
                    ))}
                </Grid>
                <Group position="center" mt={20}>
                    <Divider style={{width: "70%"}} />
                </Group>
                <Stack align={"center"} mt={20} style={{width: "100%", minWidth: 100}}>
                    <Text italic>All images must be filled</Text>
                    <Button w={"30%"} miw={250} leftIcon={<IoImagesOutline size={20} />} variant="outline" onClick={() => router.push("/home/pld/changes")}>
                        Validate images
                    </Button>
                </Stack>
            </Container>
        </>
    ) : <CustomLoader />;
}

export default Images;