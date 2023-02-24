import { useState } from "react";

import Head from "next/head";

import { Container, Group, Button, Tabs, Badge } from "@mantine/core";

import { RxCardStackPlus } from "react-icons/rx";

import { useGetUserCards } from "hooks/api/useGetUserCards";

import RejectedCards from "features/home/user/cardTabs/RejectedCards";
import WaitingCards from "features/home/user/cardTabs/WaitingCards";
import ApprovedCards from "features/home/user/cardTabs/ApprovedCards";

import { Card } from "types/apiTypes";
import { useGetSprint } from "hooks/api/useGetSprint";

import AddCardModal from "features/global/cards/components/AddCardModal";

import CustomLoader from "components/loader/CustomLoader";

const MyCards = () => {
    const { data: cards, refetch } = useGetUserCards();
    const { data: sprint } = useGetSprint();

    const [activeTab, setActiveTab] = useState<string | null>('Approved');
    const [openAdd, setOpenAdd] = useState<boolean>(false);
    
    return cards && sprint ? (
        <div>
            <Head><title>WAP | MyCards</title></Head>
            <AddCardModal openAdd={openAdd} setOpenAdd={setOpenAdd} refetch={refetch} />
            {cards &&
                <Container fluid p={0} m={0}>
                    <h1 style={{textAlign: "center"}}>My Cards</h1>
                    <h3 style={{textAlign: "center", color: "dimgrey"}}>{sprint.name}</h3>
                    <Group position="center" mt={40} style={{width: "100%", minWidth: 400}}>
                        <Button w={"30%"} miw={250} leftIcon={<RxCardStackPlus size={20} />} variant="outline" onClick={() => setOpenAdd(true)}>
                            Add a card
                        </Button>
                    </Group>
                    <Tabs radius={"sm"} defaultValue="Approved" mt={40} value={activeTab} onTabChange={setActiveTab}>
                        <Tabs.List grow position="center">
                            <Tabs.Tab value="Approved" rightSection={<Badge radius={"sm"} variant={activeTab === "Approved" ? "filled" : "light"} size="sm">{cards.filter((card: Card) => card.status !== "WAITING_APPROVAL" && card.status !== "REJECTED" && card.sprint.active).reduce((accumulator, card) => accumulator + card.workingDays, 0) + " J/H"}</Badge>}>Approved</Tabs.Tab>
                            <Tabs.Tab value="Waiting approval" rightSection={<Badge radius={"sm"} variant={activeTab === "Waiting approval" ? "filled" : "light"}  size="sm">{cards.filter((card: Card) => card.status === "WAITING_APPROVAL" && card.sprint.active).reduce((accumulator, card) => accumulator + card.workingDays, 0) + " J/H"}</Badge>}>Waiting approval</Tabs.Tab>
                            <Tabs.Tab value="Rejected" rightSection={<Badge radius={"sm"} variant={activeTab === "Rejected" ? "filled" : "light"}  size="sm">{cards.filter((card: Card) => card.status === "REJECTED" && card.sprint.active).reduce((accumulator, card) => accumulator + card.workingDays, 0) + " J/H"}</Badge>}>Rejected</Tabs.Tab>
                        </Tabs.List>
                        <ApprovedCards data={cards} refetch={refetch} />
                        <WaitingCards data={cards} refetch={refetch} />
                        <RejectedCards data={cards} refetch={refetch} />
                    </Tabs>
                </Container>
            }
        </div>
    ) : <CustomLoader />;
}

export default MyCards;