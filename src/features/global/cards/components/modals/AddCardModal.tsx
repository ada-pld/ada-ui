import { useEffect, useState } from "react";

import { Modal, useMantineTheme, NumberInput, Container, Group, TextInput, Select, Button, MultiSelect, Textarea, Title, Switch, Checkbox, Center, Loader, Text } from "@mantine/core"; 
import { AddCardForm } from "../../utils/addCardForm";

import { RxCardStackPlus } from "react-icons/rx";

import { useListParts } from "hooks/api/useListParts";
import { useListUsers } from "hooks/api/useListUsers";

import { numberFormat } from "../../utils/dataTranslate";
import { handleAssignees } from "../../utils/assigneesGesture";

import { useAppSelector } from "store/hooks/hooks";
import { useCreateCardMutation } from "store/api/cardAPI";
import { createdCardNotification } from "components/notifications/success";
import { createErrorNotification } from "components/notifications/errors";

interface Props {
    openAdd: boolean;
    setOpenAdd: React.Dispatch<React.SetStateAction<boolean>>;
    refetch: any;
}

const AddCardModal: React.FC<Props> = ({ openAdd, setOpenAdd, refetch }) => {
    const userId = useAppSelector((state) => state.user.auth.userId);

    const [multiple, setMultiple] = useState(false);
    const { data: parts } = useListParts(false);
    const { data: users } = useListUsers(false);
    const [createCard, createResult] = useCreateCardMutation<any>();

    const theme = useMantineTheme();
    const form = AddCardForm();

    useEffect(() => {
        if (createResult.isError) {
            if (createResult.error.status === 400)
                createErrorNotification();
        } else if (createResult.isSuccess) {
            createdCardNotification();
            refetch();
        }
        setOpenAdd(false);
        form.reset();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [createResult])

    return parts && users ? (
        <Modal
            centered
            opened={openAdd}
            onClose={() => (setOpenAdd(false), form.reset())}
            size={"90%"}
            title={<Text>Add a Card</Text>}
            overlayProps={{color: theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2], opacity: 0.55, blur: 3}}
            radius={10}
        >
            <Container style={{width: "90%"}} mt={-20} p={20}>
                <form onSubmit={form.onSubmit((values) => createCard({values}))}>
                    <TextInput required label="Name" placeholder="Page de connexion" mt={7} {...form.getInputProps('name', { type: 'input' })} />
                    <Group position="apart" grow spacing={"xl"}>
                        <TextInput required label="En tant que" placeholder="Particulier" mt={7} {...form.getInputProps('asWho', { type: 'input' })} />
                        <TextInput required label="Je veux" placeholder="Me connecter a la plateforme" mt={7} {...form.getInputProps('task', { type: 'input' })} />
                    </Group>
                    <Textarea required autosize minRows={2} maxRows={4} label="Description" placeholder="Cette user story permettra a l'utilisateur..." mt={7} {...form.getInputProps('description', { type: 'input' })} />
                    <Group position="apart" grow spacing={"xl"}>
                        <Select transitionProps={{duration: 250, transition: "pop", timingFunction: "ease"}} searchable clearable required data={parts.map((part) => {return {value: part.id, label: part.name}})} label="Part" radius={"sm"} withAsterisk mt={7} {...form.getInputProps('partId', { type: 'input' })}/>
                        <NumberInput formatter={(val) => numberFormat(val!)} required precision={1} label="Jour(s)/homme" placeholder="3" mt={7} {...form.getInputProps('workingDays', { type: 'input' })} />
                    </Group>
                        <Textarea required autosize minRows={2} maxRows={4} label={"Definitions of done"} description={"Each dod must be on a newline"} placeholder={`Champ Email\nChamp Mot de passe`} mt={7} {...form.getInputProps('dods', { type: 'input' })} />
                    <Group position="center" grow spacing={"xl"}>
                        <Center>
                            <Checkbox mt={25} label={"Share this card with someone"} checked={multiple} onChange={(event) => handleAssignees({checked: event.currentTarget.checked, setMultiple, form})} />
                        </Center>
                        {   multiple ?
                            <MultiSelect 
                                dropdownPosition="top"
                                transitionProps={{duration: 250, transition: "pop", timingFunction: "ease"}}
                                data={users.filter((user) => user.role !== "USER" && user.id !== userId).map((user) => {return {value: user.id, label: user.firstname + " " + user.lastname}})}
                                label="Assignees"
                                radius={"sm"}
                                mt={7}
                                {...form.getInputProps('assignees', { type: 'input' })}
                            /> : <></>
                        }
                    </Group>
                    <Group position="center" mt={25}>
                        <Button fullWidth maw={400} color={"violet"} leftIcon={<RxCardStackPlus size={20} />} variant="outline" type="submit">
                            Create card
                        </Button>
                    </Group>
                </form>
            </Container>
        </Modal>
    ) : <></>;
}

export default AddCardModal;