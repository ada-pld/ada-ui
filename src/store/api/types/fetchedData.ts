import { Card, MeetingAttendance, MeetingGroup } from "types/apiTypes";

export interface User {
    userId: string;
    accessToken: string;
    refreshToken: string; 
}

export interface UsersList {
    id: string;
    firstname: string;
    lastname: string;
    email: string;
    role: string;
}

export interface PartsList {
    id: string;
    name: string;
    cards: Card[];
}

export interface UserInfos {
    id: string;
    firstname: string;
    lastname: string;
    email: string;
    role: string;
}

export interface Meeting {
    id: number;
    title: string;
    agenda: string;
    date: string;
    duration: number;
    location: string;
    rendezVousGroup: MeetingGroup;
    report: string | null;
    sheduling: "PLANNED" | "PASSED";
    updatedAt: string;
    userAttendances: MeetingAttendance[];   
}

export interface Sprint {
    active: boolean;
    id: number;
    name: string;
    workDaysNeeded: number;
}

export interface PLD {
    id: number;
    versionInSprint: number;
    path: string;
    downloadPath: string;
    changesToPld: string;
    sprintId: number;
    sprint: Sprint;
}

export interface GetGenerator {
    generatorExist: boolean;
    actualCode: string;
}