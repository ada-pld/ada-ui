import { Card, UserCards } from "types/apiTypes";

import style from "./styles/sprintBoard.module.css";
import UserCard from "features/global/cards/UserCard";

import { Badge, Center, Divider, Group } from "@mantine/core";

interface Props {
    user: UserCards;
    sprintId: number;
    refetch: any;
}

const SprintBoardPart: React.FC<Props> = ({ user, sprintId, refetch }) => {
    const approvedCards = user.cards.filter((card: Card) => card.status !== "WAITING_APPROVAL" && card.status !== "REJECTED" && card.sprintId === sprintId);

    return (
        <div style={{width: "100%"}}>
            <div style={{paddingRight: 20, paddingLeft: 20}}>
                <h2 className={style.title}>{user.firstname} {user.lastname}</h2>
                <h2 className={style.subtitle}>{user.email}</h2>
                <Group mt={10}>
                    <Badge variant="light" size="md" radius={"sm"} color={"green"}>{user.JHDones} Finished</Badge>
                    <Badge variant="light" size="md" radius={"sm"} color={"orange"}>{user.JHInProgress} in progress</Badge>
                    <Badge variant="light" size="md" radius={"sm"} color={"red"}>{user.JHNotStarted} Not started</Badge>
                </Group>
                <Divider mt={20} />
            </div>
            <div className={style.scrollmenu}>
                {approvedCards.length === 0
                    ? <Center style={{ height: 150 }}><h2>No approved cards</h2></Center>
                    :   <>
                            {approvedCards.map((card, index) => (
                                <div  key={index} className={style.cardsPart}>
                                    <UserCard refetch={refetch} card={card} edition={true} mode={"none"} />
                                </div>
                            ))}
                        </>
                }
            </div>
        </div>
    );
}

export default SprintBoardPart;