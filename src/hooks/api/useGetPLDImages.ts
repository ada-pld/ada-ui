import { useEffect } from "react";

import { useRouter } from "next/router";

import { checkError } from "./utils/checkError";

import { useGetPLDImagesQuery } from "store/api/pldAPI";
import { useAppSelector } from "store/hooks/hooks";

export const useGetPLDImages = () => {
    const isLoggedIn = useAppSelector((state) => state.user.isLoggedIn);
    const { data, error, refetch } = useGetPLDImagesQuery(undefined, { skip: !isLoggedIn });

    const router = useRouter();

    useEffect(() => {
        if (error)
            checkError(error, router);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data, error])

    return { data, error, refetch };
};
