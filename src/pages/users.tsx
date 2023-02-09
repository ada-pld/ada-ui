import { useEffect } from "react";

import { useRouter } from "next/router";
import Head from "next/head";

import NavBar from "features/navigation/NavBar";
import { AppShell } from "@mantine/core";

import { sessionExpiredNotification } from "components/notifications/errors";

import { useListUsersQuery } from "store/api/usersAPI";

const Dashboard = () => {
    const { data, error } = useListUsersQuery();
    const router = useRouter();

    useEffect(() => {
        if (data) {
            router.push('/login')
            sessionExpiredNotification();
        }
        else
            console.log(data)
    }, [data])

    return data ? (
        <>
            <Head><title>WAP | Users</title></Head>
            <AppShell
                padding="md"
                navbar={<NavBar page={"Users"} />}
            >
                <h1>Users</h1>
            </AppShell>
        </>
    ): <></>;
}

export default Dashboard;