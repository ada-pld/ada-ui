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

export const partErrorNotification = () => {
    showNotification({
        title: "Unable to create part",
        message: "Part name already in use",
        color: "red",
        icon: <AiOutlineExclamation size={24} />,
    });
};

export const statusErrorNotification = () => {
    showNotification({
        title: "Unable to update status",
        message: "You don't have the permission to perform this action",
        color: "red",
        icon: <AiOutlineExclamation size={24} />,
    });
};

export const statusError2Notification = () => {
    showNotification({
        title: "Unable to update status",
        message: "You can't update the status of this card",
        color: "red",
        icon: <AiOutlineExclamation size={24} />,
    });
};

export const deleteErrorNotification = () => {
    showNotification({
        title: "Unable to delete",
        message: "You don't have the permission to delete this card",
        color: "red",
        icon: <AiOutlineExclamation size={24} />,
    });
};

export const deleteError2Notification = () => {
    showNotification({
        title: "Unable to delete",
        message: "This card as already been approved",
        color: "red",
        icon: <AiOutlineExclamation size={24} />,
    });
};

export const createErrorNotification = () => {
    showNotification({
        title: "Unable to create",
        message: "An error occured, please try again",
        color: "red",
        icon: <AiOutlineExclamation size={24} />,
    });
};

export const editErrorNotification = () => {
    showNotification({
        title: "Unable to edit",
        message: "An error occured, please try again",
        color: "red",
        icon: <AiOutlineExclamation size={24} />,
    });
};

export const approveErrorNotification = () => {
    showNotification({
        title: "Unable to approve",
        message: "This card as already been approved",
        color: "red",
        icon: <AiOutlineExclamation size={24} />,
    });
};

export const rejectErrorNotification = () => {
    showNotification({
        title: "Unable to reject",
        message: "This card as already been approved",
        color: "red",
        icon: <AiOutlineExclamation size={24} />,
    });
};

export const editProfileErrorNotification = (message: string) => {
    showNotification({
        title: "Unhautorized",
        message: message,
        color: "red",
        icon: <AiOutlineExclamation size={24} />,
    });
};