import { Tabs, Grid, Center, Title, SimpleGrid } from "@mantine/core";

import { Card } from "types/apiTypes";

import UserCard from "features/global/cards/UserCard";

interface Props {
    data: Card[];
    refetch: any;
}

const WaitingCards: React.FC<Props> = ({ data, refetch }) => {
    const filteredCards = data.filter((card: Card) => card.status === "WAITING_APPROVAL");

    return (
        <Tabs.Panel value="Waiting approval">
            {filteredCards.length === 0
                ?   <Center mt={100}><Title size={"h3"}>No waiting card(s)</Title></Center>
                :   <SimpleGrid
                        mt={20}
                        breakpoints={[
                            { minWidth: 'xs', cols: 1 },
                            { minWidth: 900, cols: 2 },
                            { minWidth: 1200, cols: 3 },
                            { minWidth: 1700, cols: 4 },
                            { minWidth: 2200, cols: 5 },
                        ]}
                    >
                        {filteredCards.map((card: Card, index: number) =>
                            <Center key={index}>
                                <UserCard card={card} refetch={refetch} edition={false} mode={"none"} />
                            </Center>
                        )}
                    </SimpleGrid>
            }
        </Tabs.Panel>
    );
}

export default WaitingCards;