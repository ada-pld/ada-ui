import { Badge, Card, Group, Text, useMantineTheme } from "@mantine/core";

import { Card as CardType } from "types/apiTypes";
import { CardsStyle } from "../../style/CardsStyle";

interface Props {
    card: CardType;
}

const CardTitle: React.FC<Props> = ({ card }) => {
    const { classes } = CardsStyle();
    const theme = useMantineTheme();

    return (
        <Card.Section className={classes.section}>
            <Group>
                <div style={{width: "100%"}}>
                    <Badge variant="light" size='md' radius={"sm"} fullWidth color={"violet"}>{card.part.name}</Badge>
                    <Text weight={500} mih={50} mt={10}>{card.sprintId}.{card.partId}.{card.idInSprint === -1 ? "U" : card.idInSprint} - {card.name}</Text>
                    <Text color={theme.colors.violet[4]} mt={5} size={"sm"} italic>
                        {card.workingDays} Jour(s)/Homme
                    </Text>
                </div>
            </Group>
        </Card.Section>
    )
}

export default CardTitle;