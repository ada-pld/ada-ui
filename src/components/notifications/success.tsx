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