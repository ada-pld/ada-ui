import { useEffect, useState } from "react";

import { useGetConfig } from "hooks/api/useGetConfig";

import Head from "next/head";

import { Container, Badge, Group, Title, Text, Button, Tooltip } from "@mantine/core";

import ConfigModal from "features/home/admin/configModal/ConfigModal";

import { IoRefresh } from "react-icons/io5";
import { BsGear } from "react-icons/bs";

import { useRefreshCacheMutation } from "store/api/configAPI";
import { cacheRefreshedNotification } from "components/notifications/success";

import CustomLoader from "components/loader/CustomLoader";

const Config = () => {
    const [opened, setOpened] = useState(false);
    const [refreshCache, result] = useRefreshCacheMutation();

    const { data, refetch } = useGetConfig();

    useEffect(() => {
        if (result.isSuccess)
            cacheRefreshedNotification();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [result])

    return data ? (
        <>
            <Head><title>ADA | Config</title></Head>
            <ConfigModal opened={opened} setOpened={setOpened} actualConfig={data.config} refetch={refetch} />
            <Container m={0}>
                <h1 style={{paddingBottom: 10}}>ADA | Configuration</h1>
                <Group mt={10}>
                    <Badge size="lg" radius="sm" variant="outline">Version {data.version}</Badge>
                    <Badge size="lg" color={data.isTransporter ? "green" : "red"} radius="sm" variant="outline" autoCapitalize="false" >Mail transporter {data.isTransporter ? "active" : "innactive"}</Badge>
                </Group>
                <Title order={2} mt={40}>Configuration</Title>
                <Text mt={20}>In this part you can change ADA parameters such as hostname, SMTP or default accounts password. You can also put ADA into maintenance mode to avoid users access to the application.</Text>
                <Group mt={20}>
                    <Button id={"edit-config-button"} leftIcon={<BsGear size={20} />} miw={240} variant="outline" onClick={(() => {setOpened(true)})}>
                        Configuration
                    </Button>
                </Group>
                <Title order={2} mt={40}>Having troubles ?</Title>
                <Text mt={20}>Some DB values are cached in the backend of ADA, if you changed values directly in the database and don&apos;t see the change appears on the frontend, it could be coming from this.</Text>
                <Group mt={20}>
                    <Tooltip multiline label={`This will also restart the connection with the mail transporter`} withArrow radius={"sm"} arrowSize={6} arrowRadius={4} width={300} style={{textAlign: "center"}}>
                        <Button color={"red"} leftIcon={<IoRefresh size={20} />} miw={240} variant="outline" onClick={(() => {refreshCache()})}>
                            Refresh cache
                        </Button>
                    </Tooltip>
                </Group>
            </Container>
        </>
    ) : <CustomLoader />;
}

export default Config;