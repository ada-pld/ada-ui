import React, { useState } from "react";

import Head from "next/head";

import { Center, Container, Divider, Grid, SimpleGrid } from "@mantine/core";

import { useGetSprint } from "hooks/api/useGetSprint";

import AddCardModal from "features/global/cards/components/modals/AddCardModal";

import CustomLoader from "components/loader/CustomLoader";
import DashboardCards from "features/home/user/dashboard/DashboardCards";

import Stats from "features/home/user/dashboard/components/Stats";
import JoursAlert from "features/home/user/dashboard/components/JoursAlert";

import { useGetUserCards } from "hooks/api/useGetUserCards";

const Dashboard = () => {
    const { data: user, refetch } = useGetUserCards("user");
    const { data: sprint } = useGetSprint();

    const [openAdd, setOpenAdd] = useState<boolean>(false);
    
    return sprint ? (
        <div>
            <Head><title>ADA | Dashboard</title></Head>
            <AddCardModal openAdd={openAdd} setOpenAdd={setOpenAdd} refetch={refetch} />
            {user &&
                <Container fluid p={0} m={0}>
                    <h1 style={{textAlign: "center"}}>Welcome back !</h1>
                    <h3 style={{textAlign: "center", color: "dimgrey"}}>{sprint.name}</h3>
                    <div style={{marginTop: 20, paddingLeft: 15, paddingRight: 15}}>
                        {((user.JHIntended) < sprint.workDaysNeeded)
                            ?   <JoursAlert variant="warning" message={`You need ${sprint.workDaysNeeded} J/H for this sprint.\nActually you have ${user.JHIntended} J/H of validated cards`} />
                            :   (user.JHIntended) > sprint.workDaysNeeded
                            ?   <JoursAlert variant="alert" message={`You have too many working days for this sprint.\nYou need ${sprint.workDaysNeeded} J/H for this sprint and you have ${user.JHIntended} J/H of approved cards`} />
                            :   <></>
                        }
                    </div>
                    <Grid grow mt={10} pl={15} pr={15}>
                        <Grid.Col md={6} lg={4} span={'auto'}>
                            <Center>
                                <Stats title={"Finished cards"} color={"green"} user={user} progress={user.JHDones} type={"finished"} sprint={sprint} />
                            </Center>
                        </Grid.Col>
                        <Grid.Col md={6} lg={4} span={'auto'}>
                            <Center>
                                <Stats title={"Cards in progress"} color={"yellow"} user={user} progress={user.JHInProgress} type={"inProgress"} sprint={sprint} />
                            </Center>
                        </Grid.Col>
                        <Grid.Col md={6} lg={4} span={'auto'}>
                            <Center>
                                <Stats title={"Not started cards"} color={"red"} user={user} progress={user.JHNotStarted} type={"notStarted"} sprint={sprint} />
                            </Center>
                        </Grid.Col>
                    </Grid>
                    <Divider mt={30} />
                    <SimpleGrid
                        mt={20}
                        breakpoints={[
                            { minWidth: 'xs', cols: 1 },
                            { minWidth: 900, cols: 2 },
                            { minWidth: 1200, cols: 3 },
                            { minWidth: 1700, cols: 4 },
                            { minWidth: 2200, cols: 5 },
                        ]}
                    >
                        <DashboardCards user={user} sprint={sprint} refetch={refetch} />
                    </SimpleGrid>
                </Container>
            }
        </div>
    ) : <CustomLoader />;
}

export default Dashboard;