import { useEffect } from "react";

import { useRouter } from "next/router";

import { useUserInfosQuery } from "store/api/authAPI";

import { useAppSelector } from "store/hooks/hooks";

import { checkError } from "./utils/checkError";

export const useGetUserInfos = () => {
    const router = useRouter();
    const user = useAppSelector((state) => state.user.auth);

    const { data, error, refetch } = useUserInfosQuery<any>(user.userId!);

    useEffect(() => {
        if (error)
            checkError(error, router);
    }, [data, error])

    return { data, error, refetch };
};
