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