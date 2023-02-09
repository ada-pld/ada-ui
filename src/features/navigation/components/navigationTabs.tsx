import { AiOutlineDashboard, AiOutlineUser } from "react-icons/ai";
import { RxCardStack, RxComponent2 } from "react-icons/rx";
import { MdOutlineCallToAction } from "react-icons/md";
import { HiOutlineDocumentText } from "react-icons/hi";
import { FiUsers } from "react-icons/fi";

import Link from "next/link";

import { Divider } from "@mantine/core";

import { useStyles } from "../styles/navigationStyle";

const adminTabs = [
    { link: '/parts', label: 'Parts', icon: RxComponent2 },
    { link: '/pld', label: 'PLD', icon: HiOutlineDocumentText },
    { link: '/users', label: 'Users', icon: FiUsers },
];

const userTabs = [
    { link: '/dashboard', label: 'Dashboard', icon: AiOutlineDashboard },
    { link: '/mycards', label: 'My cards', icon: RxCardStack },
    { link: '/meetings', label: 'Meetings', icon: MdOutlineCallToAction },
    { link: '/profile', label: 'Profile', icon: AiOutlineUser },
];

interface Props {
    active: string;
}

const Navigationtabs: React.FC<Props> = ({active}) => {
    const { classes, cx } = useStyles();

    const links = userTabs.map((item) => (
        <Link
            className={cx(classes.link, { [classes.linkActive]: item.label === active })}
            href={item.link}
            key={item.label}
        >
            <item.icon size={18} className={classes.linkIcon} />
            <span>{item.label}</span>
        </Link>
    ));

    const links2 = adminTabs.map((item) => (
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
            {links}
            <Divider mt={10} mb={10} />
            {links2}
        </>
    );
}

export default Navigationtabs;