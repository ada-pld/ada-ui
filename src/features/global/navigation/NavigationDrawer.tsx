import { Container, Drawer, Group, Stack, Text, UnstyledButton } from "@mantine/core";
import { useGetUserInfos } from "hooks/api/useGetUserInfos";
import { useRouter } from "next/router";
import { SlLogout } from "react-icons/sl";
import { useAppDispatch, useAppSelector } from "store/hooks/hooks";
import Navigationtabs from "./components/fullNavBar/NavigationTabs";
import UserButton from "./components/fullNavBar/UserButton";
import { useNavBarStyles } from "./styles/useNavBarStyles";
import { logoutHandling } from "./utils/logoutHandling";

interface Props {
    opened: boolean;
    onClose: () => void;
}

const NavigationDrawer: React.FC<Props> = ({ opened, onClose }) => {
    const { data: user } = useGetUserInfos();
    const { classes } = useNavBarStyles();
    const router = useRouter();
    const dispatch = useAppDispatch();
    const userRole = useAppSelector((state) => state.user.auth.accessToken?.charAt(0));
    const { pathname } = useRouter();
    let page = pathname;

    if (page === "/home/pld/generator" || page === "/home/pld/images" || page === "/home/pld/changes")
        page = "/home/pld";

    return pathname.includes("home") && userRole ? (
        <Drawer opened={opened} onClose={onClose} withCloseButton={false} size={"60%"}>
            <Stack style={{height: "95vh"}} justify={"space-between"}>
                <div>
                    <UserButton
                        firstname={user?.firstname}
                        lastname={user?.lastname}
                        email={user?.email}
                        onClose={onClose}
                    />
                    <div style={{ marginTop: 30 }}>
                        <Navigationtabs active={page} userRole={userRole} onClose={onClose} />
                    </div>
                </div>
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
            </Stack>
        </Drawer>
    ) : <></>;
}

export default NavigationDrawer;