import Head from 'next/head'

import { isEmail, useForm } from '@mantine/form';
import { useCreateDefaultUserMutation, useEditUserMutation } from 'store/api/usersAPI';
import { Button, Center, Container, Group, Paper, PasswordInput, Switch, TextInput, Title } from '@mantine/core';

import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { adminCreatedNotification, userCreatedNotification, userModifiedNotification } from 'components/notifications/success';
import { IoSaveOutline } from 'react-icons/io5';

const AdminSetup = () => {
    const router = useRouter();
    const [createUser, result] = useCreateDefaultUserMutation<any>();

    const form = useForm({
        initialValues: {firstname: '', lastname: '', email: '', password: ''},
        validate: {
            firstname: (value) => (value.length < 2 ? 'First name must have at least 2 characters' : null),
            lastname: (value) => (value.length < 2 ? 'Last name must have at least 2 characters' : null),
            email: isEmail(),
            password: (value) => (value.length < 6 ? 'password must have at least 6 characters' : null)
        },
    });

    useEffect(() => {
        if (result.isSuccess) {
            adminCreatedNotification();
            router.replace("/login");
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [result])

    return (
        <>
            <Head><title>WAP | Admin Setup</title></Head>
            <Center style={{height: "100%", width: "100%", minHeight: 620}}>
                <Container style={{width: "50%", minWidth: 400, maxWidth: 550}}>
                    <Title align="center" sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}`, fontWeight: 700 })}>
                        Thanks for installing WAP
                    </Title>
                    <Title mt={10} align="center" size={20} sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}`, fontWeight: 400})}>
                        Please configure your WAP admin account
                    </Title>
                    <Paper withBorder shadow="md" p={30} radius="md" mt={40}>
                        <Title size={16} sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}`, fontWeight: 700})}>
                            Admin credentials
                        </Title>
                        <form onSubmit={form.onSubmit((values) => (createUser(values)))}>
                            <Group position="apart" grow>
                                <TextInput required label="First name" mt={20} {...form.getInputProps('firstname', { type: 'input' })} />
                                <TextInput required label="Last name" mt={20} {...form.getInputProps('lastname', { type: 'input' })} />
                            </Group>
                            <TextInput required label="Email" mt={20} {...form.getInputProps('email', { type: 'input' })} />
                            <PasswordInput label="Password" mt={20} {...form.getInputProps('password', { type: 'input' })} />
                            <Group position="center" mt={30} grow>
                                <Button color={"violet"} leftIcon={<IoSaveOutline size={20} />} miw={240} variant="outline" type="submit">
                                    Save
                                </Button>
                            </Group>
                        </form>
                    </Paper>
                </Container>
            </Center>
        </>
    );
}

export default AdminSetup;