import { Card, Text, Group, Badge, createStyles, ActionIcon, useMantineTheme, Tooltip, Spoiler } from '@mantine/core';

import { BsCheck2, BsClock } from "react-icons/bs";
import { HiXMark } from "react-icons/hi2";

import { BiEditAlt, BiTrashAlt } from 'react-icons/bi';

import { Card as CardType } from "types/apiTypes";

import { statusTranslate, statusColor } from './utils/dataTranslate';

const useStyles = createStyles((theme) => ({
    card: {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
        width: 300
    },

    label: {
        marginBottom: theme.spacing.xs,
        lineHeight: 1,
        fontWeight: 700,
        fontSize: theme.fontSizes.xs,
        letterSpacing: -0.25,
        textTransform: 'uppercase',
    },

    section: {
        paddingLeft: theme.spacing.md,
        paddingRight: theme.spacing.md,
        paddingTop: theme.spacing.md,
        borderTop: `1px solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
        }`,
    },

    icon: {
        marginRight: 5,
        color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[5],
    },

    footer: {
        padding: `${theme.spacing.xs}px ${theme.spacing.lg}px`,
        marginTop: theme.spacing.md,
        borderTop: `1px solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
        }`,
    },
}));

interface Props {
    card: CardType;
}

const UserCard: React.FC<Props> = ({card}) => {
    const { classes } = useStyles();
    const theme = useMantineTheme();

    return (
        <Card withBorder radius="sm" className={classes.card} p={0} shadow={"md"} mih={300}>
            <Card.Section className={classes.footer}>
                <Group position="apart">
                <Badge variant="light" size="md" radius={"sm"} color={statusColor[`${card.status}`]}>{statusTranslate[`${card.status}`]}</Badge>
                <Group spacing={5}>
                    <Tooltip label={"Edit"} position="top" transitionDuration={300} withinPortal withArrow arrowSize={6} arrowRadius={4}>
                    <ActionIcon variant='transparent' color={"violet"} size={32}>
                        <BiEditAlt size={22} color={theme.colors.violet[6]} />
                    </ActionIcon>
                    </Tooltip>
                    <Tooltip label={"Delete"} position="top" transitionDuration={300} withinPortal withArrow arrowSize={6} arrowRadius={4}>
                    <ActionIcon variant='transparent' color={"violet"} size={32}>
                        <BiTrashAlt size={20} color={theme.colors.violet[6]} />
                    </ActionIcon>
                    </Tooltip>
                </Group>
                </Group>
            </Card.Section>
            <Card.Section className={classes.section}>
                <Group>
                    <div style={{width: "100%"}}>
                        <Badge variant="light" size='md' radius={"sm"} fullWidth color={"violet"}>{card.part.name}</Badge>
                        <Text weight={500} mih={50} mt={10}>{card.sprintId}.{card.partId}.{card.idInSprint === -1 ? "U" : card.idInSprint} - {card.name}</Text>
                        <Text color={theme.colors.violet[4]} mt={5} size={"sm"} italic>
                            {card.workingDays} Jours/Homme
                        </Text>
                    </div>
                </Group>
            </Card.Section>
            <Card.Section className={classes.section} mt="md">
                <Text size="sm" color="dimmed" className={classes.label}>
                    Description
                </Text>
                <Spoiler maxHeight={40} showLabel="Show more" hideLabel="Hide" style={{fontSize: 13}}>
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
            <Card.Section className={classes.footer}>
                <Group position={"right"}>
                    <Tooltip label={"Finished"} position="top" transitionDuration={300} withinPortal withArrow arrowSize={6} arrowRadius={4}>
                        <ActionIcon variant={card.status === "FINISHED" ? "light" : "transparent"} color={"green"} size={32}>
                        <BsCheck2 size={20} color={theme.colors.green[6]} />
                        </ActionIcon>
                    </Tooltip>
                    <Tooltip label={"In progress"} position="top" transitionDuration={300} withinPortal withArrow arrowSize={6} arrowRadius={4}>
                        <ActionIcon variant={card.status === "STARTED" ? "light" : "transparent"} color={"yellow"} size={32}>
                        <BsClock size={18} color={theme.colors.yellow[6]} />
                        </ActionIcon>
                    </Tooltip>
                    <Tooltip label={"Not started"} position="top" transitionDuration={300} withinPortal withArrow arrowSize={6} arrowRadius={4}>
                        <ActionIcon variant={card.status === "NOT_STARTED" ? "light" : "transparent"} color={"red"} size={32}>
                        <HiXMark size={20} color={theme.colors.red[6]} />
                        </ActionIcon>
                    </Tooltip>
                </Group>
            </Card.Section>
        </Card>
    );
}

export default UserCard;