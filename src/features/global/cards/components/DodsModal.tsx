import { Modal, useMantineTheme, Title, Text, Badge, Group, Container, Stack, List } from "@mantine/core"; 

import { Card } from "types/apiTypes";
import { statusColor, statusTranslate } from "../utils/dataTranslate";

interface Header {
    card: Card;
}

interface Props {
    openDods: boolean;
    setOpenDods: React.Dispatch<React.SetStateAction<boolean>>;
    card: Card;
}

const Header = ({ card }: Header) => {
    return (
        <Group>
            <Badge variant="light" size='md' radius={"sm"} color={"violet"}>{card.part.name}</Badge>
            <Badge variant="light" size="md" radius={"sm"} color={statusColor[`${card.status}`]}>{statusTranslate[`${card.status}`]}</Badge>  
        </Group>
    );
}

const DodsModal: React.FC<Props> = ({ openDods, setOpenDods, card }) => {
    const splitedDoDs = card.dods.split('\n');
    const theme = useMantineTheme();

    return (
        <Modal
            overflow="inside"
            centered
            opened={openDods}
            onClose={() => (setOpenDods(false))}
            size={"xl"}
            title={<Header card={card} />}
            overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
            overlayOpacity={0.55}
            overlayBlur={3}
            radius={10}
            transitionDuration={200}
        >
            <Container>
                <Stack align={"center"} spacing={10}>
                    <Title size={"h3"}>{card.name}</Title>
                    <Text size={16} italic color={"violet"}>{card.workingDays} Jour(s)/Homme</Text>
                </Stack>
                <List withPadding spacing={10} mt={30} pb={30}>
                    {splitedDoDs.map((dod: string, index: number) => (
                            <List.Item key={index}><Text size={14}>{dod}</Text></List.Item>
                    ))}
                </List>
            </Container>
        </Modal>
    );
}

export default DodsModal;