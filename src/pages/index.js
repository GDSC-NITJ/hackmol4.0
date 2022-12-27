
import TrackAndPrices from "../components/TrackAndPrices"
import FAQ from "../components/FAQ"
import RuleCard from "../components/RulesCard"

export default function Home() {
  return (
    <div className='' >
     {/* rule section */}
      <RuleCard/>
     {/* rule section end */}




     {/* Tracks And Prices starts */}
 
        

    <TrackAndPrices title="" description=""/>
       
  

     {/* Tracks And Prices end */}


    {/* {FAQ Section Starts} - Managed by Aditya - Junior*/}
    <FAQ></FAQ>
    </div>

  )
}
