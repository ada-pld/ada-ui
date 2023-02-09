import { ActionIcon, useMantineColorScheme } from '@mantine/core';

import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi";

const LittleColorScheme = () => {
    const { colorScheme, toggleColorScheme } = useMantineColorScheme();
    const dark = colorScheme === 'dark';

    return (
        <ActionIcon
            variant="outline"
            color={dark ? 'yellow' : 'violet'}
            onClick={() => toggleColorScheme()}
            title="Toggle color scheme"
            size={35}
        >
            {dark ? <HiOutlineSun size={22} /> : <HiOutlineMoon size={22} />}
        </ActionIcon>
    );
}

export default LittleColorScheme;