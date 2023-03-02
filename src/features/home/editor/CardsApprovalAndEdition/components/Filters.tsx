import { Group, Select, TextInput } from "@mantine/core";

import { PartsList } from "store/api/types/fetchedData";
import { RiSearchLine } from "react-icons/ri";

interface Props {
    parts: PartsList[];
    partFilter: string | null;
    setPartFilter: React.Dispatch<React.SetStateAction<string | null>>;
    search: string;
    setSearch: React.Dispatch<React.SetStateAction<string>>;
}

const Filters: React.FC<Props> = ({parts, partFilter, setPartFilter, search, setSearch}) => {
    return (
        <Group mt={40} ml={30} mr={30} position={"apart"} align={"center"}>
            <Group>
                <Select clearable placeholder={"Part"} size={"sm"} value={partFilter} onChange={setPartFilter} data={parts.map(part => part.name)} />
            </Group>
            <TextInput style={{width: 300}} icon={<RiSearchLine />} placeholder="Search..." value={search} onChange={(event) => setSearch(event.currentTarget.value)} />
        </Group>
    );
}

export default Filters;