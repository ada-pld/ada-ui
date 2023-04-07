import React from "react";

import { Center, ColProps, Grid, Title, useMantineTheme } from "@mantine/core";
import UserCard from "features/global/cards/UserCard";

import { Card, Sprint, UserCards } from "types/apiTypes";

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
        <React.Fragment key={user.id}>
            {cards.length === 0
                ?   <Center style={{width: "100%"}} mt={100}><Title size={"h3"}>No approved card(s)</Title></Center>
                :   <React.Fragment key={user.id}>
                        {cards.map((card: Card, index: number) => (
                            <Center key={index}>
                                <UserCard card={card} refetch={refetch} edition={false} mode={"status"} />
                            </Center>
                        ))}
                    </React.Fragment>
            }
        </React.Fragment>
    );
}

export default DashboardCards;