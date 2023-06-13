import { Group, Text, UnstyledButton, createStyles, useMantineTheme } from '@mantine/core';

import style from "../styles/userButton.module.css";

import LittleColorScheme from 'components/littleColorScheme/LittleColorScheme';
import { MdOutlineChevronRight } from 'react-icons/md';
import { useRouter } from 'next/router';

interface Props {
    firstname: string;
    lastname: string;
    email: string;
    onClose?: () => void;
}

const useStyles = createStyles((theme) => ({
    user: {
        padding: 7,
        borderRadius: 5,

        '&:hover': {
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[1],
        },
    },
}));

const UserButton: React.FC<Props> = ({ firstname, lastname, email, onClose }) => {
    const theme = useMantineTheme();
    const { classes } = useStyles();
    const router = useRouter();

    const fullName = firstname + " " + lastname;

    return (
        <Group className={style.container}>
            <LittleColorScheme />
            <UnstyledButton className={classes.user} onClick={() => (router.push("/home/profile"), onClose && onClose())}>
                <div style={{ display: "flex", height: 40, alignItems: "center" }}>
                    { firstname !== undefined &&
                        <>
                            <div>
                                <Text id="nav-user-name" size="sm" weight={500} style={{ maxWidth: "calc(100%)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap"}}>
                                    {fullName.length > 18 ? fullName.slice(0, 18) + "..." : fullName}
                                </Text>
                                <Text id="nav-user-email" color="dimmed" size="xs" style={{ maxWidth: "calc(100%)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap"}}>
                                    {email.length >= 22 ? email.slice(0, 19) + "..." : email}
                                </Text>
                            </div>
                            {<MdOutlineChevronRight style={{ marginLeft: 7 }} size={20} color={theme.colors.dark[2]} />}
                        </>
                    }
                </div>
            </UnstyledButton>
        </Group>
    );
}

export default UserButton;