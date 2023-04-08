import { createStyles, rem } from "@mantine/core";

export const useBannerStyle = createStyles((theme) => ({
    container: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
    },

    title: {
        fontWeight: 800,
        marginTop: 50,
        fontSize: rem(40),
        letterSpacing: rem(-1),
        color: theme.colorScheme === "dark" ? theme.colors.gray[4] : "black",
        paddingLeft: theme.spacing.md,
        paddingRight: theme.spacing.md,
        marginBottom: theme.spacing.xs,
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,

        [theme.fn.smallerThan('xs')]: {
            fontSize: rem(28),
            textAlign: 'left',
        },
    },

    githubButton: {
        backgroundColor: '#333',
        border: 0,
        height: rem(42),
        paddingLeft: rem(20),
        paddingRight: rem(20),
        '&:not([data-disabled])': theme.fn.hover({
            backgroundColor: theme.fn.darken('#333', 0.05),
        }),
    },

    discordButton: {
        backgroundColor: '#5865F2',
        border: 0,
        height: rem(42),
        paddingLeft: rem(20),
        paddingRight: rem(20),
        '&:not([data-disabled])': theme.fn.hover({
            backgroundColor: theme.fn.darken('#5865F2', 0.05),
        }),
    },

    text: {
        paddingLeft: theme.spacing.md,
        paddingRight: theme.spacing.md,
    },

    span: {
        color: theme.colorScheme === "dark" ? theme.colors.violet[4] : theme.colors.violet[6],
    },

    image: {
        width: "80%",
        minWidth: 450,
        [theme.fn.smallerThan('lg')]: {
            display: 'none',
        },
    },
}));