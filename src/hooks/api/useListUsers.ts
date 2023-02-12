import { useRouter } from "next/router";
import { useEffect } from "react";

import { useListUsersQuery } from "store/api/usersAPI";

import { checkError } from "./utils/checkError";

export const useListUsers = () => {
    const { data, error, refetch } = useListUsersQuery();
    const router = useRouter();

    useEffect(() => {
        if (error)
            checkError(error, router);
    }, [data, error])

    return { data, error, refetch };
};
