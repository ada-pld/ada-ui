import React from "react";

import { Center, Grid, Title } from "@mantine/core";
import UserCard from "features/global/cards/UserCard";

import { CardsStats } from "types/apiTypes";

interface Props {
    user: CardsStats;
    refetch: any;
}

const DashboardCards: React.FC<Props> = ({user, refetch}) => {
    const cards = user.cards.map((card) => card.status !== "REJECTED" && card.status !== "WAITING_APPROVAL");

    return (
        <React.Fragment key={user.id}>
            {cards.length === 0
                ?   <Center mt={100}><Title size={"h3"}>No approved card(s)</Title></Center>
                :   <React.Fragment key={user.id}>
                        {user.cards.map((card, index) => card.status !== "REJECTED" && card.status !== "WAITING_APPROVAL" && (
                            <Grid.Col key={index} md={6} lg={4} p={20} span={'auto'}>
                                <Center>
                                    <UserCard card={card} refetch={refetch} edition={false} />
                                </Center>
                            </Grid.Col>
                        ))}
                    </React.Fragment>
            }
        </React.Fragment>
    );
}

export default DashboardCards;