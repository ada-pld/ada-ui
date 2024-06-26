import { useEffect } from "react";

import { useRouter } from "next/router";

import { useGetSprintQuery } from "store/api/sprintAPI";

import { checkError } from "./utils/checkError";

export const useGetSprint = () => {
    const { data, error, refetch } = useGetSprintQuery();
    const router = useRouter();

    useEffect(() => {
        if (error)
            checkError(error, router);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data, error])

    return { data, error, refetch };
};
