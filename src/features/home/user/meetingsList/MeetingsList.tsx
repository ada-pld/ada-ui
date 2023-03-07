import React from "react";

import { Container, Divider, Group, Stack, Tabs, Text, Title } from "@mantine/core";
import { Meeting } from "store/api/types/fetchedData";

import moment from "moment";

interface Props {
    meetings: Meeting[];
    refetch: any;
    variant: "PASSED" | "PLANNED";
}

const UpcomingMeetings: React.FC<Props> = ({ meetings, refetch, variant }) => {
    const meetingList = meetings.filter((meeting) => { 
        return meeting.sheduling === variant; 
    });

    return (
        <Tabs.Panel value={variant}>
            <Container p={20} mt={20}>
                {meetingList.map((meeting, index) => (
                    <React.Fragment key={meeting.id}>
                        {index !== 0 && <Divider />}
                        <Group p={10} position={"apart"}>
                            <Stack spacing={10} align={"flex-end"}>
                                <Text color={"dimgray"}>{moment(meeting.date).utc().format('ddd')}</Text>
                                <Title color={"dimgray"}>{moment(meeting.date).utc().format('DD')}</Title>
                            </Stack>
                            <Text color={"dimgray"}>{moment(meeting.date).utc().format('HH')} h {moment(meeting.date).utc().format('mm')}</Text>
                            <Text color={"dimgray"}>{meeting.agenda}</Text>
                        </Group>
                        <Divider mt={10} />
                    </React.Fragment>
                ))}
            </Container>
        </Tabs.Panel>
    );
}

export default UpcomingMeetings;