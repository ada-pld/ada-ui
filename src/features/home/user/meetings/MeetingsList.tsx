import React from "react";
import { Center, Container, Tabs, Title } from "@mantine/core";
import { Meeting as MeetingType } from "store/api/types/fetchedData";
import moment from "moment";

import Meeting from "./components/Meeting";

interface Props {
  meetings: MeetingType[];
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
                {sortedDates.length > 0
                    ?   <>
                            {sortedDates.map((date, index) => (
                                <React.Fragment key={date}>
                                    <Title size={26} weight={"normal"} mt={index !== 0 ? 50 : 0}>
                                        {moment(date).format("LL")}
                                    </Title>
                                    {meetingsDates[date].map((meeting) => (
                                        <React.Fragment key={meeting.id}>
                                            <Meeting meeting={meeting} refetch={refetch} />
                                        </React.Fragment>
                                    ))}
                                </React.Fragment>
                            ))}
                        </>
                    :   <Center mt={40}><Title weight={600}>No {variant.toLowerCase()} meeting</Title></Center>
                }
            </Container>
        </Tabs.Panel>
    );
};

export default UpcomingMeetings;