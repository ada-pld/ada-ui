import { useState } from "react";
import { Badge, Button, Container, Group, Tabs } from "@mantine/core";

import Head from "next/head";

import CustomLoader from "components/loader/CustomLoader";
import MeetingsList from "features/home/user/meetings";

import { useGetMeetings } from "hooks/api/useGetMeetings";

import { BsCalendarPlus } from "react-icons/bs";

import { Meeting } from "store/api/types/fetchedData";
import { useDisclosure } from "@mantine/hooks";
import CreateMeeting from "features/home/user/meetings/components/modals/createMeetingModal/CreateMeetingModal";
import { useAppSelector } from "store/hooks/hooks";

const Meetings = () => {
    const { data: meetings, refetch } = useGetMeetings();
    const [activeTab, setActiveTab] = useState<string | null>('PLANNED');
    const [opened, { open, close }] = useDisclosure(false);
    const role = useAppSelector((state) => state.user.auth.accessToken?.charAt(0));

    return meetings ? (
        <div>
            <Head><title>WAP | Meetings</title></Head>
            <CreateMeeting meetings={meetings} opened={opened} close={close} refetch={refetch} />
            <Container fluid p={0} m={0}>
                <h1 style={{textAlign: "center"}}>Meetings</h1>
                <Group position="center" mt={40} style={{width: "100%", minWidth: 400}}>
                    {role === "2" || role === "3" ?
                        <Button w={"30%"} miw={250} leftIcon={<BsCalendarPlus size={20} />} variant="outline" onClick={open}>
                            Create a meeting
                        </Button>
                        :<></>
                    }
                </Group>
                <Tabs variant="outline" radius={"sm"} defaultValue="Approved" mt={40} value={activeTab} onTabChange={setActiveTab}>
                    <Tabs.List grow position="center">
                        <Tabs.Tab value="PLANNED" rightSection={<Badge radius={"sm"} variant={activeTab === "PLANNED" ? "filled" : "light"}>{meetings.filter((meeting: Meeting) => meeting.sheduling === "PLANNED").length}</Badge>}>Planned</Tabs.Tab>
                        <Tabs.Tab value="PASSED" rightSection={<Badge radius={"sm"} variant={activeTab === "PASSED" ? "filled" : "light"}>{meetings.filter((meeting: Meeting) => meeting.sheduling === "PASSED").length}</Badge>}>Passed</Tabs.Tab>
                    </Tabs.List>
                    <MeetingsList meetings={meetings} refetch={refetch} variant={"PLANNED"} />
                    <MeetingsList meetings={meetings} refetch={refetch} variant={"PASSED"} />
                </Tabs>
            </Container>
        </div>
    ) : <CustomLoader />;
}

export default Meetings;