import { createStyles, Progress, Text, Group, Badge, Paper } from '@mantine/core';
import { Sprint, UserCards } from 'types/apiTypes';

interface Props {
    title: string;
    color: "red" | "yellow" | "green";
    user: UserCards;
    progress: number;
    type: "finished" | "inProgress" | "notStarted";
    sprint: Sprint;
}

const useStyles = createStyles((theme) => ({
    card: {
        width: "100%",
        minWidth: 275,
        position: 'relative',
        padding: theme.spacing.md,
    },

    title: {
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        lineHeight: 1,
    },
}));

const Stats: React.FC<Props> = ({ title, color, user, progress, type, sprint }) => {
    const { classes } = useStyles();

    let totalCards = user.cards.filter(card => card.status !== "REJECTED" && card.status !== "WAITING_APPROVAL" && sprint.id === card.sprint.id).length;
    let totalDays = user.JHIntended + user.JHMissing;
    
    let nbrOfCards = user.cards.filter(card => (type === "notStarted" ? card.status === "NOT_STARTED" : type === "inProgress" ? card.status === "STARTED" : card.status === "FINISHED") && sprint.id === card.sprint.id).length;

    let percent = progress / totalDays * 100;

    return (
        <Paper radius={"sm"} withBorder className={classes.card} mt={10}>
            <Group position={"apart"}>
                <Text align={"center"} weight={700} className={classes.title}>{title}</Text>
                <Badge size={"sm"} radius={"sm"} color={color}>{nbrOfCards} / {totalCards} cards</Badge>
            </Group>

            <Group position={"apart"} mt={20}>
                <Text size={"sm"} color={"dimmed"}>
                    Progress
                </Text>
                <Text size={"sm"} color={"dimmed"}>
                    {percent.toFixed(1)} %
                </Text>
            </Group>

            <Progress value={percent} mt={5} radius={"xs"} animate color={color} />

            <Group position={"apart"} mt={15}>
                <Text size={"sm"}>{progress} jours / homme</Text>
            </Group>
        </Paper>
    );
}

export default Stats