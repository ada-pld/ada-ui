import { useRouter } from 'next/router';

import { useViewportSize } from '@mantine/hooks';
import { Navbar, UnstyledButton, ScrollArea, Group } from '@mantine/core';

import { useAppSelector, useAppDispatch } from 'store/hooks/hooks';
import { useGetUserInfos } from 'hooks/api/useGetUserInfos';

import UserButton from './components/UserButton';

import { logoutHandling } from './utils/logoutHandling';
import { SlLogout } from "react-icons/sl";

import Navigationtabs from './components/NavigationTabs';
import { useNavBarStyles } from './styles/useNavBarStyles';


const NavBar = () => {
    const userRole = useAppSelector((state) => state.user.auth.accessToken?.charAt(0));

    const { pathname } = useRouter();
    const router = useRouter();

    const { data: user } = useGetUserInfos();
    const { classes } = useNavBarStyles();
    const dispatch = useAppDispatch();

    let page = pathname;

    if (page === "/home/pld/generator" || page === "/home/pld/images" || page === "/home/pld/changes")
        page = "/home/pld";

    return userRole && user ? (
        <Navbar p="xs" width={{ base: 275 }} style={{borderWidth: 0}} className={classes.navbar}>
            <Navbar.Section>
                <UserButton
                    firstname={user?.firstname}
                    lastname={user?.lastname}
                    email={user?.email}
                />
            </Navbar.Section>

            <Navbar.Section mt="xl" grow component={ScrollArea}>
                <Navigationtabs active={page} userRole={userRole} />
            </Navbar.Section>

            <Navbar.Section className={classes.footer}>
                <UnstyledButton
                    mb={5}
                    style={{width: "100%"}}
                    className={classes.link}
                    onClick={() => {logoutHandling({dispatch, router})}}
                >
                    <Group className={classes.iconGroup}>
                        <SlLogout className={classes.linkIcon} />
                    </Group>
                    <span>Logout</span>
                </UnstyledButton>
            </Navbar.Section>
        </Navbar>
    ) : <></>;
}

export default NavBar;