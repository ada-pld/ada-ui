import { useEffect } from "react";

import { useRouter } from "next/router";

import { useGetCardsQuery } from "store/api/cardAPI";

import { checkError } from "./utils/checkError";
import { useAppSelector } from "store/hooks/hooks";

export const useGetCards = () => {
    const userId = useAppSelector((state) => state.user.auth.userId);
    const { data, error, refetch } = useGetCardsQuery(userId!);

    const router = useRouter();

    useEffect(() => {
        if (error)
            checkError(error, router);
    }, [data, error])

    return { data, error, refetch };
};
