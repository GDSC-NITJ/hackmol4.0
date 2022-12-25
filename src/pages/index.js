import RuleCard from "../components/RuleCard"
import FAQ from "../components/FAQ"


export default function Home() {
  return (
    <div className='' >
      hello world
     {/* rule section */}
      <div className="flex" >

      <RuleCard title={"Rule1"} description="text des" />
      <RuleCard title={"Rule2"} description="text des" />
      </div>

     {/* rule section end */}

    {/* {FAQ Section Starts} - Managed by Aditya - Junior*/}
    <FAQ></FAQ>

    </div>

  )
}
