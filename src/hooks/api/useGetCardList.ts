import { useEffect } from "react";

import { useRouter } from "next/router";

import { useGetCardListQuery } from "store/api/cardAPI";

import { checkError } from "./utils/checkError";

import { useGetSprint } from "./useGetSprint";
import { useAppSelector } from "store/hooks/hooks";

export const useGetCardList = () => {
    const isLoggedIn = useAppSelector(state => state.user.isLoggedIn);

    const { data: sprint } = useGetSprint();
    const { data, error, refetch } = useGetCardListQuery(sprint?.id ?? 0, { skip: !sprint?.id || !isLoggedIn });

    const router = useRouter();
    
    useEffect(() => {
        if (error)
            checkError(error, router);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data, error])

    return { data, error, refetch };
};
