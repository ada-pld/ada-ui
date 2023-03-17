import { useEffect, useState } from "react";

import Head from "next/head";

import { Container, Grid } from "@mantine/core";

import { useAppSelector } from "store/hooks/hooks";
import { useRouter } from "next/router";
import CustomLoader from "components/loader/CustomLoader";
import { useGetPLDImages } from "hooks/api/useGetPLDImages";
import ImagesDropZone from "features/home/editor/pld/ImagesDropzone";

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
            <Head><title>WAP | PLD Images</title></Head>
            <Container m={0} fluid>
                <h1 style={{textAlign: "center"}}>PLD</h1>
                <h3 style={{textAlign: "center", color: "dimgrey"}}>Document images</h3>
                <Grid grow mt={40}>
                    {data.map((fileName, index) => (
                        <Grid.Col key={index} span={3}>
                            <ImagesDropZone fileName={fileName} refetch={refetch} />
                        </Grid.Col>
                    ))}
                </Grid>
            </Container>
        </>
    ) : <CustomLoader />;
}

export default Images;