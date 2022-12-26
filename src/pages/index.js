import RuleCard from "../components/RuleCard"
import TrackAndPrices from "../components/TrackAndPrices"
import FAQ from "../components/FAQ"

export default function Home() {
  return (
    <div className='' >
     {/* rule section */}
      <div className="flex" >

      <RuleCard title={"Rule1"} description="text des" />
      <RuleCard title={"Rule2"} description="text des" />
      
      </div>
     {/* rule section end */}




     {/* Tracks And Prices starts */}
 
        

    <TrackAndPrices title="" description=""/>
       
  

     {/* Tracks And Prices end */}


    {/* {FAQ Section Starts} - Managed by Aditya - Junior*/}
    <FAQ></FAQ>
    </div>

  )
}
