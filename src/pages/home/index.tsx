import React, { useState } from "react";

import Head from "next/head";

import { Container } from "@mantine/core";

import { useGetSprint } from "hooks/api/useGetSprint";

import AddCardModal from "features/global/cards/components/modals/AddCardModal";

import CustomLoader from "components/loader/CustomLoader";
import DashboardCards from "features/home/user/dashboard/DashboardCards";

import { useGetUserCards } from "hooks/api/useGetUserCards";
import { useListSprints } from "hooks/api/useListSprints";

import AdminWelcome from "features/home/user/dashboard/AdminWelcome";

const Dashboard = () => {
    const { data: user, refetch } = useGetUserCards("user");
    const { data: sprint } = useGetSprint();
    const { data: listSprints } = useListSprints();
    const [openAdd, setOpenAdd] = useState<boolean>(false);
    
    return sprint !== undefined && listSprints ? (
        <div>
            <Head><title>ADA | Dashboard</title></Head>
            <AddCardModal openAdd={openAdd} setOpenAdd={setOpenAdd} refetch={refetch} />
            <Container fluid p={0} m={0}>
                {listSprints.length === 0
                    ?   <AdminWelcome />
                    :   <>{user && <DashboardCards user={user} sprint={sprint} refetch={refetch} />}</>
                }
            </Container>
        </div>
    ) : <CustomLoader />;
}

export default Dashboard;