import { Group, Text } from "@mantine/core";
import { forwardRef } from "react";

interface ItemProps {
    label: string;
    icon?: React.ReactNode;
}

export const SelectItem = forwardRef<HTMLDivElement, ItemProps>(
    ({ label, icon, ...others }: ItemProps, ref) => (
        <div ref={ref} {...others}>
            <Group noWrap>
                {icon}
                <Text size="sm">{label}</Text>
            </Group>
        </div>
    )
);