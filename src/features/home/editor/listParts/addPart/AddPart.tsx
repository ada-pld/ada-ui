import { useEffect } from "react";
import { useMantineTheme, Modal, Container, TextInput, Button, Group, Title } from "@mantine/core";

import { addPartForm } from "./utils/addPartForm";

import { BiAddToQueue } from "react-icons/bi";
import { useCreatePartMutation } from "store/api/partsAPI";

import { partErrorNotification } from "components/notifications/errors";
import { partCreatedNotification } from "components/notifications/success";


interface Props {
    opened: boolean;
    setOpened: React.Dispatch<React.SetStateAction<boolean>>;
    refetch: any;
}

const AddPart: React.FC<Props> = ({opened, setOpened, refetch}) => {
    const [createPart, result] = useCreatePartMutation<any>();
    const theme = useMantineTheme();
    const form = addPartForm();

    useEffect(() => {
        if (result.isError) {
            if (result.error.status === 400)
                partErrorNotification();
            setOpened(false);
        } else if (result.isSuccess) {
            partCreatedNotification();
            setOpened(false);
            refetch();
        }
    }, [result])

    return (
        <Modal
            centered
            opened={opened}
            onClose={() => (setOpened(false), form.reset())}
            size={"sm"}
            title={<Title size={"h5"}>Add a part</Title>}
            overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
            overlayOpacity={0.55}
            overlayBlur={3}
            radius={10}
        >
            <Container style={{width: "90%"}} mt={-20} p={20}>
                <form onSubmit={form.onSubmit((values) => createPart(values.name))}>
                    <TextInput required label="Part name" placeholder="Frontend" mt={20} {...form.getInputProps('name', { type: 'input' })} />
                    <Group position={"center"}>
                        <Button fullWidth maw={150} mt={30} color={"violet"} leftIcon={<BiAddToQueue size={20} />} variant="outline" type="submit">
                            Add part
                        </Button>
                    </Group>
                </form>
            </Container>
        </Modal>
    );
}

export default AddPart;