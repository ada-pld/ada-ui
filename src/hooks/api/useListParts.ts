import { useEffect } from "react";

import { useRouter } from "next/router";

import { useListPartsQuery } from "store/api/partsAPI";

import { checkError } from "./utils/checkError";

import { useAppSelector } from "store/hooks/hooks";

export const useListParts = (permission: boolean) => {
    const role = useAppSelector((state) => state.user.auth.accessToken?.charAt(0));

    const { data, error, refetch } = useListPartsQuery();
    const router = useRouter();

    useEffect(() => {
        if (error)
            checkError(error, router);
    }, [data, error])

    useEffect(() => {
        if ((role === "0" || role === "1") && permission) {
            router.replace("/403")
        }
    }, [role])

    return { data, error, refetch };
};
