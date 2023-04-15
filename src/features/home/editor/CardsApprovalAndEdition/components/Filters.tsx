import { Group, Select, TextInput } from "@mantine/core";

import { PartsList } from "store/api/types/fetchedData";
import { RiSearchLine } from "react-icons/ri";
import { useViewportSize } from "@mantine/hooks";

interface Props {
    parts: PartsList[];
    partFilter: string | null;
    setPartFilter: React.Dispatch<React.SetStateAction<string | null>>;
    search: string;
    setSearch: React.Dispatch<React.SetStateAction<string>>;
}

const Filters: React.FC<Props> = ({parts, partFilter, setPartFilter, search, setSearch}) => {
    const { width } = useViewportSize();

    return (
        <Group mt={40} ml={30} mr={30} position={width <= 800 ? "center" : "apart"} align={"center"}>
            <TextInput variant="filled" style={{width: 300}} icon={<RiSearchLine />} placeholder="Search..." value={search} onChange={(event) => setSearch(event.currentTarget.value)} />
            <Group>
                <Select variant="filled" style={{width: 300}} clearable placeholder={"Part"} size={"sm"} value={partFilter} onChange={setPartFilter} data={parts.map(part => part.name)} />
            </Group>
        </Group>
    );
}

export default Filters;