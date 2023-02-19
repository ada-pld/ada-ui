import { Badge, Group } from "@mantine/core";

interface Props {
    role: string;
}

const roleColors: Record<string, string> = {
    user: "violet",
    maintener: "teal",
    editor: "yellow",
    admin: "red",
};

const UserRole: React.FC<Props> = ({role}) => {
    return (
        <Group position="left">
            <Badge
                color={roleColors[role.toLowerCase()]}
                variant={"light"}
                radius={"sm"}
            >
                {role}
            </Badge>
        </Group>
    );
}

export default UserRole;