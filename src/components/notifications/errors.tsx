import React from "react";

import { AiOutlineExclamation } from "react-icons/ai";

import { showNotification } from "@mantine/notifications";

export const sessionExpiredNotification = () => {
    showNotification({
        title: "Session expired",
        message: "Please login to proceed",
        color: "red",
        icon: <AiOutlineExclamation size={24} />,
    });
};

export const unauthorizedNotification = () => {
    showNotification({
        title: "Unhautorized",
        message: "You cannot access to this ressource with your actual permissions",
        color: "red",
        icon: <AiOutlineExclamation size={24} />,
    });
};

export const emailInUseNotification = () => {
    showNotification({
        title: "Email already in use",
        message: "The email you provide is already allocated to an active account",
        color: "red",
        icon: <AiOutlineExclamation size={24} />,
    });
};

export const missingIdNotification = () => {
    showNotification({
        title: "Missing or invalid ID",
        message: "The id provided is not valid",
        color: "red",
        icon: <AiOutlineExclamation size={24} />,
    });
};

export const emailErrorNotification = () => {
    showNotification({
        title: "Unable to send email",
        message: "Mail sending is not supported on this WAP instance. Please contact your WAP administrator",
        color: "red",
        icon: <AiOutlineExclamation size={24} />,
    });
};