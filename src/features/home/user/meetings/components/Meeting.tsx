import React from "react";

import { Badge, Container, Divider, Group, Spoiler, Text, Title, Tooltip, useMantineTheme } from "@mantine/core";
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

    for (let i = 0; i < meeting.userAttendances.length; i++)
        console.log(meeting.userAttendances[i])

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
                    {isMeetingActive && meeting.sheduling === "PLANNED"
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
            <Spoiler maxHeight={110} showLabel="Show more" hideLabel="Hide">
                <Text weight={"bold"} mt={20}>Agenda :</Text>
                <Text mt={10} pb={10}>
                    {meeting.agenda.split('\n').map((str, index) => 
                        <React.Fragment key={index}>
                            {str}
                            <br />
                        </React.Fragment>
                    )}
                </Text>
                {meeting.report &&
                    <>
                        <div style={{display: "flex", justifyContent: "center"}}>
                            <Divider mt={10} style={{width: "90%"}} />
                        </div>
                        <Text weight={"bold"} mt={20}>Meeting report :</Text>
                        <Text mt={10} pb={10}>
                            {meeting.report.split('\n').map((str, index) => 
                                <React.Fragment key={index}>
                                    {str}
                                    <br />
                                </React.Fragment>
                            )}
                        </Text>
                    </>
                }
                {meeting.sheduling === "PASSED" &&
                    <>
                        <div style={{display: "flex", justifyContent: "center"}}>
                            <Divider mt={10} style={{width: "90%"}} />
                        </div>
                        <Text weight={"bold"} mt={20}>Attendances :</Text>
                        <Group mt={20} position={"center"} align={"center"} spacing={10}>
                            {meeting.userAttendances.map((attendance) => (
                                <Tooltip key={attendance.id} label={attendance.attendance === "PRESENT" ? "Present" : "ABSENT" ? "Absent" : "Excused"} transitionProps={{duration: 300, transition: "pop", timingFunction: "ease"}} withinPortal withArrow arrowSize={6} arrowRadius={4}>
                                    <Badge style={{cursor: "pointer"}} radius={"sm"} size={"lg"} variant={"dot"} color={attendance.attendance === "PRESENT" ? "green" : attendance.attendance === "UNDEFINED" ? "orange" : "red"}>
                                        {attendance.user.firstname} {attendance.user.lastname}
                                    </Badge>
                                </Tooltip>
                            ))}
                        </Group>
                    </>
                }
            </Spoiler>
        </Container>
    );
}

export default Meeting;