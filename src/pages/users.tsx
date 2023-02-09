import Head from "next/head";

import NavBar from "features/navigation/NavBar";

import { AppShell } from "@mantine/core";

import { useListUsers } from "hooks/api/useListUsers";

const Users = () => {
    const { data, error } = useListUsers();

    return data ? (
        <>
            <Head><title>WAP | Users</title></Head>
            <AppShell
                padding="md"
                navbar={<NavBar page={"Users"} />}
            >
                <h1>{data[2].firstname} {data[2].lastname}</h1>
            </AppShell>
        </>
    ): <></>;
}

export default Users;