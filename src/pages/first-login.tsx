import Head from 'next/head'
import { useEffect, useState } from 'react';

import { useForm } from '@mantine/form';
import { useEditUserMutation } from 'store/api/usersAPI';
import { Button, Center, Container, Group, Paper, PasswordInput, Title } from '@mantine/core';
import { useAppSelector } from 'store/hooks/hooks';
import CustomLoader from 'components/loader/CustomLoader';
import { useRouter } from 'next/router';
import { userModifiedNotification } from 'components/notifications/success';
import { useCheckErrorQuery } from 'store/api/adaAPI';

const FirstLogin = () => {
    const router = useRouter();

    const userId = useAppSelector(state => state.user.auth.userId);

    const { data, error, isFetching } = useCheckErrorQuery<any>();
    const [editUser, result] = useEditUserMutation<any>();

    const form = useForm({ initialValues: {password: ''}, validate: {password: (value) => (value.length < 6 ? 'Part name must have at least 6 characters' : null)} });

    useEffect(() => {
        if (!isFetching && error === undefined)
            router.replace('/home')
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isFetching]);

    useEffect(() => {
        if (result.isSuccess) {
            userModifiedNotification();
            router.replace('/home');
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [result.isSuccess]);

    return userId && !isFetching ? (
        <>
            <Head><title>ADA | First password</title></Head>
            <Center style={{height: "100%", width: "100%", minHeight: 620}}>
                <Container style={{width: "50%", minWidth: 400, maxWidth: 550}}>
                    <Title align="center" sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}`, fontWeight: 700 })}>
                        First time on ADA ?
                    </Title>
                    <Title mt={10} align="center" size={20} sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}`, fontWeight: 400})}>
                        Chose your new password
                    </Title>
                    <Paper withBorder shadow="md" p={30} radius="md" mt="xl">
                        <form onSubmit={form.onSubmit((values) => (editUser({ id: userId, password: values.password })))}>
                            <PasswordInput label="New password" required {...form.getInputProps('password', { type: 'input' })} />
                            <Group position="apart" mt="lg" align='center'>
                                <Button color="red" type='submit'>Update password</Button>
                            </Group>
                        </form>
                    </Paper>
                </Container>
            </Center>
        </>
    ) : <CustomLoader />;
}

export default FirstLogin;