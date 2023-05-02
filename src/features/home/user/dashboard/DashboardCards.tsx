import React, { useEffect, useState } from "react";

import { Center, Divider, Grid, Group, Select, TextInput } from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";

import { Card, Sprint, UserCards } from "types/apiTypes";

import JoursAlert from "./components/JoursAlert";
import Stats from "./components/Stats";
import CardsGrid from "./components/CardsGrid";

import { RiSearchLine } from "react-icons/ri";

import { TbCircleCheck, TbClock, TbCircleX } from "react-icons/tb";

import StatusSelectItem from "./components/StatusSelectItem";

import { StatusIcon } from "./utils/StatusIcon";

interface Props {
    user: UserCards;
    sprint: Sprint;
    refetch: any;
    cards: Card[];
}

const data = [
    { value: 'FINISHED', label: 'Finished', icon: TbCircleCheck },
    { value: 'STARTED', label: 'In progress', icon: TbClock },
    { value: 'NOT_STARTED', label: 'Not started', icon: TbCircleX }
]

const DashboardCards: React.FC<Props> = ({user, sprint, refetch, cards}) => {
    const { width } = useViewportSize();
    const [search, setSearch] = useState<string>("");
    const [status, setStatus] = useState<string | null>(null);

    const [filteredCards, setFilteredCards] = useState(cards);

    useEffect(() => {
        let newCards = cards.filter((card: Card) => (card.status !== "REJECTED"&& card.status !== "WAITING_APPROVAL") && card.sprintId === sprint.id);

        if (status !== null) {
            newCards = newCards.filter((card: Card) => card.status === status);
        }

        if (search !== "") {
            newCards = newCards.filter((card: Card) => card.name.toLowerCase().includes(search.toLowerCase()));
        }

        setFilteredCards(newCards);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [search, status, cards]);

    return width && cards ? (
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
            <Group mt={30} pl={"2%"} pr={"2%"} position={width <= 899 ? "center" : "apart"} spacing={"lg"}>
                <Select
                    clearable
                    icon={StatusIcon(status)}
                    variant="filled"
                    placeholder="Status..."
                    transitionProps={{ transition: "scale-y", duration: 100, timingFunction: 'ease' }}
                    itemComponent={StatusSelectItem}
                    onChange={(value) => setStatus(value)}
                    value={status}
                    data={data}
                />
                <TextInput variant="filled" style={{width: 300}} icon={<RiSearchLine />} placeholder="Search..." value={search} onChange={(event) => setSearch(event.currentTarget.value)} />
            </Group>
            <CardsGrid cards={filteredCards} refetch={refetch} />
        </div>
    ) : <></>;
}

export default DashboardCards;