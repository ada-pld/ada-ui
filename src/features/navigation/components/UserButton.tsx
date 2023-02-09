import { Group, Text } from '@mantine/core';

import style from "../styles/userButton.module.css";

import LittleColorScheme from 'components/littleColorScheme/LittleColorScheme';

interface Props {
    image?: string;
    name: string;
    email: string;
}
const UserButton: React.FC<Props> = ({ name, email }) => {
    return (
        <>
            <Group className={style.container}>
                <LittleColorScheme />
                <Group>
                    <div style={{ flex: 1 }}>
                        <Text size="sm" weight={500}>
                            {name}
                        </Text>
                        <Text color="dimmed" size="xs">
                            {email}
                        </Text>
                    </div>
                </Group>
            </Group>
        </>
    );
}

export default UserButton;