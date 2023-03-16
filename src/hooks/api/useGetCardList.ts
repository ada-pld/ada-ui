import { useEffect } from "react";

import { useRouter } from "next/router";

import { useGetCardListQuery } from "store/api/cardAPI";

import { checkError } from "./utils/checkError";

import { useGetSprint } from "./useGetSprint";

export const useGetCardList = () => {
    const { data: sprint } = useGetSprint();
    const { data, error, refetch } = useGetCardListQuery(sprint?.id ?? 0, { skip: !sprint?.id });

    const router = useRouter();

    useEffect(() => {
        if (error)
            checkError(error, router);
    }, [data, error])

    return { data, error, refetch };
};
