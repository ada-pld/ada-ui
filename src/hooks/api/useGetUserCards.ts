import { useEffect } from "react";

import { useRouter } from "next/router";

import { useGetCardsQuery } from "store/api/cardAPI";

import { checkError } from "./utils/checkError";

import { useAppSelector } from "store/hooks/hooks";

import { useGetSprint } from "./useGetSprint";

export const useGetUserCards = (variant: "all" | "user") => {
    const router = useRouter();
    const userId = useAppSelector((state) => state.user.auth.userId);

    const { data: sprint } = useGetSprint();
    
    const query = variant === "user" ? {userId: userId!, sprintId: sprint?.id ?? 0} : {sprintId: sprint?.id ?? 0}
    
    const { data, error, refetch } = useGetCardsQuery(query, { skip: !sprint?.id });

    useEffect(() => {
        if (error)
            checkError(error, router);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data, error])

    return { data, error, refetch };
};
