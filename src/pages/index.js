
import TrackAndPrices from "../components/TrackAndPrices"
import FAQ from "../components/FAQ"
import Announcement from "../components/Announcement"
export default function Home() {
  return (
    <div className='' >

      {/* Announcement start */}

      <Announcement/>


      {/* Announcement ends */}
     {/* rule section */}
     {/* rule section end */}

     {/* Tracks And Prices starts */}
    <TrackAndPrices />
     {/* Tracks And Prices end */}


    {/* {FAQ Section Starts} - Managed by Aditya - Junior*/}
    <FAQ></FAQ>
    </div>

  )
}
