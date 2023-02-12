import { useRouter } from "next/router";
import { useEffect } from "react";

import { useListPartsQuery } from "store/api/partsAPI";

import { checkError } from "./utils/checkError";

export const useListParts = () => {
    const { data, error, refetch } = useListPartsQuery();
    const router = useRouter();

    useEffect(() => {
        if (error)
            checkError(error, router);
    }, [data, error])

    return { data, error, refetch };
};
