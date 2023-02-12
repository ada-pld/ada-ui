import { useEffect } from "react";

import { useAppSelector } from "store/hooks/hooks";

import Head from "next/head";
import { useRouter } from "next/router";

import NavBar from "features/global/navigation/NavBar";

import { AppShell } from "@mantine/core";

const Dashboard = () => {
    const router = useRouter();
    const user = useAppSelector((state) => state.user.auth);

    useEffect(() => {
        if (user.accessToken === undefined) {
            router.push('/login')
        }
    }, [user])

    return user.accessToken ? (
        <>
            <Head><title>WAP | Dashboard</title></Head>
            <AppShell
                padding="md"
                navbar={<NavBar page={"Dashboard"} />}
            >
                <h1>{user.accessToken}</h1>
            </AppShell>
        </>
    ) : <></>;
}

export default Dashboard;