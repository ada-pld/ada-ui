export interface CardsStats {
    JHDones: number;
    JHInProgress: number;
    JHIntended: number;
    JHMissing: number;
    JHNotAccepted: number;
    JHNotStarted: number;
    cards: Card[]
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
}

export interface Part {
    id: number;
    name: string;
    createdAt: string;
    updatedAt: string;
}