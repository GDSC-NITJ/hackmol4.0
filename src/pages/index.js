import RuleCard from "../components/RuleCard"


export default function Home() {
  return (
    <div className='bg-slate-500  ' >
      hello world
     {/* rule section */}
      <div className="flex" >

      <RuleCard title={"Rule1"} description="text des" />
      <RuleCard title={"Rule2"} description="text des" />
      </div>

     {/* rule section end */}


    </div>
  )
}
