import React, { useState } from "react";

import Head from "next/head";

import { Center, Container, Divider, Grid, Group } from "@mantine/core";

import { useGetSprint } from "hooks/api/useGetSprint";

import AddCardModal from "features/global/cards/components/modals/AddCardModal";

import CustomLoader from "components/loader/CustomLoader";

import { useGetSprintCards } from "hooks/api/useGetSprintCards";
import { useAppSelector } from "store/hooks/hooks";
import DashboardCards from "features/home/user/dashboard/DashboardCards";

import Stats from "features/home/user/dashboard/components/Stats";

const Dashboard = () => {
    const { data: users, refetch } = useGetSprintCards();
    const { data: sprint } = useGetSprint();

    const userID = useAppSelector((state) => state.user.auth.userId);

    const [openAdd, setOpenAdd] = useState<boolean>(false);
    
    return sprint ? (
        <div>
            <Head><title>WAP | Dashboard</title></Head>
            <AddCardModal openAdd={openAdd} setOpenAdd={setOpenAdd} refetch={refetch} />
            {users &&
                <Container fluid p={0} m={0}>
                    <h1 style={{textAlign: "center"}}>Welcome back !</h1>
                    <h3 style={{textAlign: "center", color: "dimgrey"}}>{sprint.name}</h3>
                    {users.filter((user) => user.id === userID).map((user, index) => (
                        <Grid grow mt={20} pl={15} pr={15} key={index}>
                            <Grid.Col md={6} lg={4} span={'auto'}>
                                <Center>
                                    <Stats title={"Finished cards"} color={"green"} user={user} progress={user.JHDones} type={"finished"}/>
                                </Center>
                            </Grid.Col>
                            <Grid.Col md={6} lg={4} span={'auto'}>
                                <Center>
                                    <Stats title={"Cards in progress"} color={"yellow"} user={user} progress={user.JHInProgress} type={"inProgress"}/>
                                </Center>
                            </Grid.Col>
                            <Grid.Col md={6} lg={4} span={'auto'}>
                                <Center>
                                    <Stats title={"Not started cards"} color={"red"} user={user} progress={user.JHNotStarted} type={"notStarted"}/>
                                </Center>
                            </Grid.Col>
                        </Grid>
                    ))}
                    <Divider mt={30} />
                    <Grid mt={10}>
                        {users.filter((user) => user.id === userID).map((user, index) => (
                            <DashboardCards key={index} user={user} refetch={refetch} />
                        ))}
                    </Grid>
                </Container>
            }
        </div>
    ) : <CustomLoader />;
}

export default Dashboard;