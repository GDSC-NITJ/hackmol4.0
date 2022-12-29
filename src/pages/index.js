import TrackAndPrices from "../components/TrackAndPrices"
import FAQ from "../components/FAQ"
import NavBar from "../components/NavBar"
import About from "../components/About"
import Banner from "../components/Banner"
import Announcement from "../components/Announcement"
import Footer from "../components/Footer"
import FooterLinks from "../components/FooterLinks"
import RuleCard from "../components/RulesCard"
import Schedule from "../components/Schedule"
import Sponsers from "../components/Sponsers"
import Judges from "../components/Judges"
import Testimonies from "../components/Testimonies";

export default function Home() {
  return (
    <div className='' >
      {/* <NavBar/> */}
      {/* <Banner/> */}
      <About/>

        <Schedule/>



      <Announcement />

      {/* <RuleCard /> */}

      <Sponsers/>
     
      <div className="hidden sm:block">
        <TrackAndPrices  />
      </div>
      {/* <Judges /> */}
      <Testimonies/>
      <FAQ></FAQ>
      {/* <Footer></Footer> */}
      {/* <FooterLinks></FooterLinks> */}

    </div>
  );
}
