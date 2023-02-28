import { useEffect } from 'react';

import { Card, Group, Badge } from '@mantine/core';

import { Card as CardType } from "types/apiTypes";

import { statusTranslate, statusColor } from './utils/dataTranslate';

import { CardsStyle } from './style/CardsStyle';

import { useUpdateCardStatusMutation } from 'store/api/cardAPI';

import CardMenu from './components/CardMenu';

import { statusError2Notification, statusErrorNotification } from 'components/notifications/errors';

import CardBody from './components/cardParts/CardBody';
import CardTitle from './components/cardParts/CardTitle';
import CardStatusControl from './components/cardParts/CardStatusControl';
import CardManagement from './components/cardParts/CardManagement';

interface Props {
    card: CardType;
    refetch: any;
    edition: boolean;
}

const UserCard: React.FC<Props> = ({ card, refetch, edition }) => {
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
    }, [statusResult])

    return (
        <Card withBorder radius="sm" className={classes.card} p={0} shadow={"md"} mih={300}>
            <Card.Section className={classes.footer}>
                <Group position="apart">
                    <Badge variant="light" size="md" radius={"sm"} color={statusColor[`${card.status}`]}>{statusTranslate[`${card.status}`]}</Badge>
                    <CardMenu card={card} refetch={refetch} />
                </Group>
            </Card.Section>
            <CardTitle card={card} />
            <CardBody card={card} />
            { edition
                ? <CardManagement card={card} refetch={refetch} />
                : <CardStatusControl card={card} updateStatus={updateStatus} />
            }
        </Card>
    );
}

export default UserCard;