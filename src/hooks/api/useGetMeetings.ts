import { useEffect } from "react";

import { useRouter } from "next/router";

import { checkError } from "./utils/checkError";

import { useGetMeetingsQuery } from "store/api/meetingsAPI";

export const useGetMeetings = () => {
    const { data, error, refetch } = useGetMeetingsQuery();

    const router = useRouter();

    useEffect(() => {
        if (error)
            checkError(error, router);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data, error])

    return { data, error, refetch };
};
