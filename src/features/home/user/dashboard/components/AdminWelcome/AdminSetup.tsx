import { Anchor, Stepper, Text, Title } from "@mantine/core";

import { useSetupStyle } from "../../styles/useSetupStyle";

import { HiOutlineCog6Tooth } from "react-icons/hi2"
import { FiUsers, FiCheckSquare } from "react-icons/fi";
import { BsCalendar2Week } from "react-icons/bs"

interface Props {
    configSetup: boolean;
    userSetup: boolean;
    partSetup: boolean;
    sprintsSetup: boolean;
}

const AdminSetup: React.FC<Props> = ({ configSetup, userSetup, partSetup, sprintsSetup }) => {
    const { classes } = useSetupStyle();
    
    const active = (sprintsSetup ? 4 : partSetup ? 3 : userSetup ? 2 : configSetup ? 1 : 0);

    return (
        <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
            <Title className={classes.title}>Setup <span className={classes.span}>Roadmap</span></Title>
            <Stepper active={active} allowNextStepsSelect={false} radius={"md"} size="xl" breakpoint={"xl"} mt={40} completedIcon={<FiCheckSquare size={"1.6rem"} />}>
                <Stepper.Step
                    state="stepCompleted"
                    icon={<HiOutlineCog6Tooth size="1.6rem" />}
                    label={<Text size={"md"} weight={"bold"}>Config</Text>}
                    description={<Text size={"sm"}><Anchor href="/home/admin/config">Configure </Anchor>your instance</Text>}
                />
                <Stepper.Step
                    state="stepCompleted"
                    icon={<FiUsers size="1.4rem" />}
                    label={<Text size={"md"} weight={"bold"}>Users</Text>}
                    description={<Text size={"sm"}>Create your team <Anchor href="/home/editor/users">users</Anchor></Text>}
                />
                <Stepper.Step
                    state="stepInactive"
                    icon={<FiUsers size="1.4rem" />}
                    label={<Text size={"md"} weight={"bold"}>Parts</Text>}
                    description={<Text size={"sm"}>Create your project <Anchor href="/home/editor/parts">parts</Anchor></Text>   }
                />
                <Stepper.Step
                    state="stepInactive"
                    icon={<BsCalendar2Week size="1.4rem" />}
                    label={<Text size={"md"} weight={"bold"}>Sprint</Text>}
                    description={<Text size={"sm"}>Create your first <Anchor href="/home/editor/sprints">sprint</Anchor></Text>}
                />
            </Stepper>
        </div>
    );
}

export default AdminSetup;
