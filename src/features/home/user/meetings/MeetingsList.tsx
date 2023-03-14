import React from "react";
import { Container, Tabs, Text, Title } from "@mantine/core";
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

    const meetingsDates = meetingList.reduce((acc: Record<string, Meeting[]>, meeting) => {
        const date = moment(meeting.date).utc().format("YYYY-MM-DD");
        if (!acc[date]) {
        acc[date] = [];
        }
        acc[date].push(meeting);
        return acc;
    }, {});

    const sortedDates = Object.keys(meetingsDates).sort();

    return (
        <Tabs.Panel value={variant}>
            <Container p={20} mt={20}>
                {sortedDates.map((date) => (
                <React.Fragment key={date}>
                    <Title mt={0} color={"violet"}>
                        {moment(date).format("LL")}
                    </Title>
                    {meetingsDates[date].map((meeting, index) => (
                        <React.Fragment key={meeting.id}>
                            <Container p={20} m={20} style={{borderRadius: 10, backgroundColor: "#f1f1f1"}}>
                                    <Text color={"dimgray"}>
                                        {moment(meeting.date).utc().format("HH:mm")} {" - "}
                                        {moment(meeting.date).utc().add(60, 'minutes').format("HH:mm")}
                                    </Text>
                                <Title mt={10} size={22} color={"dimgray"} weight={"bold"}>title</Title>
                                <Text color={"dimgray"}>
                                    {meeting.location}
                                </Text>
                                <Text color={"dimgray"} italic mt={30}>
                                    {meeting.agenda}
                                </Text>
                            </Container>
                        </React.Fragment>
                    ))}
                </React.Fragment>
                ))}
            </Container>
        </Tabs.Panel>
    );
};

export default UpcomingMeetings;