import { Button, Container, Group } from "@mantine/core";

import CustomLoader from "components/loader/CustomLoader";
import UserProfile from "features/home/user/userProfile";

import { useGetUserInfos } from "hooks/api/useGetUserInfos";
import Head from "next/head";

import { FiSave } from "react-icons/fi";

const Profile = () => {
    const { data: user } = useGetUserInfos();

    return user ? (
        <div>
            <Head><title>WAP | Profile</title></Head>
            <Container fluid p={0} m={0}>
                <h1 style={{textAlign: "center"}}>Profile</h1>
                <UserProfile user={user} />
            </Container>
        </div>
    ) : <CustomLoader />;
}

export default Profile;