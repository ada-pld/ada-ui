import { Group, Text } from "@mantine/core";
import { ReactNode, forwardRef } from "react";

import { IconType } from "react-icons";

interface ItemProps extends React.ComponentPropsWithoutRef<'div'> {
    icon: IconType;
    label: string;
    description: string;
}
  
const StatusSelectItem = forwardRef<HTMLDivElement, ItemProps>(
    ({ icon: Icon, label, description, ...others }: ItemProps, ref) => (
        <div ref={ref} {...others}>
            <Group noWrap>
                <Icon size={18} />
                <div>
                    <Text size="sm">{label}</Text>
                </div>
            </Group>
        </div>
    )
);

export default StatusSelectItem;