import { Tabs, Grid, Center, Title } from "@mantine/core";

import { Card } from "types/apiTypes";

import UserCard from "features/global/cards/UserCard";

interface Props {
    data: Card[];
    refetch: any;
}

const RejectedCards: React.FC<Props> = ({ data, refetch }) => {
    const filteredCards = data.filter((card: Card) => card.status === "REJECTED" && card.sprint.active);

    return (
        <Tabs.Panel value="Rejected">
            {filteredCards.length === 0
                ?   <Center mt={100}><Title>No rejected card(s)</Title></Center>
                :   <Grid mt={20} grow>
                        {filteredCards.map((card: Card, index: number) =>
                            <Grid.Col key={index} p={20} span={"auto"}>
                                <Center>
                                    <UserCard card={card} refetch={refetch} />
                                </Center>
                            </Grid.Col>
                        )}
                    </Grid>
            }
        </Tabs.Panel>
    );
}

export default RejectedCards;