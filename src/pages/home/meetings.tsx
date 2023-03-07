import { useState } from "react";
import { Badge, Button, Container, Group, Tabs } from "@mantine/core";

import Head from "next/head";

import CustomLoader from "components/loader/CustomLoader";
import MeetingsList from "features/home/user/meetingsList";

import { useGetMeetings } from "hooks/api/useGetMeetings";

import { BsCalendarPlus } from "react-icons/bs";

import { Meeting } from "store/api/types/fetchedData";

const Meetings = () => {
    const { data: meetings, refetch } = useGetMeetings();
    const [activeTab, setActiveTab] = useState<string | null>('PLANNED');

    return meetings ? (
        <div>
            <Head><title>WAP | Meetings</title></Head>
            <Container fluid p={0} m={0}>
                <h1 style={{textAlign: "center"}}>Meetings</h1>
                <Group position="center" mt={40} style={{width: "100%", minWidth: 400}}>
                    <Button w={"30%"} miw={250} leftIcon={<BsCalendarPlus size={20} />} variant="outline" onClick={() => console.log("TODO")}>
                        Create a meeting
                    </Button>
                </Group>
                <Tabs radius={"sm"} defaultValue="Approved" mt={40} value={activeTab} onTabChange={setActiveTab}>
                    <Tabs.List grow position="center">
                        <Tabs.Tab value="PLANNED" rightSection={<Badge radius={"sm"} variant={"light"}>{meetings.filter((meeting: Meeting) => meeting.sheduling === "PLANNED").length}</Badge>}>Planned</Tabs.Tab>
                        <Tabs.Tab value="PASSED" rightSection={<Badge radius={"sm"} variant={"light"}>{meetings.filter((meeting: Meeting) => meeting.sheduling === "PASSED").length}</Badge>}>Passed</Tabs.Tab>
                    </Tabs.List>
                    <MeetingsList meetings={meetings} refetch={refetch} variant={"PLANNED"} />
                    <MeetingsList meetings={meetings} refetch={refetch} variant={"PASSED"} />
                </Tabs>
            </Container>
        </div>
    ) : <CustomLoader />;
}

export default Meetings;