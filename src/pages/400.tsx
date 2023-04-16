import { Title, Text, Button, Container, Group, Center } from '@mantine/core';

import { notFoundStyle } from 'styles/error/NotFoundStyle';

import Head from 'next/head';

import Link from 'next/link';

const BadRequest = () => {
    const { classes } = notFoundStyle();

    return (
        <>
            <Head><title>ADA | Not found</title></Head>
            <Center style={{height: "100%", width: "100%"}}>
                <Container className={classes.root}>
                    <div className={classes.label}>400</div>
                    <Title className={classes.title}>Are you lost ?</Title>
                    <Text color="dimmed" size="lg" align="center" className={classes.description}>
                        Well chosen undead, you seem lost. What did you try to find ? <br />
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

export default BadRequest;