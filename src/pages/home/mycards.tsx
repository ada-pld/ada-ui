import { useState } from "react";

import Head from "next/head";

import { Container, Group, Button, Tabs, Badge } from "@mantine/core";

import { RxCardStackPlus } from "react-icons/rx";

import { useGetUserCards } from "hooks/api/useGetUserCards";

import RejectedCards from "features/home/user/cardTabs/RejectedCards";
import WaitingCards from "features/home/user/cardTabs/WaitingCards";
import ApprovedCards from "features/home/user/cardTabs/ApprovedCards";

import { useGetSprint } from "hooks/api/useGetSprint";

import AddCardModal from "features/global/cards/components/modals/AddCardModal";

import CustomLoader from "components/loader/CustomLoader";
import { Card } from "types/apiTypes";

const MyCards = () => {
    const { data: sprint } = useGetSprint();
    const { data, refetch } = useGetUserCards("user");

    const [activeTab, setActiveTab] = useState<string | null>('Approved');
    const [openAdd, setOpenAdd] = useState<boolean>(false);
    
    return data && sprint ? (
        <div>
            <Head><title>WAP | MyCards</title></Head>
            <AddCardModal openAdd={openAdd} setOpenAdd={setOpenAdd} refetch={refetch} />
            {data &&
                <Container fluid p={0} m={0}>
                    <h1 style={{textAlign: "center"}}>My Cards</h1>
                    <h3 style={{textAlign: "center", color: "dimgrey"}}>{sprint.name}</h3>
                    <Group position="center" mt={40} style={{width: "100%", minWidth: 250}}>
                        <Button w={"30%"} miw={250} leftIcon={<RxCardStackPlus size={20} />} variant="outline" onClick={() => setOpenAdd(true)}>
                            Add a card
                        </Button>
                    </Group>
                    <Tabs variant="outline" radius={"sm"} defaultValue="Approved" mt={40} value={activeTab} onTabChange={setActiveTab}>
                        <Tabs.List grow position="center">
                            <Tabs.Tab value="Approved" rightSection={<Badge radius={"sm"} variant={activeTab === "Approved" ? "filled" : "light"} size="sm">{`${data.JHIntended} J/H`}</Badge>}>Approved</Tabs.Tab>
                            <Tabs.Tab value="Waiting approval" rightSection={<Badge radius={"sm"} variant={activeTab === "Waiting approval" ? "filled" : "light"}  size="sm">{`${data.JHWaitingApproval} J/H`}</Badge>}>Waiting approval</Tabs.Tab>
                            <Tabs.Tab value="Rejected" rightSection={<Badge radius={"sm"} variant={activeTab === "Rejected" ? "filled" : "light"}  size="sm">{`${data.JHRejected} J/H`}</Badge>}>Rejected</Tabs.Tab>
                        </Tabs.List>
                        <ApprovedCards data={data.cards.filter((card: Card) => card.sprintId === sprint.id)} refetch={refetch} />
                        <WaitingCards data={data.cards.filter((card: Card) => card.sprintId === sprint.id)} refetch={refetch} />
                        <RejectedCards data={data.cards.filter((card: Card) => card.sprintId === sprint.id)} refetch={refetch} />
                    </Tabs>
                </Container>
            }
        </div>
    ) : <CustomLoader />;
}

export default MyCards;