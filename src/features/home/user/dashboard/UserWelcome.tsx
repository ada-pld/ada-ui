import { Button, Divider, Group, Title } from '@mantine/core';

import Banner from './components/AdminWelcome/Banner';

import { RxCardStackPlus } from 'react-icons/rx';

import { useSetupStyle } from './styles/useSetupStyle';

interface Props {
    setOpenAdd: React.Dispatch<React.SetStateAction<boolean>>;
}

const UserWelcome: React.FC<Props> = ({setOpenAdd}) => {
    const { classes } = useSetupStyle();

    return (
        <div style={{padding: 20}}>
            <Banner />
            <Divider style={{marginTop: 20}} />
            <Title className={classes.title}>Begin your <span className={classes.span}>journey</span></Title>
            <Group position="center" mt={40} style={{width: "100%", minWidth: 300}}>
                <Button w={"30%"} miw={300} leftIcon={<RxCardStackPlus size={20} />} variant="light" onClick={() => setOpenAdd(true)}>
                    Create my first card
                </Button>
            </Group>
        </div>
    );
}

export default UserWelcome;