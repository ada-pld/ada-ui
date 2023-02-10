import { Table } from '@mantine/core';

import { UsersList } from 'store/api/types/fetchedData';

interface Props {
    users: UsersList[];
}

const UsersTable: React.FC<Props> = ({ users }) => {
    const rows = users.map((user: UsersList, index: number) => (
        <tr key={index}>
            <td>{user.firstname}</td>
            <td>{user.lastname}</td>
            <td>{user.email}</td>
            <td>{user.role}</td>
        </tr>
    ));
    
    return (
        <Table striped highlightOnHover withBorder withColumnBorders verticalSpacing="xs">
            <thead>
                <tr>
                    <th>First name</th>
                    <th>Last name</th>
                    <th>Email</th>
                    <th>Role</th>
                </tr>
            </thead>
            <tbody>{rows}</tbody>
        </Table>
    );
}

export default UsersTable;