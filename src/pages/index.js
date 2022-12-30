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
      {/* Navigation starts */}
      <NavBar/>
      {/* navigation ends */}
      {/* Home starts */}
      <Banner/>
      {/* Home ends */}
      {/* About starts */}
      <About/>
      {/* Schedule starts */}

        <Schedule/>

      {/* Schedule ends */}

      {/* Announcement start */}

      <Announcement />

      {/* Announcement ends */}
      {/* rule section */}
      <RuleCard />
      {/* rule section end */}
      {/* Judges Section starts*/}
      {/* Judges section ends */}

      <Sponsers></Sponsers>
      {/* Tracks And Prices starts */}
      <TrackAndPrices />
      {/* Tracks And Prices end */}

      {/*FAQ and footer starts*/}

      <Sponsers></Sponsers>

      <Judges />

      <Testimonies/>
      <FAQ></FAQ>
      <Footer></Footer>
      <FooterLinks></FooterLinks>

      {/*FAQ and footer ends*/}
    </div>
  );
}
