import { useRouter } from "next/router";
import { useEffect } from "react";

import { useListUsersQuery } from "store/api/usersAPI";

import { QueryResult } from "types/query";
import { checkError } from "./utils/checkError";

export const useListUsers = () => {
    const { data, error } = useListUsersQuery<QueryResult>();
    const router = useRouter();

    useEffect(() => {
        if (data === undefined && error)
            checkError(error, router);
    }, [data, error])

    return { data, error };
};
