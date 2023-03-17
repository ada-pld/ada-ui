import { useEffect, useState } from "react";

import Head from "next/head";
import { useRouter } from "next/router";

import { Container } from "@mantine/core";

import { useAppSelector } from "store/hooks/hooks";
import { useGetPLDChanges } from "hooks/api/useGetPLDChanges";


import CustomLoader from "components/loader/CustomLoader";
import PldChanges from "features/home/editor/pld/PldChanges";
import { useDisclosure } from "@mantine/hooks";

const Changes = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const { data, refetch } = useGetPLDChanges();

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
            <Head><title>WAP | PLD Changes</title></Head>
            <Container m={0} fluid>
                <h1 style={{textAlign: "center"}}>PLD</h1>
                <h3 style={{textAlign: "center", color: "dimgrey"}}>Document changes</h3>
            </Container>
            <PldChanges changes={data} />
        </>
    ) : <CustomLoader />;
}

export default Changes;