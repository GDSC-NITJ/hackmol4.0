import RuleCard from "../components/RuleCard"
import TrackAndPrices from "../components/TrackAndPrices"

export default function Home() {
  return (
    <div className='bg-slate-500  ' >
     {/* rule section */}
      <div className="flex" >

      <RuleCard title={"Rule1"} description="text des" />
      <RuleCard title={"Rule2"} description="text des" />
      
      </div>
     {/* rule section end */}

     {/* Tracks And Prices start */}

      <div className="flex ">
        
          <TrackAndPrices title="" description=""/>
      </div>

     {/* Tracks And Prices end */}
    </div>

  )
}
