import { sessionExpiredNotification, unauthorizedNotification } from "components/notifications/errors"

import { NextRouter } from "next/router"

export const checkError = (error: any, router: NextRouter) => {
    if (error.status === 401) {
        router.replace("/login")
        sessionExpiredNotification();
    } else if (error.status === 403) {
        console.log(error)
        router.replace("/403")
    }
}