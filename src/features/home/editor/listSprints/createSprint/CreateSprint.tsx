import { useEffect } from "react";

import { Modal, useMantineTheme, TextInput, Container, Text, Button, Group, NumberInput } from "@mantine/core";


import { sprintCreatedErrorNotification } from "components/notifications/errors";
import { sprintCreatedNotification } from "components/notifications/success";

import { useCreateSprintMutation } from "store/api/sprintAPI";

import { CreateSprintForm } from "./utils/CreateSprintForm";

import { numberFormat } from "features/global/cards/utils/dataTranslate";

import { MdOutlineAdd } from "react-icons/md";

interface Props {
    opened: boolean;
    setOpened: React.Dispatch<React.SetStateAction<boolean>>;
    refetch: any;
}

const CreateSprint: React.FC<Props> = ({opened, setOpened, refetch}) => {
    const [createSprint, result] = useCreateSprintMutation<any>();
    const theme = useMantineTheme();
    const form = CreateSprintForm();

    useEffect(() => {
        if (result.isError) {
            sprintCreatedErrorNotification(result.error.data.message);
            setOpened(false);
        } else if (result.isSuccess) {
            sprintCreatedNotification();
            setOpened(false);
            refetch();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [result])

    return (
        <Modal
            centered
            opened={opened}
            onClose={() => (setOpened(false), form.reset())}
            size={"xl"}
            title={<Text>Create a sprint</Text>}
            overlayProps={{color: theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2], opacity: 0.55, blur: 3}}
            radius={10}
        >
            <Container style={{width: "90%"}} mt={-20} p={20}>
                <form onSubmit={form.onSubmit((values) => createSprint({ name: values.name, workDaysNeeded: Number(values.workDaysNeeded) }))}>
                    <TextInput mt={20} required label="Sprint name" placeholder="Managment & Process" {...form.getInputProps('name', { type: 'input' })} />
                    <NumberInput mt={20} formatter={(val) => numberFormat(val!)} required precision={1} label="Jour(s)/homme" placeholder="3" {...form.getInputProps('workDaysNeeded', { type: 'input' })} />
                    <Group position="center" mt={50}>
                        <Button style={{width: 300}} maw={400} color={"violet"} leftIcon={<MdOutlineAdd size={20} />} variant="outline" type="submit">
                            Create sprint
                        </Button>
                    </Group>
                </form>
            </Container>
        </Modal>
    );
}

export default CreateSprint;