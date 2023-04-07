import { Tabs, Grid, Center, Title, SimpleGrid } from "@mantine/core";

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
                        {data.map((card: Card, index: number) =>
                            <Center key={index}>
                                <UserCard card={card} refetch={refetch} edition={true} mode={"approval"} />
                            </Center>
                        )}
                    </SimpleGrid>
            }
        </Tabs.Panel>
    );
}

export default WaitingCardsEditable;