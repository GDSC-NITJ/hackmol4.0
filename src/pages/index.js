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
      <meta name="viewport" content="width=device-width, initial-scale=1" />

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
