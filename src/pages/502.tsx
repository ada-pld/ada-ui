import { Title, Text, Button, Container, Group, Center } from '@mantine/core';

import { notFoundStyle } from 'styles/error/NotFoundStyle';

import Head from 'next/head';

import Link from 'next/link';

const BadGateway = () => {
    const { classes } = notFoundStyle();

    return (
        <>
            <Head><title>WAP | Bad Gateway</title></Head>
            <Center style={{height: "100%", width: "100%"}}>
                <Container className={classes.root}>
                    <div className={classes.label}>502</div>
                    <Title className={classes.title}>Bad Gateway</Title>
                    <Text color="dimmed" size="lg" align="center" className={classes.description}>
                        The server looks in bas posture <br />
                        Try to contact your WAP administrator
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

export default BadGateway;