import { useEffect } from 'react';

import { Paper, Title, Text, TextInput, Button, Container, Group, Anchor, Center, Box } from '@mantine/core';
import { useForm, isEmail } from '@mantine/form';

import Link from 'next/link';
import { useRouter } from 'next/router';

import style from "./style/forgotPassword.module.css";

import { useForgotPasswordMutation } from 'store/api/usersAPI';

import { emailErrorNotification } from 'components/notifications/errors';
import { forgotPasswordNotification } from 'components/notifications/success';

import { FiChevronLeft } from "react-icons/fi";

const ForgotPassword = () => {
    const [forgotPassword, forgotResult] = useForgotPasswordMutation<any>();
    const router = useRouter();
    const form = useForm({
        initialValues: {email: ''},
        validate: {email: isEmail('Invalid email')},
    });

    useEffect(() => {
        if (forgotResult.isError) {
            if (forgotResult.error.status === 409)
                emailErrorNotification();
        } else if (forgotResult.isSuccess) {
            forgotPasswordNotification();
            router.push('/login');
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [forgotResult])

    return (
        <div style={{height: "100%", width: "100%", marginTop: "10%"}}>
            <Container size={460} my={30}>
                <Title className={style.title} align="center">
                    Forgot your password?
                </Title>
                <Text color="dimmed" size="sm" align="center" mt={10}>
                    Enter your email to get a new password
                </Text>

                <Paper withBorder shadow="md" p={30} radius="md" mt="xl">
                    <form onSubmit={form.onSubmit((values) => (forgotPassword(values.email)))}>
                        <TextInput label="Your email" placeholder="domestia@domestia.fr" required {...form.getInputProps('email', { type: 'input' })} />
                        <Group position="apart" mt="lg">
                            <Anchor color="dimmed" size="sm" component={Link} href="/login">
                                <Center inline>
                                    <FiChevronLeft size={14}  />
                                    <Box ml={5}>Back to login page</Box>
                                </Center>
                            </Anchor>
                            <Button color="red" type='submit'>Reset password</Button>
                        </Group>
                    </form>
                </Paper>
            </Container>
        </div>
    );
}

export default ForgotPassword;