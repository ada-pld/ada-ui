import React from "react";

import { Center, SimpleGrid, Title } from "@mantine/core";

import UserCard from "features/global/cards/UserCard";

import { Card } from "types/apiTypes";

interface Props {
    cards: Card[];
    refetch: any;
}

const CardsGrid: React.FC<Props> = ({ cards, refetch }) => {
    return (
        <>
            {cards.length === 0
                ?   <Center mt={100}><Title size={"h3"}>No approved card(s)</Title></Center>
                :   <React.Fragment>
                        <SimpleGrid
                            w={"100%"}
                            breakpoints={[
                                { minWidth: 'xs', cols: 1 },
                                { minWidth: 650, cols: 2 },
                                { minWidth: 800, cols: 1 },
                                { minWidth: 910, cols: 2 },
                                { minWidth: 1200, cols: 3 },
                                { minWidth: 1700, cols: 4 },
                                { minWidth: 2200, cols: 5 },
                            ]}
                        >
                            {cards.map((card: Card, index: number) => (
                                <Center key={index} pt={30}>
                                    <UserCard card={card} refetch={refetch} edition={false} mode={"status"} />
                                </Center>
                            ))}
                        </SimpleGrid>
                    </React.Fragment>
            }
        </>
    );
}

export default CardsGrid;