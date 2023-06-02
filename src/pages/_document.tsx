import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang="en">
        <Head>
            <link rel="icon" href="/favicon.ico" sizes="any" />
            <meta name="robots" content="noindex, nofollow" />
        </Head>
        <body>
            <Main />
            <NextScript />
        </body>
        </Html>
    )
}
