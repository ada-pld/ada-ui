import { useEffect } from "react";

import { useRouter } from "next/router";

import { useGetSprintQuery } from "store/api/cardAPI";

import { checkError } from "./utils/checkError";

export const useGetSprint = () => {
    const { data, error, refetch } = useGetSprintQuery();
    const router = useRouter();

    useEffect(() => {
        if (error)
            checkError(error, router);
    }, [data, error])

    return { data, error, refetch };
};
