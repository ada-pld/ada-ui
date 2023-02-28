import { useEffect, useState } from "react";

import { Modal, useMantineTheme, NumberInput, Container, Group, TextInput, Select, Button, MultiSelect, Textarea, Title, Switch, Checkbox, Center } from "@mantine/core"; 
import { editCardForm } from "../../utils/editCardForm";

import { RxCardStackPlus } from "react-icons/rx";

import { useListParts } from "hooks/api/useListParts";
import { useListUsers } from "hooks/api/useListUsers";

import { numberFormater } from "../../utils/dataTranslate";
import { handleAssignees } from "../../utils/assigneesGesture";

import { useAppSelector } from "store/hooks/hooks";

import { Card } from "types/apiTypes";
import { useEditCardMutation } from "store/api/cardAPI";

import { editCardNotification } from "components/notifications/success";
import { editErrorNotification } from "components/notifications/errors";

interface Props {
    openEdit: boolean;
    setOpenEdit: React.Dispatch<React.SetStateAction<boolean>>;
    card: Card;
    refetch: any;
}

const EditCardModal: React.FC<Props> = ({ openEdit, setOpenEdit, card, refetch }) => {
    const userId = useAppSelector((state) => state.user.auth.userId);

    const { data: parts } = useListParts(false);
    const { data: users } = useListUsers(false);

    const [editCard, resultEditCard] = useEditCardMutation<any>();

    const [multiple, setMultiple] = useState(card.assignees.length > 0);

    const theme = useMantineTheme();
    let form = editCardForm(card);

    useEffect(() => {
        form.reset();
        form.setValues({name: card.name, asWho: card.asWho, task: card.task, description: card.description, partId: card.part.id, workingDays: card.workingDays, dods: card.dods, assignees: card.assignees.map((assignee) => assignee.id)})
    }, [openEdit])

    useEffect(() => {
        if (resultEditCard.isError) {
            if (resultEditCard.error.status === 400)
                editErrorNotification();
        } else if (resultEditCard.isSuccess) {
            editCardNotification();
            refetch();
        }
        setOpenEdit(false);
    }, [resultEditCard])

    return users && parts ? (
        <Modal
            centered
            opened={openEdit}
            onClose={() => (setOpenEdit(false), form.reset())}
            size={"90%"}
            title={<Title size={"h5"}>Edit a Card</Title>}
            overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
            overlayOpacity={0.55}
            overlayBlur={3}
            radius={10}
        >
            <Container style={{width: "90%"}} mt={-20} p={20}>
                <form onSubmit={form.onSubmit((values) => editCard({values: values, id: card.id}))}>
                    <TextInput required label="Name" placeholder="Page de connexion" mt={7} {...form.getInputProps('name', { type: 'input' })} />
                    <Group position="apart" grow spacing={"xl"}>
                        <TextInput required label="En tant que" placeholder="Particulier" mt={7} {...form.getInputProps('asWho', { type: 'input' })} />
                        <TextInput required label="Je veux" placeholder="Me connecter a la plateforme" mt={7} {...form.getInputProps('task', { type: 'input' })} />
                    </Group>
                    <Textarea required autosize minRows={2} maxRows={4} label="Description" placeholder="Cette user story permettra a l'utilisateur..." mt={7} {...form.getInputProps('description', { type: 'input' })} />
                    <Group position="apart" grow spacing={"xl"}>
                        <Select transitionDuration={250} transition="pop" transitionTimingFunction="ease" searchable clearable required data={parts.map((part) => {return {value: part.id, label: part.name}})} label="Part" radius={"sm"} withAsterisk mt={7} {...form.getInputProps('partId', { type: 'input' })}/>
                        <NumberInput formatter={(val) => numberFormater(val!)} required precision={1} label="Jour(s)/homme" placeholder="3" mt={7} {...form.getInputProps('workingDays', { type: 'input' })} />
                    </Group>
                    <Textarea required autosize minRows={2} maxRows={4} label={"Definitions of done"} description={"Each dod must be on a newline"} placeholder={`Champ Email\nChamp Mot de passe`} mt={7} {...form.getInputProps('dods', { type: 'input' })} />
                    { users.filter((user) => user.id !== userId).map((user) => user.role === "ADMIN" || user.role === "EDITOR")
                        ?   <Group position="center" grow spacing={"xl"}>
                                <Center>
                                    <Checkbox mt={25} label={"Share this card with someone"} checked={multiple} onChange={(event) => handleAssignees({checked: event.currentTarget.checked, setMultiple, form})} />
                                </Center>
                                {   multiple ?
                                    <MultiSelect 
                                        dropdownPosition="top"
                                        transitionDuration={250}
                                        transition="pop"
                                        transitionTimingFunction="ease"
                                        data={users.filter((user) => user.role !== "USER").map((user) => {return {value: user.id, label: user.firstname + " " + user.lastname}})}
                                        label="Assignees"
                                        radius={"sm"}
                                        mt={7}
                                        {...form.getInputProps('assignees', { type: 'input' })}
                                    /> : <></>
                                }
                            </Group>
                        :   <Group position="center" grow spacing={"xl"}>
                                <Center>
                                    <Checkbox mt={25} label={"Share this card with someone"} checked={multiple} onChange={(event) => handleAssignees({checked: event.currentTarget.checked, setMultiple, form})} />
                                </Center>
                                {   multiple ?
                                    <MultiSelect 
                                        dropdownPosition="top"
                                        transitionDuration={250}
                                        transition="pop"
                                        transitionTimingFunction="ease"
                                        data={users.filter((user) => user.role !== "USER" && userId !== user.id).map((user) => {return {value: user.id, label: user.firstname + " " + user.lastname}})}
                                        label="Assignees"
                                        radius={"sm"}
                                        mt={7}
                                        {...form.getInputProps('assignees', { type: 'input' })}
                                    /> : <></>
                                }
                            </Group>
                    }
                    <Group position="center" mt={25}>
                        <Button disabled={!form.isDirty()} fullWidth maw={400} color={"violet"} leftIcon={<RxCardStackPlus size={20} />} variant="outline" type="submit">
                            Update card
                        </Button>
                    </Group>
                </form>
            </Container>
        </Modal>
    ) : <></>;
}

export default EditCardModal;