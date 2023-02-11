import { useRouter } from "next/router";
import { useEffect } from "react";

import { useListPartsQuery } from "store/api/partsAPI";

import { PartsList } from "store/api/types/fetchedData";
import { checkError } from "./utils/checkError";

export interface QueryResult {
    data: PartsList[];
    error?: {
        status: number;
        data: any;
    };
    success: any;
}

export const useListParts = () => {
    const { data, error } = useListPartsQuery<QueryResult>();
    const router = useRouter();

    useEffect(() => {
        if (error)
            checkError(error, router);
    }, [data, error])

    return { data, error };
};
