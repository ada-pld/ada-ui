import { useEffect, useState } from "react";

import { useMantineTheme, ActionIcon, Menu } from "@mantine/core";

import { HiOutlineDotsHorizontal, HiOutlineTrash } from "react-icons/hi";

import { RiEditLine } from "react-icons/ri";
import { TbCheckbox } from "react-icons/tb";

import DodsModal from "./modals/DodsModal";

import { Card } from "types/apiTypes";

import EditModal from "./modals/EditCardModal";
import { useDeleteCardMutation } from "store/api/cardAPI";
import { deleteErrorNotification } from "components/notifications/errors";
import { deleteCardNotification } from "components/notifications/success";
import DodsButton from "./menu/DodsButton";

interface Props {
    card: Card;
    refetch: any;
    edition: boolean;
}

const CardMenu: React.FC<Props> = ({ card, refetch, edition }) => {
    const [openDods, setOpenDods] = useState(false);
    const [openEdit, setOpenEdit] = useState(false);
    const theme = useMantineTheme();
    const isMenu = card.status === "WAITING_APPROVAL" || card.status === "REJECTED" || edition ? false : true;

    const [deleteCard, resultDelete] = useDeleteCardMutation<any>();

    useEffect(() => {
        if (resultDelete.isError) {
            deleteErrorNotification(resultDelete.error.data.message);
        } else if (resultDelete.isSuccess) {
            deleteCardNotification();
            refetch();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [resultDelete])

    return (
        <>
            <DodsModal openDods={openDods} setOpenDods={setOpenDods} card={card} />
            <EditModal openEdit={openEdit} setOpenEdit={setOpenEdit} card={card} refetch={refetch} />
            {!isMenu
                ?   <Menu shadow="md" width={200} trigger="hover" openDelay={100} closeDelay={400}>
                        <Menu.Target>
                            <ActionIcon size={"lg"} color={"violet"}>
                                <HiOutlineDotsHorizontal size={25} color={theme.colors.violet[5]} />  
                            </ActionIcon>
                        </Menu.Target>

                        <Menu.Dropdown>
                            <Menu.Label>Card</Menu.Label>
                            <Menu.Item icon={<TbCheckbox size={18} />} onClick={() => setOpenDods(true)}>DoDs</Menu.Item>

                            <Menu.Divider />

                            <Menu.Label>Danger zone</Menu.Label>
                            <Menu.Item onClick={() => setOpenEdit(true)} icon={<RiEditLine size={18} />}>Edit</Menu.Item>
                            <Menu.Item color="red" icon={<HiOutlineTrash size={18} />} onClick={() => deleteCard(card.id)}>Delete card</Menu.Item>
                        </Menu.Dropdown>
                    </Menu>
                :   <DodsButton setOpenDods={setOpenDods} />
            }
        </>
    );
}

export default CardMenu;