import { createStyles, rem } from "@mantine/core";

export const useSetupStyle = createStyles((theme) => ({
    title: {
        fontWeight: 800,
        marginTop: 50,
        textAlign: "center",
        fontSize: rem(40),
        letterSpacing: rem(-1),
        color: theme.colorScheme === "dark" ? theme.colors.gray[4] : "black",
        marginBottom: theme.spacing.xs,
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,

        [theme.fn.smallerThan('xs')]: {
            fontSize: rem(28),
            textAlign: 'left',
        },
    },

    span: {
        backgroundColor: theme.colorScheme === "dark" ? theme.colors.violet[8] : theme.colors.violet[1],
        borderRadius: 2,
        paddingLeft: 10,
        paddingRight: 10
    },
}));