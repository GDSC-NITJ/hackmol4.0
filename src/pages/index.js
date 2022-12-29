<<<<<<< HEAD
import TrackAndPrices from "../components/TrackAndPrices";
import FAQ from "../components/FAQ";

import Announcement from "../components/Announcement";

import Footer from "../components/Footer";

import RuleCard from "../components/RulesCard";
import Sponsers from "../components/Sponsers";
import Testimony from "../components/Testimony";
=======
import TrackAndPrices from "../components/TrackAndPrices"
import FAQ from "../components/FAQ"
import NavBar from "../components/NavBar"
import About from "../components/About"
import Banner from "../components/Banner"
import Announcement from "../components/Announcement"
import Footer from "../components/Footer"
import RuleCard from "../components/RulesCard"
import Schedule from "../components/Schedule"
import Sponsers from "../components/Sponsers"
import Judges from "../components/Judges"
import Testimonies from "../components/Testimonies";
>>>>>>> c8b05d06e35e5c81a977532a2068606b4e0b4ab0

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
      <Judges/>
      {/* Judges section ends */}

      {/* Tracks And Prices starts */}
      <TrackAndPrices />
      {/* Tracks And Prices end */}

      {/*FAQ and footer starts*/}
      <Sponsers></Sponsers>
<<<<<<< HEAD
      <Testimony></Testimony>
=======
      <Testimonies/>
>>>>>>> c8b05d06e35e5c81a977532a2068606b4e0b4ab0
      <FAQ></FAQ>
      <Footer></Footer>

      {/*FAQ and footer ends*/}
    </div>
  );
}
