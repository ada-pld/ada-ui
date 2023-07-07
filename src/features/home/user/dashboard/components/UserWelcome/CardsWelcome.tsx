import { Anchor, Button, Divider, Group, Text, Title } from '@mantine/core';

import { useSetupStyle } from '../../styles/useSetupStyle';

const CardsWelcome = () => {
    const { classes } = useSetupStyle();

    return (
        <>
            <Divider style={{marginTop: 20}} />
            <Title className={classes.title}>Your must select a <span className={classes.span}>sprint</span></Title>
            <Text color="dimmed" mt="md" align='center'>
                Please create and select a <Anchor id={"stepper-users-shortcut"} href="/home/editor/sprints">sprint</Anchor> or contact your instance admin
            </Text>
        </>
    );
}

export default CardsWelcome;