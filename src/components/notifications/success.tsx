import React from "react";

import { BsCheck2 } from "react-icons/bs";

import { notifications } from '@mantine/notifications';

export const userCreatedNotification = () => {
    notifications.show({
        title: "User created",
        message: "A mail has been sent to the user with a temporary password",
        color: "green",
        icon: <BsCheck2 size={18} />,
    });
};

export const adminCreatedNotification = () => {
    notifications.show({
        title: "Admin created",
        message: "Your account has been created, please login",
        color: "green",
        icon: <BsCheck2 size={18} />,
    });
};

export const userModifiedNotification = () => {
    notifications.show({
        title: "User modified",
        message: "User informations modified with success",
        color: "green",
        icon: <BsCheck2 size={18} />,
    });
};

export const forgotPasswordNotification = () => {
    notifications.show({
        title: "Password recover",
        message: "A mail has been sent to the user with a temporary password",
        color: "green",
        icon: <BsCheck2 size={18} />,
    });
};

export const partCreatedNotification = () => {
    notifications.show({
        title: "Part created",
        message: "A new part has been added to WAP",
        color: "green",
        icon: <BsCheck2 size={18} />,
    });
};

export const cacheRefreshedNotification = () => {
    notifications.show({
        title: "API cache refreshed",
        message: "API cache refresh with success !",
        color: "green",
        icon: <BsCheck2 size={18} />,
    });
};

export const configNotification = () => {
    notifications.show({
        title: "Config edited",
        message: "New config has been saved !",
        color: "green",
        icon: <BsCheck2 size={18} />,
    });
};

export const createdCardNotification = () => {
    notifications.show({
        title: "Card created",
        message: "Card successfully added to your collection !",
        color: "green",
        icon: <BsCheck2 size={18} />,
    });
};

export const editCardNotification = () => {
    notifications.show({
        title: "Card edited",
        message: "Card successfully edited !",
        color: "green",
        icon: <BsCheck2 size={18} />,
    });
};

export const deleteCardNotification = () => {
    notifications.show({
        title: "Card deleted",
        message: "Card successfully deleted from your collection",
        color: "green",
        icon: <BsCheck2 size={18} />,
    });
};

export const approveCardNotification = () => {
    notifications.show({
        title: "Card approved",
        message: "Card successfully approved !",
        color: "green",
        icon: <BsCheck2 size={18} />,
    });
};

export const rejectCardNotification = () => {
    notifications.show({
        title: "Card rejected",
        message: "Card successfully rejected !",
        color: "green",
        icon: <BsCheck2 size={18} />,
    });
};

export const editProfileNotification = () => {
    notifications.show({
        title: "Success",
        message: "Profile updated !",
        color: "green",
        icon: <BsCheck2 size={18} />,
    });
};

export const meetingCreatedNotification = () => {
    notifications.show({
        title: "Meeting created",
        message: "A new meeting has been created",
        color: "green",
        icon: <BsCheck2 size={18} />,
    });
};

export const meetingEditedNotification = () => {
    notifications.show({
        title: "Meeting edited",
        message: "The meeting has been edited",
        color: "green",
        icon: <BsCheck2 size={18} />,
    });
};

export const deleteMeetingNotification = () => {
    notifications.show({
        title: "Meeting deleted",
        message: "The meeting has been deleted",
        color: "green",
        icon: <BsCheck2 size={18} />,
    });
};

export const meetingValidatedNotification = () => {
    notifications.show({
        title: "Meeting Validated",
        message: "The meeting has been validated",
        color: "green",
        icon: <BsCheck2 size={18} />,
    });
};

export const fileUploadNotification = () => {
    notifications.show({
        title: "Success",
        message: "New PLD generator upladed",
        color: "green",
        icon: <BsCheck2 size={18} />,
    });
};

export const imageUploadNotification = (fileName: string) => {
    notifications.show({
        title: "Success",
        message: `New image for ${fileName} successfully uploaded`,
        color: "green",
        icon: <BsCheck2 size={18} />,
    });
};

export const generatePreviewNotification = () => {
    notifications.show({
        title: "Success",
        message: `Preview PLD succesfully generated`,
        color: "green",
        icon: <BsCheck2 size={18} />,
    });
};

export const PLDGenerationNotification = () => {
    notifications.show({
        title: "Success",
        message: `PLD successfully generated`,
        color: "green",
        icon: <BsCheck2 size={18} />,
    });
};