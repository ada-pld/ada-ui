import Link from "next/link";

import { Divider } from "@mantine/core";

import { useStyles } from "../../styles/fullNavBarStyle";

import { userTabs, adminTabs } from "features/navigation/utils/links";

interface Props {
    active: string;
}

const Navigationtabs: React.FC<Props> = ({active}) => {
    const { classes, cx } = useStyles();

    const userNav = userTabs.map((item) => (
        <Link
            className={cx(classes.link, { [classes.linkActive]: item.label === active })}
            href={item.link}
            key={item.label}
        >
            <item.icon size={18} className={classes.linkIcon} />
            <span>{item.label}</span>
        </Link>
    ));

    const adminNav = adminTabs.map((item) => (
        <Link
            className={cx(classes.link, { [classes.linkActive]: item.label === active })}
            href={item.link}
            key={item.label}
        >
            <item.icon size={18} className={classes.linkIcon} />
            <span>{item.label}</span>
        </Link>
    ));

    return (
        <>
            {userNav}
            <Divider mt={10} mb={10} />
            {adminNav}
        </>
    );
}

export default Navigationtabs;