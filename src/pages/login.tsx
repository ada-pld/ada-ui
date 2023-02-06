import LoginForm from "features/authentication/login";

import Head from 'next/head'

export function Login() {
    return (
        <>
            <Head><title>WAP | Login</title></Head>
            <LoginForm />
        </>
    );
}

export default Login;