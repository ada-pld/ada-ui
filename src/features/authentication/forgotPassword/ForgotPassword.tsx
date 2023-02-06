import {
    createStyles,
    Paper,
    Title,
    Text,
    TextInput,
    Button,
    Container,
    Group,
    Anchor,
    Center,
    Box,
} from '@mantine/core';

import Link from 'next/link';

import style from "./style/forgotPassword.module.css";

import { FiChevronLeft } from "react-icons/fi";

const ForgotPassword = () => {
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
                    <TextInput label="Your email" placeholder="domestia@domestia.fr" required />
                    <Group position="apart" mt="lg">
                        <Anchor color="dimmed" size="sm" component={Link} href="/login">
                            <Center inline>
                                <FiChevronLeft size={14}  />
                                <Box ml={5}>Back to login page</Box>
                            </Center>
                        </Anchor>
                        <Button color="red">Reset password</Button>
                    </Group>
                </Paper>
            </Container>
        </div>
    );
}

export default ForgotPassword;