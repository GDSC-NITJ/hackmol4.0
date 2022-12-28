import TrackAndPrices from "../components/TrackAndPrices"
import FAQ from "../components/FAQ"
import Announcement from "../components/Announcement"
import Footer from "../components/Footer"
import RuleCard from "../components/RulesCard"
import Schedule from "../components/Schedule"
import Sponsers from "../components/Sponsers"
import Judges from "../components/Judges"


export default function Home() {
  return (
    <div className='' >
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
      <Judges/>
      {/* Judges section ends */}

      {/* Tracks And Prices starts */}
      <TrackAndPrices />
      {/* Tracks And Prices end */}

      {/*FAQ and footer starts*/}
      <Sponsers></Sponsers>
      <FAQ></FAQ>
      <Footer></Footer>

      {/*FAQ and footer ends*/}
    </div>
  );
}
