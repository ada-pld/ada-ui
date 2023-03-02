import { Group, Text } from '@mantine/core';

import style from "../../styles/userButton.module.css";

import LittleColorScheme from 'components/littleColorScheme/LittleColorScheme';

interface Props {
    firstname: string;
    lastname: string;
    email: string;
}

const UserButton: React.FC<Props> = ({ firstname, lastname, email }) => {
    return (
        <Group className={style.container}>
            <LittleColorScheme />
            <Group>
                <div style={{ flex: 1, height: 40 }}>
                    { firstname !== undefined &&
                        <>
                            <Text size="sm" weight={500}>
                                {firstname} {lastname}
                            </Text>
                            <Text color="dimmed" size="xs">
                                {email}
                            </Text>
                        </>
                    }
                </div>
            </Group>
        </Group>
    );
}

export default UserButton;