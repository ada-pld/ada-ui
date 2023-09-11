import { useEffect, useState } from "react";

import { Button, Card, Group } from "@mantine/core";
import { useApproveCardMutation } from "store/api/cardAPI";

import { Card as CardType } from "types/apiTypes";

import { CardsStyle } from "../../style/CardsStyle";

import { approveErrorNotification } from "components/notifications/errors";
import { approveCardNotification } from "components/notifications/success";

import RejectionModal from "../modals/RejectionModal";

interface Props {
    card: CardType;
    refetch: any;
}

const CardManagement: React.FC<Props> = ({ card, refetch }) => {
    const { classes } = CardsStyle();

    const [opened, setOpened] = useState(false);
    const [approveCard, approveResult] = useApproveCardMutation<any>();

    useEffect(() => {
        if (approveResult.isError) {
            if (approveResult.error.status === 400)
                approveErrorNotification();
        } else if (approveResult.isSuccess) {
            approveCardNotification();
            refetch();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [approveResult])

    return (
        <Card.Section className={classes.footer} mt={-5}>
            <Group position={"apart"}>
                <RejectionModal opened={opened} setOpened={setOpened} refetch={refetch} card={card} />
                <Button color="green" variant="light" size={"xs"} onClick={() => approveCard(card.id)}>Approve</Button>
                <Button color="red" variant="light" size={"xs"} onClick={() => {setOpened(true)}} >Reject</Button>
            </Group>
        </Card.Section>
    );
}

export default CardManagement;