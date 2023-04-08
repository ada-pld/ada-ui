import {
    Title,
    Text,
    Group,
    Button,
} from '@mantine/core';

import Image from 'next/image';

import { BsDiscord } from 'react-icons/bs';

import TeamWork from "assets/images/TeamWork.svg"
import { useBannerStyle } from '../../styles/useBannerStyle';
import { FiGithub } from 'react-icons/fi';

export function Banner() {
    const { classes } = useBannerStyle();

    return (
        <div className={classes.container}>
            <div>
                <Title className={classes.title}>Welcome on <span className={classes.span}>ADA</span></Title>
                <div>
                    <Text color="dimmed" mt="md" className={classes.text}>
                        Ada aims to simplify this process through the creation of sprints, parts, and user stories. <br /> You can also schedule appointments and automatically generate PLDs.
                    </Text>
                    <Text color="dimmed" mt="md" className={classes.text}>
                    Many features will be regularly added to Ada to evolve and become a project tracking tool for EIP projects.
                    </Text>
                </div>
                <Group position="left" spacing="lg" mt={30} pl={"md"}>
                    <Button 
                        size={'md'}
                        className={classes.githubButton}
                        leftIcon={<FiGithub size="1rem" color={"white"} />}
                        radius={"md"}
                        component="a"
                        target="_blank"
                        href="https://github.com/protoxvga/ada_ui"
                    >
                        Contribute
                    </Button>
                    <Button
                        size={'md'}
                        className={classes.discordButton}
                        leftIcon={<BsDiscord size="1rem" color={"white"} />}
                        radius={"md"}
                        component="a"
                        target="_blank"
                        href="https://discord.gg/yxUVPHFng6"
                    >
                        Join the community
                    </Button>
                </Group>
            </div>
            <div style={{width: "100%", height: "100%", backgroundColor: "red"}}>
                <Image
                    src={TeamWork}
                    alt='Team work illustration'
                    className={classes.image}
                    fill
                    priority
                />
            </div>
        </div>
    );
}

export default Banner;