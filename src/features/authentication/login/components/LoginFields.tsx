import { useEffect } from "react";

import Link from "next/link";

import { TextInput, PasswordInput, Checkbox, Anchor, Group, Button } from "@mantine/core";

import { useUserLoginMutation } from 'store/api/authAPI';
import { useLoginForm } from "../utils/loginFormData";

import { useAppDispatch } from "store/hooks/hooks";

import { useRouter } from 'next/router'

import { login } from "store/reducers/user/userSlice";

const LoginFields: React.FC = () => {
    const [loginQuery, result] = useUserLoginMutation();
    const dispatch = useAppDispatch();
    const router = useRouter();

    const form = useLoginForm();

    useEffect(() => {
        if (result.isError) {
            form.setErrors({email: true, password: "Invalid credentials"})
        } else if (result.data) {
            dispatch(
                login({
                    isLoggedIn: true,
                    auth: {
                        accessToken: result.data.accessToken,
                        userId: result.data.userId,
                        refreshToken: result.data.refreshToken,
                    }
                })
            )
            router.push("/dashboard")
        }
    }, [result])

    return (
        <form onSubmit={form.onSubmit((values) => loginQuery({email: values.email, password: values.password}))}>
            <TextInput required label="Email" placeholder="Your email" mt={10} {...form.getInputProps('email')} />
            <PasswordInput required label="Password" placeholder="Your password" mt="md" {...form.getInputProps('password')} />
            <Group position="apart" mt="lg">
                <Checkbox
                    label="Remember me"
                    sx={{ lineHeight: 1 }}
                    {...form.getInputProps('remember', { type: 'checkbox' })}
                />
                <Anchor component={Link} href="/forgot-password" size="sm">
                    Forgot password ?
                </Anchor>
            </Group>
            <Button
                fullWidth
                mt="xl"
                type="submit"
            >
                Sign in
            </Button>
        </form>
    );
}

export default LoginFields;