import React from "react";

import { Badge, Container, Divider, Group, Spoiler, Text, Title, useMantineTheme } from "@mantine/core";
import { Meeting } from "store/api/types/fetchedData";

import { SlLocationPin } from "react-icons/sl";
import { SiMicrosoftteams } from "react-icons/si";
import { RxDiscordLogo } from "react-icons/rx";
import { HiOutlineClock } from "react-icons/hi";

import moment from "moment";
import MeetingMenu from "./meetingMenu/MeetingMenu";

interface Props {
    meeting: Meeting;
    refetch: any;
}

const Meeting: React.FC<Props> = ({ meeting, refetch }) => {
    const theme = useMantineTheme();

    // Get endtime of the meeting with the duration
    const startTime = moment(meeting.date).utc().format("H:mm");
    const endTime = moment(meeting.date).utc().add(meeting.duration, 'minutes').format("H:mm");

    // Check if meeting is currently happening
    const now = moment();
    const meetingStart = moment.utc(meeting.date);
    const meetingEnd = meetingStart.clone().add(meeting.duration, 'minutes');
    const isMeetingActive = now.isBetween(meetingStart, meetingEnd);

    return (
        <Container p={20} m={20} style={{borderRadius: 10, borderColor: meeting.rendezVousGroup.groupColor, borderWidth: 2, borderStyle: "solid"}}>
            <Group position="apart">
                <Title weight={"600"} size={20} style={{display: "flex", alignItems: "center", gap: 10}}>
                    {isMeetingActive
                        ?   <Badge size="lg" radius="sm" variant={"dot"} color={"green"}>
                                Live
                            </Badge>
                        :   <Badge size="lg" radius="sm" variant={"light"} sx={{ backgroundColor: meeting.rendezVousGroup.groupColor, color: theme.colorScheme === "dark" ? theme.colors.gray[3] : "black" }}>
                                {meeting.rendezVousGroup.groupName}
                            </Badge>
                    }
                    {meeting.title}
                </Title>
                <MeetingMenu meeting={meeting} refetch={refetch} />
            </Group>
            <Group position="apart" mt={20}>
                <Group spacing={"xs"}>
                    <HiOutlineClock size={20} />
                    <Text>{startTime} {" - "} {endTime}</Text>
                    <Text>{moment.utc().startOf('day').add({ minutes: meeting.duration }).format('(H [h] mm)')}</Text>
                </Group>
                <Group spacing={"xs"}>
                    <Text>{meeting.location}</Text>
                    {meeting.location.toLowerCase() === "discord" ? <RxDiscordLogo size={20} /> : meeting.location.toLowerCase() === "teams" ? <SiMicrosoftteams size={20} /> : <SlLocationPin size={18} /> }
                </Group>
            </Group>
            <Group position="center">
                <Divider mt={20} style={{width: "90%"}} />
            </Group>
            <Spoiler maxHeight={100} showLabel="Show more" hideLabel="Hide">
                <Text mt={20}>
                    {meeting.agenda.split('\n').map((str, index) => 
                        <React.Fragment key={index}>
                            {str}
                            <br />
                        </React.Fragment>
                    )}
                </Text>
            </Spoiler>
        </Container>
    );
}

export default Meeting;