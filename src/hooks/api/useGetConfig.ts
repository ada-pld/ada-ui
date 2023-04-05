import { useEffect } from "react";

import { useRouter } from "next/router";

import { useGetConfigQuery } from "store/api/configAPI";

import { checkError } from "./utils/checkError";

export const useGetConfig = () => {
    const { data, error, refetch } = useGetConfigQuery();

    const router = useRouter();

    useEffect(() => {
        if (error)
            checkError(error, router);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data, error])

    return { data, error, refetch };
};
