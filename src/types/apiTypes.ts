export interface UserCards {
    JHDones: number;
    JHInProgress: number;
    JHIntended: number;
    JHMissing: number;
    JHNotAccepted: number;
    JHNotStarted: number;
    JHRejected: number;
    JHWaitingApproval: number;
    cards: Card[];
    email: string;
    firstname: string;
    lastname: string;
    id: string;
    role: string;
}

export interface Card {
    id: number;
    idInSprint: number;
    partId: number;
    sprintId: number;
    status: string;
    version: number;
    workingDays: number;
    task: string;
    actPLD?: any;
    name: string;
    rejectionReason?: string;
    lastPLDEdit?: any;
    lastPLDStatus: string;
    asWho: string;
    createdAt: string;
    updatedAt: string;
    description: string;
    dods: string;
    part: Part;
    sprint: Sprint;
    assignees: Assignees[];
}

export interface Assignees {
    id: string;
    firstname: string;
    lastname: string;
}

export interface Sprint {
    id: number;
    name: string;
    active: boolean;
    createdAt: string;
    updatedAt: string;
    workDaysNeeded: number;
    cards: Card[];
}

export interface CreateSprint {
    name: string;
    workDaysNeeded: number;
}

export interface Part {
    id: number;
    name: string;
    createdAt: string;
    updatedAt: string;
}

export interface MeetingAttendance {
    attendance: "UNDEFINED" | "PRESENT" | "ABSENT";
    createdAt: string;
    user: {
        firstname: string;
        lastname: string;
        email: string;
    }
    id: number;
    rendezVousId: number;
    updatedAt: string;
    userId: string;
}

export interface MeetingGroup {
    PLDMustBeGenerated: boolean;
    groupColor: string;
    groupName: string;
    id: number;
    typicalDuration: number;
    typicalLocation: string;
}