import { useEffect } from "react";

import { useRouter } from "next/router";

import { useGetConfigQuery } from "store/api/configAPI";

import { checkError } from "./utils/checkError";
import { useAppSelector } from "store/hooks/hooks";

export const useGetConfig = () => {
    const isLoggedIn = useAppSelector(state => state.user.isLoggedIn);
    const { data, error, refetch } = useGetConfigQuery(undefined, { skip: !isLoggedIn });

    const router = useRouter();

    useEffect(() => {
        if (error)
            checkError(error, router);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data, error])

    return { data, error, refetch };
};
