interface Translate {
    [key: string]: string;
}

export const statusTranslate: Translate = {
    WAITING_APPROVAL: "Waiting approval",
    NOT_STARTED: "Not started",
    STARTED: "In progress",
    FINISHED: "Finished",
}

export const statusColor: Translate = {
    WAITING_APPROVAL: "dark",
    NOT_STARTED: "red",
    STARTED: "yellow",
    FINISHED: "green",
}