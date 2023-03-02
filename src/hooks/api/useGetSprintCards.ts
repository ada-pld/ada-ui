import { useEffect } from "react";

import { useRouter } from "next/router";

import { useGetSprintCardsQuery } from "store/api/cardAPI";

import { checkError } from "./utils/checkError";

export const useGetSprintCards = () => {
    const { data, error, refetch } = useGetSprintCardsQuery();

    const router = useRouter();

    useEffect(() => {
        if (error)
            checkError(error, router);
    }, [data, error])

    return { data, error, refetch };
};
