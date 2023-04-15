import { useEffect } from 'react';

import { Card, Group, Badge } from '@mantine/core';

import { Card as CardType } from "types/apiTypes";

import { statusTranslate, statusColor } from './utils/dataTranslate';

import { CardsStyle } from './style/CardsStyle';

import { useUpdateCardStatusMutation } from 'store/api/cardAPI';

import CardMenu from './components/CardMenu';

import { statusError2Notification, statusErrorNotification } from 'components/notifications/errors';

import CardBody from './components/CardParts/CardBody';
import CardTitle from './components/CardParts/CardTitle';
import CardStatusControl from './components/CardParts/CardStatusControl';
import CardManagement from './components/CardParts/CardManagement';

interface Props {
    card: CardType;
    refetch: any;
    edition: boolean;
    mode: "status" | "approval" | "none";
}

const UserCard: React.FC<Props> = ({ card, refetch, edition, mode }) => {
    const { classes } = CardsStyle();

    const [updateStatus, statusResult] = useUpdateCardStatusMutation<any>();

    useEffect(() => {
        if (statusResult.isError) {
            if (statusResult.error.status === 403)
                statusErrorNotification();
            if (statusResult.error.status === 400)
                statusError2Notification();
        } else if (statusResult.isSuccess) {
            refetch();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [statusResult])

    console.log(card.status)

    return (
        <Card withBorder radius="sm" className={classes.card} shadow={"md"} mih={300}>
            <Card.Section className={classes.header}>
                <Group position="apart">
                    <Badge variant="light" size="md" radius={"sm"} color={statusColor[`${card.status}`]}>{statusTranslate[`${card.status}`]}</Badge>
                    <CardMenu card={card} refetch={refetch} edition={edition} />
                </Group>
            </Card.Section>
            <CardTitle card={card} />
            <CardBody card={card} />
            { mode === "approval"
                ?   <CardManagement card={card} refetch={refetch} />
                :   mode === "status"
                ?   <CardStatusControl card={card} updateStatus={updateStatus} />
                :   <></>
            }
        </Card>
    );
}

export default UserCard;