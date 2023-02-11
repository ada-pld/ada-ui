import { ActionIcon, Table, Group } from '@mantine/core';

import { UsersList } from 'store/api/types/fetchedData';

import { TbEdit } from 'react-icons/tb';
import EditUser from '../editUser/EditUser';
import { useState } from 'react';

interface Props {
    users: UsersList[];
}

const UsersTable: React.FC<Props> = ({ users }) => {
    const [opened, setOpened] = useState(false);
    const [selectedUser, setSelectedUser] = useState<UsersList | null>(null);

    const rows = users.map((user: UsersList, index: number) => (
        <tr key={index}>
            <td>{user.firstname}</td>
            <td>{user.lastname}</td>
            <td>{user.email}</td>
            <td>{user.role}</td>
            <td>
                <Group position='center'>
                    <ActionIcon color="violet" size="md" variant="light">
                        <TbEdit size={24} onClick={() => {
                            setSelectedUser(user);
                            setOpened(true);
                        }} />
                    </ActionIcon>
                </Group>
            </td>
        </tr>
    ));
    
    return (
        <>
            {selectedUser && <EditUser user={selectedUser} setSelectedUser={setSelectedUser} opened={opened} setOpened={setOpened} />}
            <Table striped highlightOnHover withBorder withColumnBorders verticalSpacing="xs">
                <thead>
                    <tr>
                        <th>First name</th>
                        <th>Last name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Edit</th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </Table>
        </>
    );
}

export default UsersTable