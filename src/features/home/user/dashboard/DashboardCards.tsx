import React from "react";

import { Center, ColProps, Divider, Grid, SimpleGrid, Title, useMantineTheme } from "@mantine/core";
import UserCard from "features/global/cards/UserCard";

import { Card, Sprint, UserCards } from "types/apiTypes";
import JoursAlert from "./components/JoursAlert";
import Stats from "./components/Stats";

interface Props {
    user: UserCards;
    sprint: Sprint;
    refetch: any;
}

const DashboardCards: React.FC<Props> = ({user, sprint, refetch}) => {
    const cards = user.cards.filter((card: Card) =>
        (card.status !== "REJECTED"&& card.status !== "WAITING_APPROVAL") && card.sprintId === sprint.id
    );

    return (
        <div>
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
            {cards.length === 0
                ?   <Center mt={100}><Title size={"h3"}>No approved card(s)</Title></Center>
                :   <React.Fragment key={user.id}>
                        <SimpleGrid
                            mt={20}
                            w={"100%"}
                            breakpoints={[
                                { minWidth: 'xs', cols: 1 },
                                { minWidth: 900, cols: 2 },
                                { minWidth: 1200, cols: 3 },
                                { minWidth: 1700, cols: 4 },
                                { minWidth: 2200, cols: 5 },
                            ]}
                        >
                            {cards.map((card: Card, index: number) => (
                                <Center key={index}>
                                    <UserCard card={card} refetch={refetch} edition={false} mode={"status"} />
                                </Center>
                            ))}
                        </SimpleGrid>
                    </React.Fragment>
            }
        </div>
    );
}

export default DashboardCards;