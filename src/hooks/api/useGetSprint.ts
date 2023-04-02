import { useEffect } from "react";

import { useRouter } from "next/router";

import { useGetSprintQuery } from "store/api/cardAPI";

import { checkError } from "./utils/checkError";

import { useAppSelector } from "store/hooks/hooks";

export const useGetSprint = () => {
    const isLoggedIn = useAppSelector((state) => state.user.isLoggedIn);
    const { data, error, refetch } = useGetSprintQuery(undefined, { skip: !isLoggedIn });
    const router = useRouter();

    useEffect(() => {
        if (error)
            checkError(error, router);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data, error])

    return { data, error, refetch };
};
