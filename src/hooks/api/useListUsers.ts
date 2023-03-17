import { useEffect } from "react";

import { useRouter } from "next/router";

import { useListUsersQuery } from "store/api/usersAPI";

import { checkError } from "./utils/checkError";
import { useAppSelector } from "store/hooks/hooks";

export const useListUsers = (permission: boolean) => {
    const role = useAppSelector((state) => state.user.auth.accessToken?.charAt(0));

    const { data, error, refetch } = useListUsersQuery();
    const router = useRouter();

    useEffect(() => {
        if (error)
            checkError(error, router);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data, error])

    useEffect(() => {
        if ((role === "0" || role === "1") && permission) {
            router.replace("/403")
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [role])

    return { data, error, refetch };
};
