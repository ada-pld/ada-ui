export interface Cards {
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
    sprint: Sprint;
}

export interface Sprint {
    id: number;
    name: string;
    active: boolean;
    createdAt: string;
    updatedAt: string;
    workDaysNeeded: number;
}