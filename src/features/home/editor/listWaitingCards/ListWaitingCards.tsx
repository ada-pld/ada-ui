import { useEffect, useState } from "react";

import { Center, Divider, Grid, Title } from "@mantine/core";
import UserCard from "features/global/cards/UserCard";

import { PartsList } from "store/api/types/fetchedData";
import { Card, CardsStats } from "types/apiTypes";

import Filters from "./components/Filters";

interface Props {
    cards: CardsStats[];
    refetch: any;
    parts: PartsList[];
}

const ListWaitingCards: React.FC<Props> = ({cards, refetch, parts}) => {
    const cardsArray = cards.flatMap((card: CardsStats)  => card.cards);
    const finalCards = cardsArray.filter((card: Card) => card.status === "WAITING_APPROVAL");

    const [filteredCards, setFilteredCards] = useState(finalCards);
    
    const [partFilter, setPartFilter] = useState<string | null>(null);
    const [search, setSearch] = useState<string>("");

    useEffect(() => {
        let finalCards = cardsArray.filter((card: Card) => card.status === "WAITING_APPROVAL");
        let newFilteredCards = finalCards;

        if (partFilter)
            newFilteredCards = newFilteredCards.filter((card: Card) => card.part.name === partFilter);

        if (search !== "")
            newFilteredCards = newFilteredCards.filter((card: Card) => card.name.toLowerCase().includes(search.toLowerCase()));

        setFilteredCards(newFilteredCards);
    }, [partFilter, search, cards]);

    return (
        <div style={{height: "100%", width: "100%"}}>
            <Filters
                parts={parts}
                partFilter={partFilter}
                setPartFilter={setPartFilter}
                search={search}
                setSearch={setSearch}
            />
            <Divider mt={20} />
            {filteredCards.length === 0
                ?   <Center style={{height: "100%", width: "100%"}}><Title size={"h3"}>No waiting card(s)</Title></Center>
                :   <Grid mt={20}>
                        {filteredCards.map((card: Card, index: number) =>
                            <Grid.Col key={index} md={6} lg={4} p={20} span={'auto'}>
                                <Center>
                                    <UserCard card={card} refetch={refetch} edition={true} />
                                </Center>
                            </Grid.Col>
                        )}
                    </Grid>
            }
        </div>
    );
}

export default ListWaitingCards;