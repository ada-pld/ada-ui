import { useEffect } from "react";

import { useRouter } from "next/router";

import { checkError } from "./utils/checkError";

import { useGetPLDChangesQuery } from "store/api/pldAPI";

export const useGetPLDChanges = () => {
    const { data, error, refetch } = useGetPLDChangesQuery();

    const router = useRouter();

    useEffect(() => {
        if (error)
            checkError(error, router);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data, error])

    return { data, error, refetch };
};
