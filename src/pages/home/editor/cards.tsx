import { useState } from "react";

import Head from "next/head";

import { useGetUserCards } from "hooks/api/useGetUserCards";
import { useGetSprint } from "hooks/api/useGetSprint";
import { Container } from "@mantine/core";
import CustomLoader from "components/loader/CustomLoader";
import WaitingCards from "features/home/user/cardTabs/WaitingCards";

const Card = () => {
    const { data: cards, refetch } = useGetUserCards();
    const { data: sprint } = useGetSprint();

    console.log(cards)

    return cards && sprint ? (
        <div>
            <Head><title>WAP | Cards</title></Head>
            {cards &&
                <Container fluid p={0} m={0}>
                    <h1 style={{textAlign: "center"}}>Cards</h1>
                    <h3 style={{textAlign: "center", color: "dimgrey"}}>{sprint.name}</h3>
                    <WaitingCards data={cards} refetch={refetch} />
                </Container>
            }
        </div>
    ) : <CustomLoader />;
}

export default Card;