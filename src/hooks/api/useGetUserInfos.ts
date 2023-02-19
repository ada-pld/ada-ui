import { useEffect } from "react";

import { useRouter } from "next/router";

import { useUserInfosQuery } from "store/api/authAPI";

import { useAppSelector } from "store/hooks/hooks";

export const useGetUserInfos = () => {
    const router = useRouter();
    const user = useAppSelector((state) => state.user.auth);

    const { data, error, refetch } = useUserInfosQuery<any>(user.userId!);

    useEffect(() => {
        if (error) {
            if (error.status === 401) {
                router.replace("/login")
            } else if (error.status === 403) {
                router.replace("/403")
            }
        }
    }, [data, error])

    return { data, error, refetch };
};
