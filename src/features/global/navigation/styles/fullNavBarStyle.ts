import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme, _params, getRef) => {
    const icon = getRef('icon');

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
            color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[7],
            padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,
            borderRadius: theme.radius.sm,
            fontWeight: 500,
            marginTop: 5,

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
            marginRight: theme.spacing.sm,
        },

        linkActive: {
            '&, &:hover': {
                color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
                [`& .${icon}`]: {
                color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
                },
            },
        },

        footer: {
            paddingTop: 10,
        },
    };
});