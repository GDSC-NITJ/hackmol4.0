// _dovument.js nextjs
import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {

        return (
            <Html lang="en" style={{scrollBehavior:'smooth'}}>
                <Head>
                    
                    <meta charSet="utf-8" />
                    <meta name="theme-color" content="#000000" />

                    {/* HTML Meta Tags */}
                    <meta name="title" content="HackMOL 4.0"></meta>
                    <meta name="name" content="HackMOL 4.0"></meta>
                    <meta name="description" content="HackMOL 4.0 is a 36 hour hackathon organized by the Google Developer Student Clubs from Dr B R Ambedkar National Institute of Technology, Jalandhar."></meta>
                    {/* <meta name='image' content='https://hackmol4.tech/og.png'></meta> */}

                    {/* Google / Search Engine Tags */}
                    <meta itemProp="name" content="HackMOL 4.0"></meta>
                    <meta itemProp="description" content="HackMOL 4.0 is a 36 hour hackathon organized by the Google Developer Student Clubs from Dr B R Ambedkar National Institute of Technology, Jalandhar."></meta>
                    {/* <meta itemProp="image" content="https://hackmol4.tech/og.png"></meta> */}

                    {/* Facebook Meta Tags */}
                    <meta property="og:title" content="HackMOL 4.0" />
                    <meta property="og:description" content="HackMOL 4.0 is a 36 hour hackathon organized by the Google Developer Student Clubs from Dr B R Ambedkar National Institute of Technology, Jalandhar." />
                    <meta property="og:url" content="https://hackmol4.tech" />
                    {/* <meta property="og:image" content="https://hackmol4.tech/og.png" /> */}
                    <meta property="og:type" content="website" />
                    <meta property="og:site_name" content="HackMOL 4.0" />

                    {/* Twitter Meta Tags */}
                    {/* <meta name="twitter:card" content="summary_large_image" /> */}
                    <meta name="twitter:title" content="HackMOL 4.0" />
                    <meta name="twitter:description" content="HackMOL 4.0 is a 36 hour hackathon organized by the Google Developer Student Clubs from Dr B R Ambedkar National Institute of Technology, Jalandhar." />
                    {/* <meta name="twitter:image" content="https://hackmol4.tech/og.png" /> */}
                    <meta name="twitter:site" content="@hackmol" />
                    <meta name="twitter:url" content="https://hackmol4.tech" />
                    <meta name="twitter:domain" content="https://hackmol4.tech" />
                    <meta name="twitter:app:name:iphone" content="HackMOL 4.0" />
                    <meta name="twitter:app:name:ipad" content="HackMOL 4.0" />

                </Head>

                <body style={{scrollBehavior:'smooth'}}/>



                <Main />
                <NextScript />
       <Script src="https://apply.devfolio.co/v2/sdk.js" strategy="beforeInteractive"  defer async   ></Script>

            </Html>
        )
    
}
