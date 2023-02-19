import { Anchor } from "@mantine/core";

interface Props {
    email: string;
}

const UserEmail: React.FC<Props> = ({email}) => {
    return (
        <Anchor href={`mailto:${email}`}>
            {email}
        </Anchor>
    );
}

export default UserEmail;