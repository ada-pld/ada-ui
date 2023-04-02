import { useEffect } from "react";

import { useRouter } from "next/router";

import { checkError } from "./utils/checkError";

import { useGetMeetingsQuery } from "store/api/meetingsAPI";
import { useAppSelector } from "store/hooks/hooks";

export const useGetMeetings = () => {
    const isLoggedIn = useAppSelector(state => state.user.isLoggedIn);
    const { data, error, refetch } = useGetMeetingsQuery(undefined, { skip: !isLoggedIn });

    const router = useRouter();

    useEffect(() => {
        if (error)
            checkError(error, router);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data, error])

    return { data, error, refetch };
};
