import React from "react";

import { BsCheck2 } from "react-icons/bs";

import { showNotification } from "@mantine/notifications";

export const userCreatedNotification = () => {
    showNotification({
        title: "User created",
        message: "A mail has been sent to the user with a temporary password",
        color: "green",
        icon: <BsCheck2 size={18} />,
    });
};

export const userModifiedNotification = () => {
    showNotification({
        title: "User modified",
        message: "User informations modified with success",
        color: "green",
        icon: <BsCheck2 size={18} />,
    });
};

export const forgotPasswordNotification = () => {
    showNotification({
        title: "Password recover",
        message: "A mail has been sent to the user with a temporary password",
        color: "green",
        icon: <BsCheck2 size={18} />,
    });
};

export const partCreatedNotification = () => {
    showNotification({
        title: "Part created",
        message: "A new part has been added to WAP",
        color: "green",
        icon: <BsCheck2 size={18} />,
    });
};

export const cacheRefreshedNotification = () => {
    showNotification({
        title: "API cache refreshed",
        message: "API cache refresh with success !",
        color: "green",
        icon: <BsCheck2 size={18} />,
    });
};

export const configNotification = () => {
    showNotification({
        title: "Config edited",
        message: "New config has been saved !",
        color: "green",
        icon: <BsCheck2 size={18} />,
    });
};

export const createdCardNotification = () => {
    showNotification({
        title: "Card created",
        message: "Card successfully added to your collection !",
        color: "green",
        icon: <BsCheck2 size={18} />,
    });
};

export const editCardNotification = () => {
    showNotification({
        title: "Card edited",
        message: "Card successfully edited !",
        color: "green",
        icon: <BsCheck2 size={18} />,
    });
};

export const deleteCardNotification = () => {
    showNotification({
        title: "Card deleted",
        message: "Card successfully deleted from your collection",
        color: "green",
        icon: <BsCheck2 size={18} />,
    });
};