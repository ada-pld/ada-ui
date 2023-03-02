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

export interface EditUser {
    id: string;
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    role: string;
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
        workingDays: number | null,
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