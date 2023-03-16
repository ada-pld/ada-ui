import { Tabs, Grid, Center, Title } from "@mantine/core";

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
                :   <Grid mt={20}>
                        {filteredCards.map((card: Card, index: number) =>
                            <Grid.Col key={index} md={6} lg={4} p={20} span={'auto'}>
                                <Center>
                                    <UserCard card={card} refetch={refetch} edition={false} mode={"none"} />
                                </Center>
                            </Grid.Col>
                        )}
                    </Grid>
            }
        </Tabs.Panel>
    );
}

export default WaitingCards;