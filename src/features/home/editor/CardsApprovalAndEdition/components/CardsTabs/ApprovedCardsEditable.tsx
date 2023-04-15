import { Tabs, Grid, Center, Title, SimpleGrid } from "@mantine/core";

import { Card } from "types/apiTypes";

import UserCard from "features/global/cards/UserCard";

interface Props {
    data: Card[];
    refetch: any;
}

const ApprovedCardsEditable: React.FC<Props> = ({ data, refetch }) => {
    return (
        <Tabs.Panel value="Approved">
            {data.length === 0
                ?   <Center mt={100}><Title size={"h3"}>No waiting card(s)</Title></Center>
                :   <SimpleGrid
                        mt={20}
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
                        {data.map((card: Card, index: number) =>
                            <Center key={index} pt={30}>
                                <UserCard card={card} refetch={refetch} edition={true} mode={"none"} />
                            </Center>
                        )}
                    </SimpleGrid>
            }
        </Tabs.Panel>
    );
}

export default ApprovedCardsEditable;