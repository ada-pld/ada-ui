import { Title, Text, Button, Container, Group, Center } from '@mantine/core';

import { notFoundStyle } from 'styles/error/NotFoundStyle';

import Head from 'next/head';

import Link from 'next/link';

const Unauthorized = () => {
    const { classes } = notFoundStyle();

    return (
        <>
            <Head><title>ADA | Unauthorized</title></Head>
            <Center style={{height: "100%", width: "100%"}}>
                <Container className={classes.root}>
                    <div className={classes.label}>403</div>
                    <Title className={classes.title}>Unauthorized</Title>
                    <Text color="dimmed" size="lg" align="center" className={classes.description}>
                        You cannot access to this ressource, please verify your permissions <br />
                        Go back to the nearest bonfire! Your quest isn&apos;t finished.
                    </Text>
                    <Group position="center">
                        <Button variant="subtle" size="md" component={Link} href="/login">
                            Go back to Firelink Shrine
                        </Button>
                    </Group>
                </Container>
            </Center>
        </>
    );
}

export default Unauthorized;