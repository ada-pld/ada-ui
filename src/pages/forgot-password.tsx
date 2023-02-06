import ForgotPassword from "features/authentication/forgotPassword";

import Head from 'next/head'

export function Login() {
    return (
        <div>
            <Head><title>WAP | Forgot password</title></Head>
            <ForgotPassword />
        </div>
    );
}

export default Login;