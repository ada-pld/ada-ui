import { Paper, Title, Container, Center, Text } from '@mantine/core';

import LoginFields from './components/LoginFields';
import ColorScheme from 'components/colorScheme/ColorScheme';

const LoginForm = () => {
    return (
        <Center style={{height: "100%", width: "100%", minHeight: 520}}>
            <Container size={520}>
                <Title align="center" sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}`, fontWeight: 700 })}>
                    Welcome back on WAP
                </Title>
                <ColorScheme style={{marginTop: 30}} />
                <Paper withBorder shadow="md" p={30} mt={30} radius="md">
                    <Text align='center' size={"lg"} style={{fontWeight: "bold"}}>Login</Text>
                    <LoginFields />
                </Paper>
            </Container>
        </Center>
    );
}

export default LoginForm;