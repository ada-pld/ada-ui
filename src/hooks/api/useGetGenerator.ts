import { useEffect } from "react";

import { useRouter } from "next/router";

import { checkError } from "./utils/checkError";

import { useGetGeneratorQuery } from "store/api/pldAPI";

export const useGetGenerator = () => {
    const { data, error, refetch } = useGetGeneratorQuery();

    const router = useRouter();

    useEffect(() => {
        if (error)
            checkError(error, router);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data, error])

    return { data, error, refetch };
};
