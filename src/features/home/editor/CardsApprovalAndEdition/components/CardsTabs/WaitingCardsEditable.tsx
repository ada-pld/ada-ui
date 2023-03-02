import { Tabs, Grid, Center, Title } from "@mantine/core";

import { Card } from "types/apiTypes";

import UserCard from "features/global/cards/UserCard";

interface Props {
    data: Card[];
    refetch: any;
}

const WaitingCardsEditable: React.FC<Props> = ({ data, refetch }) => {
    return (
        <Tabs.Panel value="Waiting approval">
            {data.length === 0
                ?   <Center mt={100}><Title size={"h3"}>No waiting card(s)</Title></Center>
                :   <Grid mt={20}>
                        {data.map((card: Card, index: number) =>
                            <Grid.Col key={index} md={6} lg={4} p={20} span={'auto'}>
                                <Center>
                                    <UserCard card={card} refetch={refetch} edition={true} mode={"approval"} />
                                </Center>
                            </Grid.Col>
                        )}
                    </Grid>
            }
        </Tabs.Panel>
    );
}

export default WaitingCardsEditable;