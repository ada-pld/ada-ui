import CustomLoader from "components/loader/CustomLoader";
import LoginForm from "features/authentication/login/LoginForm";

import Head from 'next/head'

import { useRouter } from "next/router";
import { useEffect } from "react";

import { useCheckErrorQuery } from "store/api/adaAPI";
import { useCheckTokenQuery } from "store/api/authAPI";

import { useAppSelector } from "store/hooks/hooks";

export function Login() {
    const router = useRouter();
    const token = useAppSelector(state => state.user.auth.accessToken);
    const { data: checkToken, error: checkTokenError, isSuccess: checkTokenSuccess } = useCheckTokenQuery(token!);
    const { data, error, isSuccess } = useCheckErrorQuery<any>();

    useEffect(() => {
        if (error) {
            if (error.status === 424 && error.data.message === "noAdminAccount") {
                router.replace("/home/admin/config/");
            }
        } 
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [error, data])

    useEffect(() => {
        if (checkTokenSuccess === true)
            router.replace("/home");
    }, [checkToken])

    return router.query && isSuccess ? (
        <>
            <Head><title>ADA | Login</title></Head>
            <LoginForm />
        </>
    ) : <CustomLoader />;
}

export default Login;