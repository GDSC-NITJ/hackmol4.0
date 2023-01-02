import TrackAndPrices from "../components/TrackAndPrices"
import FAQ from "../components/FAQ"
import NavBar from "../components/NavBar"
import About from "../components/About"
import Banner from "../components/Banner"
import Announcement from "../components/Announcement"
import Footer from "../components/Footer"
import FooterLinks from "../components/FooterLinks"
// import RuleCard from "../components/RulesCard"
import Schedule from "../components/Schedule"
import Sponsers from "../components/Sponsers"
import Judges from "../components/Judges"
import Testimonies from "../components/Testimonies";
import TrackMobile from "../components/TrackMobile"
import Head from "next/head"
import RulesNew from "../components/RulesNew"




export default function Home() {
  return (
    <div className='' >
      <Head>
        <title>HackMOL4.0</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        
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

      <NavBar/>
      <Banner/>
      <About/>

        <Schedule/>



      <Announcement />

      {/* <RuleCard /> */}
      <RulesNew/>

      <Sponsers/>
     
      <div className="hidden sm:block">
        <TrackAndPrices  />
      </div>
      <div className="sm:hidden block">
        <TrackMobile  />
      </div>

      <Judges />

      <Testimonies/>
      <FAQ></FAQ>
      <Footer></Footer>
      <FooterLinks></FooterLinks>

    </div>
  );
}
