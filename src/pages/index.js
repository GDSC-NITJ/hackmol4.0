import RuleCard from "../components/RuleCard"
import TrackAndPrices from "../components/TrackAndPrices"
import TrackCard from "../components/TrackCard"
export default function Home() {
  return (
    <div className='bg-slate-500  ' >
     {/* rule section */}
      <div className="flex" >

      <RuleCard title={"Rule1"} description="text des" />
      <RuleCard title={"Rule2"} description="text des" />
      
      </div>
     {/* rule section end */}


      <div className="flex w-auto">
      <div>

      <TrackAndPrices />
      <TrackAndPrices />
      <TrackAndPrices />
          </div>
      <div className="flex items-center border-2 ">
      <h1 className="text-5xl rotate-90">TrackAndPrices</h1>
      </div>
      </div>


    </div>
  )
}
