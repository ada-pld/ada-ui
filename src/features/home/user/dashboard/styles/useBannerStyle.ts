import { createStyles, rem } from "@mantine/core";

export const useBannerStyle = createStyles((theme) => ({
    container: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        paddingBottom: 20,
    },

    title: {
        fontWeight: 800,
        fontSize: rem(40),
        letterSpacing: rem(-1),
        color: theme.colorScheme === "dark" ? theme.colors.gray[4] : "black",
        marginBottom: theme.spacing.xs,
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,

        [theme.fn.smallerThan('xs')]: {
            fontSize: rem(28),
            textAlign: 'left',
        },

        [theme.fn.largerThan('lg')]: {
            marginTop: 50
        },
    },

    githubButton: {
        backgroundColor: '#333',
        border: 0,
        height: rem(42),
        '&:not([data-disabled])': theme.fn.hover({
            backgroundColor: theme.fn.darken('#333', 0.05),
        }),
    },

    discordButton: {
        backgroundColor: '#5865F2',
        border: 0,
        height: rem(42),
        '&:not([data-disabled])': theme.fn.hover({
            backgroundColor: theme.fn.darken('#5865F2', 0.05),
        }),
    },

    span: {
        color: theme.colorScheme === "dark" ? theme.colors.violet[8] : theme.colors.violet[4],
    },

    image: {
        [theme.fn.smallerThan('lg')]: {
            display: 'none',
        },
    },
}));