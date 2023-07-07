import { Button, Divider, Group, Title } from '@mantine/core';

import { RxCardStackPlus } from 'react-icons/rx';

import { useSetupStyle } from '../../styles/useSetupStyle';

interface Props {
    setOpenAdd: React.Dispatch<React.SetStateAction<boolean>>;
}

const DashboardWelcome = ({ setOpenAdd }: Props) => {
    const { classes } = useSetupStyle();

    return (
        <>
            <Divider style={{marginTop: 20}} />
            <Title className={classes.title}>Begin your <span className={classes.span}>journey</span></Title>
            <Group position="center" mt={40} style={{width: "100%", minWidth: 300}}>
                <Button w={"30%"} miw={300} leftIcon={<RxCardStackPlus size={20} />} variant="light" onClick={() => setOpenAdd(true)}>
                    Create my first card
                </Button>
            </Group>
        </>
    );
}

export default DashboardWelcome;