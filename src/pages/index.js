import TrackAndPrices from '../components/TrackAndPrices'
import FAQ from '../components/FAQ'
import NavBar from '../components/NavBar'
import About from '../components/About'
import Banner from '../components/Banner'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import FooterLinks from '../components/FooterLinks'
// import RuleCard from "../components/RulesCard"
import Schedule from '../components/Schedule'
import Sponsers from '../components/Sponsers'
import Judges from '../components/Judges'
import Testimonies from '../components/Testimonies'
import TrackMobile from '../components/TrackMobile'
import Head from 'next/head'
import RulesNew from '../components/RulesNew'
import TimeLine from '../components/TimeLine'
import Collaborators from '../components/Collaborators'
import Team from '../components/Team'
import { useEffect, useState } from 'react'
import MarqueeHack from '../components/MarqueeHack'
import Tracks from '../components/Tracks'

export default function Home() {
  //   const [hidden , setHidden] = useState(true)

  //  const showAnnoun = ( )=>{
  //   setTimeout(() => {
  //     setHidden(false)
  //   }, 1000);

  //  }

  //   useEffect(() => {
  //     showAnnoun()
  //   },[])

  return (
    <div className=''>
      <MarqueeHack />
      <Head>
        <title>HackMOL4.0</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>

      <NavBar />
      <Banner />
      <About />

      <Schedule />
      {/* <TimeLine /> */}

      <Announcement />

      <Tracks/>
      <TrackAndPrices />
      <RulesNew />
      {/* <Team /> */}

      {/* <Sponssers/> */}

      <Collaborators />
      <Judges />

      {/* <Testimonies/> */}
      <FAQ></FAQ>
      <Footer></Footer>
      <FooterLinks></FooterLinks>
    </div>
  )
}
