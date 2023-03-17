import { useEffect } from "react";

import { useRouter } from "next/router";

import { checkError } from "./utils/checkError";

import { useListPLDQuery } from "store/api/pldAPI";

export const useGetPLDs = () => {
    const { data, error, refetch } = useListPLDQuery();
    const router = useRouter();

    useEffect(() => {
        if (error)
            checkError(error, router);
    }, [data, error])

    return { data, error, refetch };
};
