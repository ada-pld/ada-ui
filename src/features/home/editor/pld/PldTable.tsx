import { Anchor, Table } from "@mantine/core";

import { PLD } from "store/api/types/fetchedData";

interface Props {
    pldList: PLD[];
}

const PldTable: React.FC<Props> = ({ pldList }) => {
    const url = process.env.BASE_URL || "";

    return (
        <Table mt={50} striped highlightOnHover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Sprint</th>
                    <th>Version</th>
                    <th>Download path</th>
                </tr>
            </thead>
            <tbody>
                {pldList.map((pld, index) => (
                    <tr key={index}>
                        <td>{pld.id}</td>
                        <td>{pld.sprint.name}</td>
                        <td>{pld.versionInSprint}</td>
                        <td>
                            <Anchor href={url + pld.downloadPath}>
                                {pld.downloadPath}
                            </Anchor>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
}

export default PldTable;