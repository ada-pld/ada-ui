import {
    TextInput,
    PasswordInput,
    Checkbox,
    Anchor,
    Paper,
    Title,
    Container,
    Group,
    Button,
    Center,
    Text
} from '@mantine/core';

import Link from 'next/link';

import ColorScheme from 'features/global/colorScheme/ColorScheme';

const LoginForm = () => {
    return (
        <Center style={{height: "100%", width: "100%", minHeight: 520}}>
            <Container size={520}>
                <Title
                    align="center"
                    sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}`, fontWeight: 700 })}
                    >
                    Welcome back on WAP !
                </Title>
                <ColorScheme style={{marginTop: 30}} />

                <Paper withBorder shadow="md" p={30} mt={30} radius="md">
                    <Text align='center' size={"lg"} style={{fontWeight: "bold"}}>Login</Text>
                    <TextInput label="Email" placeholder="Your email" required mt={10} />
                    <PasswordInput label="Password" placeholder="Your password" required mt="md" />
                    <Group position="apart" mt="lg">
                    <Checkbox label="Remember me" sx={{ lineHeight: 1 }} />
                    <Anchor component={Link} href="/forgot-password" size="sm">
                        Forgot password ?
                    </Anchor>
                    </Group>
                    <Button fullWidth mt="xl">
                        Sign in
                    </Button>
                </Paper>
            </Container>
        </Center>
    );
}

export default LoginForm;