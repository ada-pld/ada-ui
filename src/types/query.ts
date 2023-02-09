import { UsersList } from "store/api/types/fetchedData";

export interface QueryResult {
    data: UsersList[];
    error?: {
        status: number;
        data: any;
    };
}