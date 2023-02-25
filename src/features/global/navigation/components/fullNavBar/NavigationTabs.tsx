import Link from "next/link";

import { Divider } from "@mantine/core";

import { useStyles } from "../../styles/fullNavBarStyle";

import { userTabs, editorTabs, adminTabs } from "features/global/navigation/utils/links";

interface Props {
    active: string;
    userRole: string;
}

const Navigationtabs: React.FC<Props> = ({active, userRole}) => {
    const { classes, cx } = useStyles();

    const userNav = userTabs.map((item) => (
        <Link
            className={cx(classes.link, { [classes.linkActive]: item.link === active })}
            href={item.link}
            key={item.label}
        >
            <item.icon size={18} className={classes.linkIcon} />
            <span>{item.label}</span>
        </Link>
    ));

    const editorNav = editorTabs.map((item) => (
        <Link
            className={cx(classes.link, { [classes.linkActive]: item.link === active })}
            href={item.link}
            key={item.label}
        >
            <item.icon size={18} className={classes.linkIcon} />
            <span>{item.label}</span>
        </Link>
    ));

    const adminNav = adminTabs.map((item) => (
        <Link
            className={cx(classes.link, { [classes.linkActive]: item.link === active })}
            href={item.link}
            key={item.label}
        >
            <item.icon size={20} className={classes.linkIcon} />
            <span>{item.label}</span>
        </Link>
    ));

    return (
        <>
            {userNav}
            <Divider mt={10} mb={10} />
            {(userRole === "2" || userRole === "3") &&
                <>
                    {editorNav}
                    <Divider mt={10} mb={10} />
                </>
            }
            {userRole === "3" &&
                <>
                    {adminNav}
                </>
            }
        </>
    );
}

export default Navigationtabs;