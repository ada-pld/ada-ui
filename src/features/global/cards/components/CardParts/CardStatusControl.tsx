import { ActionIcon, Card, Group, Tooltip, useMantineTheme } from "@mantine/core";
import { BsCheck2, BsClock } from "react-icons/bs";
import { HiXMark } from "react-icons/hi2";

import { Card as CardType } from "types/apiTypes";

import { CardsStyle } from "../../style/CardsStyle";

interface Props {
    card: CardType;
    updateStatus: any;
}

const CardStatusControl: React.FC<Props> = ({ card, updateStatus }) => {
    const { classes } = CardsStyle();
    const theme = useMantineTheme();

    return (
        <>
            {card.status !== "WAITING_APPROVAL" && card.status !== "REJECTED" &&
                <Card.Section className={classes.footer}>
                    <Group position={"apart"}>
                        <Tooltip label={"Finished"} transitionProps={{duration: 300, transition: "pop", timingFunction: "ease"}} withinPortal withArrow arrowSize={6} arrowRadius={4}>
                            <ActionIcon onClick={() => updateStatus({id: card.id, status: "finished"})} variant={card.status === "FINISHED" ? "light" : "transparent"} color={"green"} size={32}>
                                <BsCheck2 size={20} color={theme.colors.green[6]} />
                            </ActionIcon>
                        </Tooltip>
                        <Tooltip label={"In progress"} position="top" transitionProps={{duration: 300, transition: "pop", timingFunction: "ease"}} withinPortal withArrow arrowSize={6} arrowRadius={4}>
                            <ActionIcon onClick={() => updateStatus({id: card.id, status: "inprogress"})} variant={card.status === "STARTED" ? "light" : "transparent"} color={"yellow"} size={32}>
                                <BsClock size={18} color={theme.colors.yellow[6]} />
                            </ActionIcon>
                        </Tooltip>
                        <Tooltip label={"Not started"} position="top" transitionProps={{duration: 300, transition: "pop", timingFunction: "ease"}} withinPortal withArrow arrowSize={6} arrowRadius={4}>
                            <ActionIcon onClick={() => updateStatus({id: card.id, status: "notstarted"})} variant={card.status === "NOT_STARTED" ? "light" : "transparent"} color={"red"} size={32}>
                                <HiXMark size={20} color={theme.colors.red[6]} />
                            </ActionIcon>
                        </Tooltip>
                    </Group>
                </Card.Section>
            }
        </>
    );
}

export default CardStatusControl;