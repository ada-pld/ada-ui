import React, { useState } from "react";

import { Alert, Text } from "@mantine/core";

import { BiErrorCircle } from "react-icons/bi";
import { IoWarning } from "react-icons/io5";

interface Props {
    message: string;
    variant: "alert" | "warning";
}

const JoursAlert: React.FC<Props> = ({message, variant}) => {
    const [render, setRender] = useState(true);

    return render ? (
        <Alert withCloseButton onClose={() => setRender(false)} icon={variant === "alert" ? <BiErrorCircle size={30} /> : <IoWarning size={30} />} title={variant === "alert" ? "Alert" : "Warning"} color={variant === "alert" ? "red" : "orange"}>
            {message.split('\n').map((str, index) => (
                <React.Fragment key={index}>
                    <Text>{str}</Text>
                </React.Fragment>
            ))}
        </Alert>
    ) : <></>;
}

export default JoursAlert;