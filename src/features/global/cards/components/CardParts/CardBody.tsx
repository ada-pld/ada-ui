import { Card, Group, Spoiler, Text } from "@mantine/core";

import { Card as CardType } from "types/apiTypes";
import { CardsStyle } from "../../style/CardsStyle";

interface Props {
    card: CardType;
}

const CardBody: React.FC<Props> = ({ card }) => {
    const { classes } = CardsStyle();

    return (
        <Card.Section className={classes.section} mt="md" pb={(card.status !== "WAITING_APPROVAL" && card.status !== "REJECTED") ? 0 : 20}>
            <Spoiler maxHeight={card.status === "REJECTED" ? 63 : 50} showLabel="Show more" hideLabel="Hide" style={{fontSize: 13}}>
                { card.status === "REJECTED" &&
                    <>
                        <Text size="sm" color={"red"} className={classes.label}>Rejection reason :</Text>
                        <Text size="xs" color="red" pb={15}>
                            {card.rejectionReason}
                        </Text>
                    </>
                } 
                <Text size="sm" color="dimmed">
                    <span className={classes.part}>En tant que</span> <span style={{fontSize: 12, letterSpacing: -0.25}}>{card.asWho.charAt(0).toLowerCase() + card.asWho.slice(1)}</span> <span className={classes.part}>je veux</span> <span style={{fontSize: 12, letterSpacing: -0.25}}>{card.task.charAt(0).toLowerCase() + card.task.slice(1)}</span>
                </Text>
                <Text size="sm" color="dimmed" className={classes.label} mt={20}>
                    Description
                </Text>
                <Text size="xs" color="dimmed">
                    {card.description}
                </Text>
                <Text size="sm" color="dimmed" mt={20} className={classes.label}>
                    Assignees
                </Text>
                <Text size="xs" color="dimmed" style={{paddingBottom: 10}}>
                    {card.assignees.map((person, index) =>
                        <Text size="xs" color="dimmed" key={index}>
                            - {person.firstname} {person.lastname}
                        </Text>
                    )}
                </Text>
            </Spoiler>
        </Card.Section>
    );
}

export default CardBody;