import { Table } from '@mantine/core';

import { PartsList } from 'store/api/types/fetchedData';

interface Props {
    parts: PartsList[];
}

const PartsTable: React.FC<Props> = ({ parts }) => {
    const rows = parts.map((part: PartsList, index: number) => (
        <tr key={index}>
            <td>{part.id}</td>
            <td>{part.name}</td>
            <td>{part.cards?.length || "No sprint selected"}</td>
            <td>{part.cards?.filter(item => item.sprint.active).length || "No sprint selected"}</td>
        </tr>
    ));

    return (
        <div style={{overflow: "auto"}}>
            <Table highlightOnHover striped verticalSpacing="xs">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Name</th>
                        <th>Total cards</th>
                        <th>Cards in sprint</th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </Table>
        </div>
    );
}

export default PartsTable;