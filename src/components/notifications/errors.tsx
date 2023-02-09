import React from "react";
import { BiErrorCircle } from "react-icons/bi";

import { showNotification } from "@mantine/notifications";

export const sessionExpiredNotification = () => {
    showNotification({
        title: "Session expired",
        message: "Please login to proceed",
        color: "red",
        icon: <BiErrorCircle size={23} />,
    });
};