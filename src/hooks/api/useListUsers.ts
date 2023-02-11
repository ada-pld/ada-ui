import { useRouter } from "next/router";
import { useEffect } from "react";

import { useListUsersQuery } from "store/api/usersAPI";

import { UsersList } from "store/api/types/fetchedData";
import { checkError } from "./utils/checkError";

export interface QueryResult {
    data: UsersList[];
    error?: {
        status: number;
        data: any;
    };
    success: any;
}

export const useListUsers = () => {
    const { data, error } = useListUsersQuery<QueryResult>();
    const router = useRouter();

    useEffect(() => {
        if (error)
            checkError(error, router);
    }, [data, error])

    return { data, error };
};
