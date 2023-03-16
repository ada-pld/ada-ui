import React from "react";

import { Group, TextInput } from "@mantine/core";
import { UseFormReturnType } from "@mantine/form";

import { TimeInput } from "@mantine/dates";

interface Props {
    form: UseFormReturnType<any>;
    isNewGroup: boolean;
}

const ExistingGroupForm: React.FC<Props> = ({ form, isNewGroup }) => {
    return (
        <React.Fragment>
            <Group position="center" grow mt={10}>
                <TimeInput
                    label="Meeting duration"
                    required={!isNewGroup}
                    maw={400}
                    mx="auto"
                    {...form.getInputProps('duration')}
                />
                <TextInput required={!isNewGroup} label="Location" placeholder="Discord" {...form.getInputProps('location')} />
            </Group>
        </React.Fragment>
    );
}

export default ExistingGroupForm;