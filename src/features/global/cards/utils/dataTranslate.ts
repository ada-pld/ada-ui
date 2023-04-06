interface Translate {
    [key: string]: string;
}

export const statusTranslate: Translate = {
    REJECTED: "Rejected",
    WAITING_APPROVAL: "Waiting approval",
    NOT_STARTED: "Not started",
    STARTED: "In progress",
    FINISHED: "Finished",
}

export const statusColor: Translate = {
    REJECTED: "red",
    WAITING_APPROVAL: "dark",
    NOT_STARTED: "red",
    STARTED: "yellow",
    FINISHED: "green",
}

export const numberFormat = (val: string) => {
    const v = parseFloat(val.replace(/[,.]+$/, ""))
    if (Number.isNaN(v)) {
        return `${val}`;
    }
    if ((v * 10) % 10 > 0) {
        return `${Math.floor(v)}.5`;
    }
    if (val.endsWith('.'))
        return `${v}.`
    return `${v}`
}