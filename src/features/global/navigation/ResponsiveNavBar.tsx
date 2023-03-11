import { Navbar, Center, Tooltip, UnstyledButton, createStyles, Stack, Divider, ScrollArea } from '@mantine/core';

import { userTabs, editorTabs, adminTabs } from './utils/links';

import { SlLogout } from "react-icons/sl";
import { IconType } from 'react-icons';

import { useRouter } from 'next/router';

import LittleColorScheme from 'components/littleColorScheme/LittleColorScheme';
import { logoutHandling } from './utils/logoutHandling';
import { useAppDispatch } from 'store/hooks/hooks';

interface Props {
    page: string;
    userRole: string;
}

const useStyles = createStyles((theme) => ({
    link: {
        width: 40,
        height: 40,
        borderRadius: theme.radius.md,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[6],

        '&:hover': {
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[0],
        },
    },

    active: {
        '&, &:hover': {
            backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
            color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
        },
    },
}));

interface NavbarLinkProps {
    icon: IconType;
    label: string;
    active?: boolean;
    onClick?(): void;
}

function NavbarLink({ icon: Icon, label, active, onClick }: NavbarLinkProps) {
    const { classes, cx } = useStyles();
    return (
        <Tooltip label={label} position="right" transitionProps={{duration: 300}} withinPortal>
            <UnstyledButton onClick={onClick} className={cx(classes.link, { [classes.active]: active })}>
                <Icon size={20} />
            </UnstyledButton>
        </Tooltip>
    );
}

const ResponsiveNavBar: React.FC<Props> = ({page, userRole}) => {
    const router = useRouter();
    const dispatch = useAppDispatch();
    const userNav = userTabs.map((link, index) => (
        <NavbarLink
            {...link}
            key={link.link}
            active={link.link === page}
            onClick={() => router.push(link.link)}
        />
    ));

    const editorNav = editorTabs.map((link, index) => (
        <NavbarLink
            {...link}
            key={link.link}
            active={link.link === page}
            onClick={() => router.push(link.link)}
        />
    ));

    const adminNav = adminTabs.map((link, index) => (
        <NavbarLink
            {...link}
            key={link.link}
            active={link.link === page}
            onClick={() => router.push(link.link)}
        />
    ));

    return (
        <Navbar width={{ base: 80 }} p="md" height={"100%"}>
            <Center>
                <h1>W</h1>
            </Center>
            <Navbar.Section grow mt={"md"} component={ScrollArea} pb={10}>
                <Stack spacing={5} align="center">
                    <>
                        {userNav}
                        {(userRole === "2" || userRole === "3") && <div style={{marginTop: 15}}>{editorNav}</div>}
                        {userRole === "3" && <div style={{marginTop: 15}}>{adminNav}</div>}
                    </>
                </Stack>
            </Navbar.Section>
            <Navbar.Section>
                <Stack justify="center" spacing={10}>
                    <Center mt={10}>
                        <LittleColorScheme />
                    </Center>
                    <NavbarLink icon={SlLogout} label="Logout" onClick={() => {logoutHandling({dispatch, router})}} />
                </Stack>
            </Navbar.Section>
        </Navbar>
    );
}

export default ResponsiveNavBar;