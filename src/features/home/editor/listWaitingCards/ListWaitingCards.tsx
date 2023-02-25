import { Center, Grid, Title } from "@mantine/core";
import UserCard from "features/global/cards/UserCard";
import { Card, CardsStats } from "types/apiTypes";

interface Props {
    cards: CardsStats[];
    refetch: any;
}

const ListWaitingCards: React.FC<Props> = ({cards, refetch}) => {
    const cardsArray = cards.flatMap((card: CardsStats)  => card.cards);
    const filteredCards = cardsArray.filter((card: Card) => card.status === "WAITING_APPROVAL");

    return (
        <div style={{height: "100%", width: "100%"}}>
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