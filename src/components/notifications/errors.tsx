import React from "react";

import { AiOutlineExclamation } from "react-icons/ai";

import { notifications } from '@mantine/notifications';

export const sessionExpiredNotification = () => {
    notifications.show({
        title: "Session expired",
        message: "Please login to proceed",
        color: "red",
        icon: <AiOutlineExclamation size={24} />,
    });
};

export const unauthorizedNotification = () => {
    notifications.show({
        title: "Unhautorized",
        message: "You cannot access to this ressource with your actual permissions",
        color: "red",
        icon: <AiOutlineExclamation size={24} />,
    });
};

export const createUserErrorNotification = (message: string) => {
    notifications.show({
        title: message,
        message: "The email you provide is already allocated to an active account",
        color: "red",
        icon: <AiOutlineExclamation size={24} />,
    });
};

export const missingIdNotification = () => {
    notifications.show({
        title: "Missing or invalid ID",
        message: "The id provided is not valid",
        color: "red",
        icon: <AiOutlineExclamation size={24} />,
    });
};

export const emailErrorNotification = () => {
    notifications.show({
        title: "Unable to send email",
        message: "Mail sending is not supported on this ADA instance. Please contact your ADA administrator",
        color: "red",
        icon: <AiOutlineExclamation size={24} />,
    });
};

export const partErrorNotification = () => {
    notifications.show({
        title: "Unable to create part",
        message: "Part name already in use",
        color: "red",
        icon: <AiOutlineExclamation size={24} />,
    });
};

export const statusErrorNotification = () => {
    notifications.show({
        title: "Unable to update status",
        message: "You don't have the permission to perform this action",
        color: "red",
        icon: <AiOutlineExclamation size={24} />,
    });
};

export const statusError2Notification = () => {
    notifications.show({
        title: "Unable to update status",
        message: "You can't update the status of this card",
        color: "red",
        icon: <AiOutlineExclamation size={24} />,
    });
};

export const deleteErrorNotification = (message: string) => {
    notifications.show({
        title: "Unable to delete",
        message: message,
        color: "red",
        icon: <AiOutlineExclamation size={24} />,
    });
};

export const createErrorNotification = () => {
    notifications.show({
        title: "Unable to create",
        message: "An error occured, please try again",
        color: "red",
        icon: <AiOutlineExclamation size={24} />,
    });
};

export const editErrorNotification = () => {
    notifications.show({
        title: "Unable to edit",
        message: "An error occured, please try again",
        color: "red",
        icon: <AiOutlineExclamation size={24} />,
    });
};

export const approveErrorNotification = () => {
    notifications.show({
        title: "Unable to approve",
        message: "This card as already been approved",
        color: "red",
        icon: <AiOutlineExclamation size={24} />,
    });
};

export const rejectErrorNotification = () => {
    notifications.show({
        title: "Unable to reject",
        message: "This card as already been approved",
        color: "red",
        icon: <AiOutlineExclamation size={24} />,
    });
};

export const editProfileErrorNotification = (message: string) => {
    notifications.show({
        title: "Unhautorized",
        message: message,
        color: "red",
        icon: <AiOutlineExclamation size={24} />,
    });
};

export const meetingErrorNotification = (message: string) => {
    notifications.show({
        title: "Unhautorized",
        message: message,
        color: "red",
        icon: <AiOutlineExclamation size={24} />,
    });
};

export const fileUploadErrorNotification = (type: "js" | "image") => {
    notifications.show({
        title: "Upload error",
        message: type === "js" ? "The upload must be one JavaScript file" : "The upload must be one .png or.jpg file",
        color: "red",
        icon: <AiOutlineExclamation size={24} />,
    });
};

export const generatePreviewErrorNotification = (message: string) => {
    notifications.show({
        title: "Upload error",
        message: message,
        color: "red",
        icon: <AiOutlineExclamation size={24} />,
    });
};

export const PLDGenerationErrorNotification = (message: string) => {
    notifications.show({
        title: "Generation error",
        message: message,
        color: "red",
        icon: <AiOutlineExclamation size={24} />,
    });
};

export const selectSprintErrorNotification = (message: string) => {
    notifications.show({
        title: "Select error",
        message: message,
        color: "red",
        icon: <AiOutlineExclamation size={18} />,
    });
};

export const sprintCreatedErrorNotification = (message: string) => {
    notifications.show({
        title: "Sprint creation error",
        message: message,
        color: "red",
        icon: <AiOutlineExclamation size={18} />,
    });
};