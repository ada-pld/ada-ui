import { useEffect, useState } from "react";

import { Badge, Center, Divider, Grid, Tabs, Title } from "@mantine/core";

import { PartsList } from "store/api/types/fetchedData";
import { Card, CardsStats } from "types/apiTypes";

import Filters from "./components/Filters";

import WaitingCardsEditable from "./components/CardsTabs/WaitingCardsEditable";
import ApprovedCardsEditable from "./components/CardsTabs/ApprovedCardsEditable";
import RejectedCardsEditable from "./components/CardsTabs/RejectedCardsEditable";

interface Props {
    cards: CardsStats[];
    refetch: any;
    parts: PartsList[];
}

const ListWaitingCards: React.FC<Props> = ({cards, refetch, parts}) => {
    const [activeTab, setActiveTab] = useState<string | null>("Waiting approval");
    const cardsArray = cards.flatMap((card: CardsStats)  => card.cards);
    
    const waitingCards = cardsArray.filter((card: Card) => card.status === "WAITING_APPROVAL");
    const rejectedCards = cardsArray.filter((card: Card) => card.status === "REJECTED");
    const approvedCards = cardsArray.filter((card: Card) => card.status !== "WAITING_APPROVAL" && card.status !== "REJECTED");

    const [filteredWaitingCards, setFilteredWaitingCards] = useState(waitingCards);
    const [filteredRejectedCards, setFilteredRejectedCards] = useState(rejectedCards);
    const [filteredApprovedCards, setFilteredApprovedCards] = useState(approvedCards);
    
    const [partFilter, setPartFilter] = useState<string | null>(null);
    const [search, setSearch] = useState<string>("");

    useEffect(() => {
        let waitingCardsFiltering = cardsArray.filter((card: Card) => card.status === "WAITING_APPROVAL");
        let rejectedCardsFiltering = cardsArray.filter((card: Card) => card.status === "REJECTED");
        let approvedCardsFiltering = cardsArray.filter((card: Card) => card.status !== "WAITING_APPROVAL" && card.status !== "REJECTED");

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
            <Tabs radius={"sm"} defaultValue="Waiting approval" mt={40} value={activeTab} onTabChange={setActiveTab}>
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