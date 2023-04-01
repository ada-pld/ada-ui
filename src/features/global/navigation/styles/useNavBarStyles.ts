import { createStyles, getStylesRef } from "@mantine/core";

export const useNavBarStyles = createStyles((theme, _params) => {
    const icon = getStylesRef('icon');

    return {
        navbar: {
            background: theme.colorScheme === 'dark' ? `linear-gradient(${theme.colors.dark[6]}, ${theme.colors.dark[7]})` : `linear-gradient(rgb(248, 248, 248), #fff)`,
        },

        title: {
            textTransform: 'uppercase',
            letterSpacing: -0.25,
        },

        link: {
            ...theme.fn.focusStyles(),
            display: 'flex',
            alignItems: 'center',
            textDecoration: 'none',
            fontSize: theme.fontSizes.sm,
            color: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[7],
            padding: 5,
            marginTop: 5,
            marginLeft: 5,
            borderRadius: theme.radius.sm,
            fontWeight: 500,

            '&:hover': {
                color: theme.colorScheme === 'dark' ? theme.white : theme.black,

                [`& .${icon}`]: {
                color: theme.colorScheme === 'dark' ? theme.white : theme.black,
                },
            },
        },

        linkIcon: {
            ref: icon,
            color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[6],
        },

        iconGroup: {
            marginRight: theme.spacing.sm,
            borderRadius: 6,
            padding: 5,
        },

        linkActive: {
            '&, &:hover': {
                color: theme.colorScheme === 'dark' ? theme.colors.violet[3] : theme.colors.violet[7],
                [`& .${icon}`]: {
                    color: "#fff",
                },
            },
        },

        iconGroupActive: {
            '&, &:hover': {
                backgroundColor: theme.colors.violet[7],
                boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
            },
        },

        footer: {
            paddingTop: 10,
        },
    };
});