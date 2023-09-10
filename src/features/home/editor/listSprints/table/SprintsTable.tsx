import { Button, Table } from '@mantine/core';
import { selectSprintErrorNotification } from 'components/notifications/errors';
import { selectSprintNotification } from 'components/notifications/success';
import { useEffect } from 'react';
import { useSelectSprintMutation } from 'store/api/sprintAPI';

import { Sprint } from 'types/apiTypes';

interface Props {
    sprints: Sprint[];
    refetch: any;
}

const SprintsTable: React.FC<Props> = ({ sprints, refetch }) => {
    const [select, result] = useSelectSprintMutation<any>();

    useEffect(() => {
        if (result.isError) {
            if (result.error.status === 400)
                selectSprintErrorNotification(result.error.data.message);
        } else if (result.isSuccess) {
            selectSprintNotification();
            refetch();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [result])

    const rows = sprints.map((sprint: Sprint, index: number) => (
        <tr key={index}>
            <td>{sprint.id}</td>
            <td>{sprint.name}</td>
            <td>{sprint.cards.length}</td>
            <td>{sprint.workDaysNeeded}</td>
            <td>{<Button disabled={sprint.active} onClick={() => select(sprint.id)} >select</Button>}</td>
        </tr>
    ));

    return (
        <div style={{overflow: "auto", marginTop: 20}}>
            <Table highlightOnHover striped verticalSpacing="xs">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Name</th>
                        <th>Total cards</th>
                        <th>Work days needed</th>
                        <th>Active</th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </Table>
        </div>
    );
}

export default SprintsTable;