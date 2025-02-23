import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link href="https://fonts.googleapis.com/css2?family=Goldman:wght@400;700&family=Vina+Sans&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"></link>     
        </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}