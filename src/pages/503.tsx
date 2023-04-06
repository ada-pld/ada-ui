import { Title, Text, Button, Container, Group, Center } from '@mantine/core';

import { notFoundStyle } from 'styles/error/NotFoundStyle';

import Head from 'next/head';

import Link from 'next/link';

const BadGateway = () => {
    const { classes } = notFoundStyle();

    return (
        <>
            <Head><title>ADA | Maintenance</title></Head>
            <Center style={{height: "100%", width: "100%"}}>
                <Container className={classes.root}>
                    <div className={classes.label}>503</div>
                    <Title className={classes.title}>Maintenance</Title>
                    <Text color="dimmed" size="lg" align="center" className={classes.description}>
                        ADA is currently under maintenance <br />
                        Try to contact your ada administrator for more information
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