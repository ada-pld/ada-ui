import { ActionIcon, useMantineTheme } from "@mantine/core";
import { BsListCheck } from "react-icons/bs";

interface Props {
    setOpenDods: React.Dispatch<React.SetStateAction<boolean>>;
}

const DodsButton = ({ setOpenDods }: Props) => {
    const theme = useMantineTheme();

    return (
        <ActionIcon size={"lg"} color={"violet"} onClick={() => setOpenDods(true)}>
            <BsListCheck size={25} color={theme.colors.violet[5]} />  
        </ActionIcon>
    );
}

export default DodsButton;