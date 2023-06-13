import Link from "next/link";

import { Divider, Group } from "@mantine/core";

import { useNavBarStyles } from "../styles/useNavBarStyles";

import { userTabs, editorTabs, adminTabs } from "features/global/navigation/utils/links";

interface Props {
    active: string;
    userRole: string;
    onClose?: () => void;
}

const Navigationtabs: React.FC<Props> = ({active, userRole, onClose}) => {
    const { classes, cx } = useNavBarStyles();

    const userNav = userTabs.map((item) => (
        <Link
            className={cx(classes.link, { [classes.linkActive]: item.link === active })}
            href={item.link}
            onClick={onClose && (() => onClose())}
            key={item.label}
            id={item.id}
        >
            <Group className={cx(classes.iconGroup, { [classes.iconGroupActive]: item.link === active })}>
                <item.icon size={18} className={classes.linkIcon} />
            </Group>
            <span>{item.label}</span>
        </Link>
    ));

    const editorNav = editorTabs.map((item) => (
        <Link
            className={cx(classes.link, { [classes.linkActive]: item.link === active })}
            href={item.link}
            onClick={onClose && (() => onClose())}
            key={item.label}
            id={item.id}
        >
            <Group className={cx(classes.iconGroup, { [classes.iconGroupActive]: item.link === active })}>
                <item.icon size={18} className={classes.linkIcon} />
            </Group>
            <span>{item.label}</span>
        </Link>
    ));

    const adminNav = adminTabs.map((item) => (
        <Link
            className={cx(classes.link, { [classes.linkActive]: item.link === active })}
            href={item.link}
            onClick={onClose && (() => onClose())}
            key={item.label}
            id={item.id}
        >
            <Group className={cx(classes.iconGroup, { [classes.iconGroupActive]: item.link === active })}>
                <item.icon size={18} className={classes.linkIcon} />
            </Group>
            <span>{item.label}</span>
        </Link>
    ));

    return (
        <>
            {userNav}
            {(userRole === "2" || userRole === "3") &&
                <>
                    <Divider mt={10} />
                    <div style={{marginTop: 10}}>{editorNav}</div>
                </>
            }
            {userRole === "3" &&
                <>
                    <Divider mt={10} />
                    <div style={{marginTop: 10}}>{adminNav}</div>
                </>
            }
        </>
    );
}

export default Navigationtabs;