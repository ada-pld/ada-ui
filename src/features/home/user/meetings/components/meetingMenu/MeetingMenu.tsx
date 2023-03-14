import { ActionIcon, Menu } from "@mantine/core";

import { HiOutlineDotsVertical, HiOutlineTrash } from "react-icons/hi";
import { BsCheckLg } from "react-icons/bs";
import { RiEditLine } from "react-icons/ri";

import { Meeting } from "store/api/types/fetchedData";
import EditMeetingModal from "../modals/editMeetingModal/EditMeetingModal";
import { useDisclosure } from "@mantine/hooks";
import moment from "moment";
import ValidateMeetingModal from "../modals/validateMeetingModal/ValidateMeetingModal";

interface Props {
    meeting: Meeting;
    refetch: any;
}

const MeetingMenu: React.FC<Props> = ({ meeting, refetch }) => {
    const meetingStart = moment.utc(meeting.date);
    const isMeetingActive =  moment().isAfter(meetingStart);
    
    const [openedEdit, {open: openEdit, close: closeEdit}] = useDisclosure();
    const [openedValidate, {open: openValidate, close: closeValidate}] = useDisclosure();

    return (
        <>
            <EditMeetingModal meeting={meeting} refetch={refetch} opened={openedEdit} close={closeEdit} />
            <ValidateMeetingModal meeting={meeting} refetch={refetch} opened={openedValidate} close={closeValidate} />
            <Menu position="left" shadow="md" width={200} trigger="hover" openDelay={100} closeDelay={400}>
                <Menu.Target>
                    <ActionIcon size={"lg"} mt={-10} mr={-10} color={meeting.rendezVousGroup.groupColor} >
                        <HiOutlineDotsVertical size={25} color={meeting.rendezVousGroup.groupColor} />  
                    </ActionIcon>
                </Menu.Target>

                <Menu.Dropdown>
                    <Menu.Label>Meeting</Menu.Label>
                    <Menu.Item
                        disabled={!isMeetingActive}
                        color={"green"}
                        onClick={openValidate}
                        icon={<BsCheckLg size={18} />}
                    >
                        Validate meeting
                    </Menu.Item>
                    <Menu.Divider />
                    <Menu.Label>Danger zone</Menu.Label>
                    <Menu.Item icon={<RiEditLine size={18} />} onClick={openEdit} >Edit</Menu.Item>
                    <Menu.Item color="red" icon={<HiOutlineTrash size={18} />}>Delete meeting</Menu.Item>
                </Menu.Dropdown>
            </Menu>
        </>
    );
}

export default MeetingMenu;