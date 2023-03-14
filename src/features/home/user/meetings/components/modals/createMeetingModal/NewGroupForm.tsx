import React, { useRef } from "react";

import { ActionIcon, ColorInput, Group, TextInput } from "@mantine/core";
import { UseFormReturnType } from "@mantine/form";

import { SlRefresh } from "react-icons/sl";
import { TimeInput } from "@mantine/dates";

interface Props {
    form: UseFormReturnType<any>;
    isNewGroup: boolean;
}

function random_rgba() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}

const NewGroupForm: React.FC<Props> = ({ form, isNewGroup }) => {
    return (
        <React.Fragment>
            <Group position="center" grow mt={10}>
                <TextInput required={isNewGroup} label="Group name" placeholder="Group name" {...form.getInputProps('groupName')} />
                <TimeInput
                    label="Group meetings duration"
                    required={isNewGroup}
                    maw={400}
                    mx="auto"
                    {...form.getInputProps('duration')}
                />
            </Group>
            <Group position="center" grow mt={10}>
                <ColorInput
                    placeholder="Pick color"
                    label="Group color"
                    format="rgba"
                    required={isNewGroup}
                    rightSection={
                        <ActionIcon onClick={() => form.setValues({groupColor: random_rgba()})}>
                            <SlRefresh size="1rem" />
                        </ActionIcon>
                    }
                    {...form.getInputProps('groupColor')}
                />
                <TextInput required={isNewGroup} label="Location" placeholder="Discord" {...form.getInputProps('location')} />
            </Group>
        </React.Fragment>
    );
}

export default NewGroupForm;