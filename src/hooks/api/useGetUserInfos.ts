import { useEffect } from "react";

import { useRouter } from "next/router";

import { useUserInfosQuery } from "store/api/usersAPI";

import { useAppSelector } from "store/hooks/hooks";

import { skipToken } from "@reduxjs/toolkit/dist/query";

import { checkError } from "./utils/checkError";

export const useGetUserInfos = () => {
    const router = useRouter();
    const user = useAppSelector((state) => state.user.auth);

    const { data, error, refetch } = useUserInfosQuery<any>(user.userId ?? skipToken);

    useEffect(() => {
        if (error)
            checkError(error, router);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data, error])

    return { data, error, refetch };
};
