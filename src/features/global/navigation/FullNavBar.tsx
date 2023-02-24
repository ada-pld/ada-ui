import { Navbar, UnstyledButton, ScrollArea } from '@mantine/core';

import UserButton from './components/fullNavBar/UserButton';

import { logoutHandling } from './utils/logoutHandling';

import { SlLogout } from "react-icons/sl";
import Navigationtabs from './components/fullNavBar/NavigationTabs';

import { useRouter } from 'next/router';

import { useAppDispatch } from 'store/hooks/hooks';

import { useStyles } from './styles/fullNavBarStyle';

import { useGetUserInfos } from 'hooks/api/useGetUserInfos';

import CustomLoader from 'components/loader/CustomLoader';

interface Props {
    page: string;
}

const NavBar: React.FC<Props> = ({page}) => {
    const { data: user } = useGetUserInfos();
    const { classes, cx } = useStyles();
    const router = useRouter();
    const dispatch = useAppDispatch();

    return (
        <Navbar p="xs" width={{ base: 275 }} className={classes.navbar}>
            <Navbar.Section>
                <UserButton
                    firstname={user?.firstname}
                    lastname={user?.lastname}
                    email={user?.email}
                />
            </Navbar.Section>

            <Navbar.Section mt="xl" grow component={ScrollArea}>
                <Navigationtabs active={page} />
            </Navbar.Section>

            <Navbar.Section className={classes.footer}>
                <UnstyledButton
                    mb={5}
                    style={{width: "100%"}}
                    className={classes.link}
                    onClick={() => {logoutHandling({dispatch, router})}}
                >
                    <SlLogout className={classes.linkIcon} />
                    <span>Logout</span>
                </UnstyledButton>
            </Navbar.Section>
        </Navbar>
    );
}

export default NavBar;