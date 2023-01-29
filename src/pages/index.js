import TrackAndPrices from '../components/Prizes/TrackAndPrices'
import FAQ from '../components/FAQ/FAQ'
import NavBar from '../components/Hero/Navbar'
import About from '../components/About/About'
import Banner from '../components/Hero/Banner'
import Banner2 from '../components/Hero/Banner2'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer/Footer'
import FooterLinks from '../components/Footer/FooterLinks'
import Schedule from '../components/Timeline/Schedule'
import Sponsers from '../components/Sponsers/Sponsers'
import Judges from '../components/Judges/Judges'
import Testimonies from '../components/Testimonies'
import Head from 'next/head'
import RulesNew from '../components/Rules/RulesNew'
import TimeLine from '../components/Timeline/TimeLine'
import Collaborators from '../components/Sponsers/Collaborators'
import Team from '../components/Team'
import { useEffect, useState } from 'react'
import MarqueeHack from '../components/Hero/MarqueeHack'
import Tracks from '../components/ProblemStatements/Tracks'
import TimeLine2 from '../components/Timeline/TimeLine2'
import PastYearStats from '../components/PastYearStats'
import Script from 'next/script'
import Merch from '../components/About/Merch'

export default function Home() {

  return (
    <div className=''>
       <Script src="https://apply.devfolio.co/v2/sdk.js" defer async  ></Script>
      {/* <MarqueeHack /> */}
      <Head>
        <title>HackMOL4.0</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>

      <NavBar />
      <Banner />
      {/* <Banner2 /> */}
      <About />
      <Merch />

      {/* <Schedule /> */}
      {/* <TimeLine /> */}
      {/* <TimeLine2/> */}

      {/* <Announcement /> */}
      <TrackAndPrices />

      <Tracks/>
      
      {/* <RulesNew /> */}
      {/* <Team /> */}

      <Sponsers/>
      <Collaborators />
      <PastYearStats></PastYearStats>
      <Judges />

      {/* <Testimonies/> */}
      <FAQ></FAQ>
      <Footer></Footer>
      <FooterLinks></FooterLinks>
    </div>
  )
}
