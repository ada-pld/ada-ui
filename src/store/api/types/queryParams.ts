export interface Login {
    email: string,
    password: string,
}

export interface CreateUser {
    firstname: string;
    lastname: string;
    email: string;
    role: string;
}

export interface CreateDefaultUser {
    firstname: string;
    lastname: string;
    email: string;
    password: string;
}

export interface EditUser {
    id: string;
    firstname?: string;
    lastname?: string;
    email?: string;
    password?: string | null;
    role?: string;
}

export interface UpdateStatus {
    id: number;
    status: "finished" | "inprogress" | "notstarted";
}

export interface CreateCard {
    values: {
        name: string,
        asWho: string,
        task: string,
        description: string,
        workingDays: number | string,
        dods: string,
        partId: number,
        assignees: string[];
    }
}

export interface EditCard {
    id: number;
    values: {
        name: string,
        asWho: string,
        task: string,
        description: string,
        workingDays: number,
        dods: string,
        partId: number,
        assignees: string[];
    }
}

export interface RejectCard {
    id: number;
    reason: string;
}

export interface CreateMeeting {
    meeting: {
        title: string,
        date: string,
        agenda: string,
        duration: number,
        location: string,
        newGroup?: {
            name: string,
            color: string,
            duration: number,
            location: string,
        },
        groupId?: string,
    }
}

export interface EditMeeting {
    meeting: {
        id: number,
        title: string,
        date: string,
        agenda: string,
        duration: number,
        location: string,
    }
}

export interface ValidateMeeting {
    meetingId: number,
    report: string,
    attendances: { 
        id: number,
        presence: "present" | "absent" | "na";
    }[]
}

export interface GetUserCards {
    userId?: string;
    sprintId: number;
}

export interface SetImages {
    file: File;
    fileName: string;
}

export interface PLDChanges {
    cardAdded: string,
    cardModified: string,
    advancementReports: {
        userId: string,
        firstname: string,
        lastname: string,
        report: string
    }[]
}