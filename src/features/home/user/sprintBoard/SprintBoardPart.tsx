import { Card } from "types/apiTypes";

import style from "./styles/sprintBoard.module.css";
import UserCard from "features/global/cards/UserCard";

import { Center, Divider } from "@mantine/core";

interface Props {
    fullname: string;
    email: string;
    cards: Card[];
    sprintId: number;
    refetch: any;
}

const SprintBoardPart: React.FC<Props> = ({ fullname, email, cards, sprintId, refetch }) => {
    const approvedCards = cards.filter((card: Card) => card.status !== "WAITING_APPROVAL" && card.status !== "REJECTED" && card.sprintId === sprintId);

    return (
        <div style={{width: "100%"}}>
            <h2 className={style.title}>{fullname}</h2>
            <h2 className={style.subtitle}>{email}</h2>
            <Divider mt={20} />
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