import React, { useEffect, useState } from "react";

import Head from "next/head";

import { Container } from "@mantine/core";

import { useGetSprint } from "hooks/api/useGetSprint";

import AddCardModal from "features/global/cards/components/modals/AddCardModal";

import CustomLoader from "components/loader/CustomLoader";
import DashboardCards from "features/home/user/dashboard/DashboardCards";

import { useGetUserCards } from "hooks/api/useGetUserCards";

import AdminWelcome from "features/home/user/dashboard/AdminWelcome";

import { useAppSelector } from "store/hooks/hooks";
import { Card } from "types/apiTypes";
import UserWelcome from "features/home/user/dashboard/UserWelcome";

const Dashboard = () => {
    const { data: user, refetch } = useGetUserCards("user");
    const { data: sprint } = useGetSprint();

    const userRole = useAppSelector((state) => state.user.auth.accessToken?.charAt(0));

    const [openAdd, setOpenAdd] = useState<boolean>(false);

    const cards = user?.cards.filter((card: Card) =>
        (card.status !== "REJECTED"&& card.status !== "WAITING_APPROVAL") && card.sprintId === sprint?.id
    );

    const isWaiting = user?.cards.filter((card: Card) =>
        (card.status !== "REJECTED") && card.sprintId === sprint?.id
    );

    return sprint !== undefined ? (
        <div>
            <Head><title>ADA | Dashboard</title></Head>
            <AddCardModal openAdd={openAdd} setOpenAdd={setOpenAdd} refetch={refetch} />
            <Container fluid p={0} m={0}>
                {userRole === "3" && sprint === null
                    ?   <AdminWelcome />
                    :   (sprint === null) || (isWaiting && isWaiting.length === 0)
                    ?   <UserWelcome setOpenAdd={setOpenAdd} />
                    :   <>{user && <DashboardCards user={user} sprint={sprint} refetch={refetch} cards={cards} />}</>
                }
            </Container>
        </div>
    ) : <CustomLoader />;
}

export default Dashboard;