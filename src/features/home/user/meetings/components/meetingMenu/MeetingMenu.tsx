import { useEffect } from "react";

import { ActionIcon, Menu } from "@mantine/core";

import { HiOutlineDotsVertical, HiOutlineTrash } from "react-icons/hi";
import { BsCheckLg } from "react-icons/bs";
import { RiEditLine } from "react-icons/ri";

import { Meeting } from "store/api/types/fetchedData";
import EditMeetingModal from "../modals/editMeetingModal/EditMeetingModal";

import { useDisclosure } from "@mantine/hooks";

import moment from "moment";

import ValidateMeetingModal from "../modals/validateMeetingModal/ValidateMeetingModal";
import { useDeleteMeetingMutation } from "store/api/meetingsAPI";

import { deleteMeetingNotification } from "components/notifications/success";
import { meetingErrorNotification } from "components/notifications/errors";
import { useAppSelector } from "store/hooks/hooks";

interface Props {
    meeting: Meeting;
    refetch: any;
}

const MeetingMenu: React.FC<Props> = ({ meeting, refetch }) => {
    const userRole = useAppSelector((state) => state.user.auth.accessToken?.charAt(0));

    const meetingStart = moment.utc(meeting.date);
    const isMeetingActive =  moment().isAfter(meetingStart);

    const [deleteMeeting, result] = useDeleteMeetingMutation<any>();
    
    const [openedEdit, {open: openEdit, close: closeEdit}] = useDisclosure();
    const [openedValidate, {open: openValidate, close: closeValidate}] = useDisclosure();

    useEffect(() => {
        if (result.isError) {
            if (result.error.status === 400)
                meetingErrorNotification(result.data.message);
        } else if (result.isSuccess) {
            deleteMeetingNotification();
            refetch();
        }
    }, [result])

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
                        color={"green"}
                        onClick={openValidate}
                        icon={<BsCheckLg size={18} />}
                        disabled={(userRole === "0" || userRole === "1") || !isMeetingActive || meeting.sheduling === "PASSED"}
                    >
                        Validate meeting
                    </Menu.Item>
                    <Menu.Divider />
                    <Menu.Label>Danger zone</Menu.Label>
                    <Menu.Item disabled={userRole === "0" || userRole === "1"} icon={<RiEditLine size={18} />} onClick={openEdit} >Edit</Menu.Item>
                    <Menu.Item disabled={userRole === "0" || userRole === "1"}  color="red" icon={<HiOutlineTrash size={18} />} onClick={() => deleteMeeting(meeting.id)}>Delete meeting</Menu.Item>
                </Menu.Dropdown>
            </Menu>
        </>
    );
}

export default MeetingMenu;