import { useEffect } from "react";
import { useMantineTheme, Modal, Container, TextInput, Button, Group, Title, Textarea } from "@mantine/core";

import { rejectCardForm } from "../../utils/rejectCardForm";

import { BiAddToQueue } from "react-icons/bi";

import { rejectErrorNotification } from "components/notifications/errors";
import { rejectCardNotification } from "components/notifications/success";

import { useRejectCardMutation } from "store/api/cardAPI";

import { Card } from "types/apiTypes";
import { RxCross2 } from "react-icons/rx";

interface Props {
    opened: boolean;
    setOpened: React.Dispatch<React.SetStateAction<boolean>>;
    refetch: any;
    card: Card;
}

const RejectionModal: React.FC<Props> = ({opened, setOpened, refetch, card}) => {
    const [rejectCard, rejectResult] = useRejectCardMutation<any>();

    const theme = useMantineTheme();
    const form = rejectCardForm();

    useEffect(() => {
        if (rejectResult.isError) {
            if (rejectResult.error.status === 400)
                rejectErrorNotification();
            setOpened(false);
        } else if (rejectResult.isSuccess) {
            rejectCardNotification();
            setOpened(false);
            refetch();
        }
        form.reset();
    }, [rejectResult])

    return (
        <Modal
            centered
            opened={opened}
            onClose={() => (setOpened(false), form.reset())}
            size={"lg"}
            title={<Title size={"h5"}>Reject card</Title>}
            overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
            overlayOpacity={0.55}
            overlayBlur={3}
            radius={10}
        >
            <Container style={{width: "90%"}} mt={-20} p={20}>
                <form onSubmit={form.onSubmit((values) => rejectCard({id: card.id, reason: values.reason}))}>
                    <Textarea required minRows={3} maxRows={5} label="Reason" placeholder="Rejection reason" mt={20} {...form.getInputProps('reason', { type: 'input' })} />
                    <Group position={"center"}>
                        <Button fullWidth maw={150} mt={30} color={"red"} variant="outline" type="submit">
                            Reject card
                        </Button>
                    </Group>
                </form>
            </Container>
        </Modal>
    );
}

export default RejectionModal;