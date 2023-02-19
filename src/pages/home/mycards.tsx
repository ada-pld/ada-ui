import Head from "next/head";

import { Container, Group, Button, Grid, Center } from "@mantine/core";

import { RxCardStackPlus } from "react-icons/rx";

import UserCard from "features/global/cards/UserCard";

import { useGetCards } from "hooks/api/useGetCards";
import { Card } from "types/apiTypes";

const MyCards = () => {
    const { data } = useGetCards();

    return (
        <div>
            <Head><title>WAP | MyCards</title></Head>
            {data &&
                <Container m={0} fluid>
                    <h1 style={{paddingBottom: 20, textAlign: "center"}}>My Cards</h1>
                    <h3 style={{marginTop: -10, textAlign: "center", color: "dimgrey"}}>{data[0].sprint.name}</h3>
                    <Group position="center" style={{width: "100%", minWidth: 400}}>
                        <Button w={"30%"} mt={20} miw={250} leftIcon={<RxCardStackPlus size={20} />} variant="outline">
                            Add a card
                        </Button>
                    </Group>
                    <Grid mt={40} grow>
                        {data.map((card: Card, index: number) =>
                            <Grid.Col key={index} p={20} span={"auto"}>
                                <Center>
                                    <UserCard card={card} />
                                </Center>
                            </Grid.Col>
                        )}
                    </Grid>
                </Container>
            }
        </div>
    );
}

export default MyCards;