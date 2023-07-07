import { Container } from "@mantine/core";

import CustomLoader from "components/loader/CustomLoader";
import UserWelcome from "features/home/user/dashboard/UserWelcome";
import SprintBoardPart from "features/home/user/sprintBoard/SprintBoardPart";
import { useGetSprint } from "hooks/api/useGetSprint";

import { useGetUserCards } from "hooks/api/useGetUserCards";

import Head from "next/head";
import { UserCards } from "types/apiTypes";

const SprintBoard = () => {
    const { data: users, refetch } = useGetUserCards("all");
    const { data: sprint } = useGetSprint();

    return users && sprint ? (
        <div>
            <Head><title>ADA | Sprint board</title></Head>
            <Container fluid p={0} m={0}>
                <h1 style={{textAlign: "center"}}>Sprint board</h1>
                <h3 style={{textAlign: "center", color: "dimgrey"}}>{sprint.name}</h3>
                <div style={{marginTop: 60}}>
                    {users.map((user: UserCards) => (
                        <div key={user.id} style={{marginTop: 30}}>
                            <SprintBoardPart
                                fullname={user.firstname + " " + user.lastname}
                                email={user.email}
                                cards={user.cards}
                                sprintId={sprint.id}
                                refetch={refetch}
                            />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    ) : sprint === null ? <UserWelcome type="sprint" /> : <CustomLoader />;
}

export default SprintBoard;