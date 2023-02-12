import { useMantineColorScheme, SegmentedControl, Group, Center, Box } from '@mantine/core';

import { BiMoon, BiSun } from "react-icons/bi";

interface Props {
    style?: React.CSSProperties;
    position: "left" | "center" | "right";
}

const ColorScheme: React.FC<Props> = ({position, style}) => {
    const { colorScheme, toggleColorScheme } = useMantineColorScheme();

    return (
        <Group position={position} style={{...style}}>
            <SegmentedControl
                value={colorScheme}
                onChange={(value: 'light' | 'dark') => toggleColorScheme(value)}
                data={[
                    {
                        value: 'light',
                        label: (
                            <Center>
                                <BiSun size={20} />
                                <Box ml={10}>Light</Box>
                            </Center>
                        ),
                    },
                    {
                        value: 'dark',
                        label: (
                            <Center>
                                <BiMoon size={16} />
                                <Box ml={10}>Dark</Box>
                            </Center>
                        ),
                    },
                ]}
            />
        </Group>
    );
}

export default ColorScheme;