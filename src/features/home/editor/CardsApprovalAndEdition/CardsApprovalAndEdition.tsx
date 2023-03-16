import { useEffect, useState } from "react";

import { Tabs } from "@mantine/core";

import { PartsList } from "store/api/types/fetchedData";
import { Card } from "types/apiTypes";

import Filters from "./components/Filters";

import WaitingCardsEditable from "./components/CardsTabs/WaitingCardsEditable";
import ApprovedCardsEditable from "./components/CardsTabs/ApprovedCardsEditable";
import RejectedCardsEditable from "./components/CardsTabs/RejectedCardsEditable";

interface Props {
    cards: Card[];
    refetch: any;
    parts: PartsList[];
}

const ListWaitingCards: React.FC<Props> = ({cards, refetch, parts}) => {
    const [activeTab, setActiveTab] = useState<string | null>("Waiting approval");
    
    const waitingCards = cards.filter((card: Card) => card.status === "WAITING_APPROVAL");
    const rejectedCards = cards.filter((card: Card) => card.status === "REJECTED");
    const approvedCards = cards.filter((card: Card) => card.status !== "WAITING_APPROVAL" && card.status !== "REJECTED");

    const [filteredWaitingCards, setFilteredWaitingCards] = useState(waitingCards);
    const [filteredRejectedCards, setFilteredRejectedCards] = useState(rejectedCards);
    const [filteredApprovedCards, setFilteredApprovedCards] = useState(approvedCards);
    
    const [partFilter, setPartFilter] = useState<string | null>(null);
    const [search, setSearch] = useState<string>("");

    useEffect(() => {
        let waitingCardsFiltering = cards.filter((card: Card) => card.status === "WAITING_APPROVAL");
        let rejectedCardsFiltering = cards.filter((card: Card) => card.status === "REJECTED");
        let approvedCardsFiltering = cards.filter((card: Card) => card.status !== "WAITING_APPROVAL" && card.status !== "REJECTED");

        if (partFilter) {
            waitingCardsFiltering = waitingCardsFiltering.filter((card: Card) => card.part.name === partFilter);
            rejectedCardsFiltering = rejectedCardsFiltering.filter((card: Card) => card.part.name === partFilter);
            approvedCardsFiltering = approvedCardsFiltering.filter((card: Card) => card.part.name === partFilter);
        }

        if (search !== "") {
            waitingCardsFiltering = waitingCardsFiltering.filter((card: Card) => card.name.toLowerCase().includes(search.toLowerCase()));
            rejectedCardsFiltering = rejectedCardsFiltering.filter((card: Card) => card.name.toLowerCase().includes(search.toLowerCase()));
            approvedCardsFiltering = approvedCardsFiltering.filter((card: Card) => card.name.toLowerCase().includes(search.toLowerCase()));
        }

        setFilteredRejectedCards(rejectedCardsFiltering);
        setFilteredApprovedCards(approvedCardsFiltering);
        setFilteredWaitingCards(waitingCardsFiltering);
    }, [partFilter, search, cards]);

    return (
        <div style={{height: "100%", width: "100%"}}>
            <Filters
                parts={parts}
                partFilter={partFilter}
                setPartFilter={setPartFilter}
                search={search}
                setSearch={setSearch}
            />
            <Tabs variant="outline" radius={"sm"} defaultValue="Waiting approval" mt={40} value={activeTab} onTabChange={setActiveTab}>
                <Tabs.List grow position="center">
                    <Tabs.Tab value="Waiting approval">Waiting approval</Tabs.Tab>
                    <Tabs.Tab value="Approved">Approved</Tabs.Tab>
                    <Tabs.Tab value="Rejected">Rejected</Tabs.Tab>
                </Tabs.List>
                <WaitingCardsEditable data={filteredWaitingCards} refetch={refetch} />
                <ApprovedCardsEditable data={filteredApprovedCards} refetch={refetch} />
                <RejectedCardsEditable data={filteredRejectedCards} refetch={refetch} />
            </Tabs>
        </div>
    );
}

export default ListWaitingCards;