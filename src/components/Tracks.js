import React from 'react'

function Tracks() {


    const obj = [
        {
            img: '',
            title: "title 1",
            description: "sed1",
            tags:[
                'web','mobile','green technology', 'sustainable'
            ]
        },
        {
            img: '',
            title: "title2",
            description: "des2",
            tags:[
                'web','mobile','green technology', 'sustainable'
            ]
        },
    ]

  return (
    <div className='py-10 md:py-20 space-y-8  '>
    <h1 className='text-center  text-4xl font-bold'>Problem Statements</h1>
    <div className='flex w-full flex-wrap justify-center items-center gap-5 '>
      {/* card for diffreent problem statements mapping of obj  */}
     {
        obj.map((data,i)=>{
            return (
                <div key={i} className='border-2 border-black bg-white  w-11/12 md:w-[400px] flex flex-col   p-5  rounded-xl font-bold  '>
                <h3>
                    {data?.title}
                </h3>
                <div>
                    {data?.description}
                    </div>
                    <div>
                        <div>Popular Tags</div>
                        <div className='flex flex-wrap gap-2' >
                            {
                                data.tags.map((tag,j)=>{
                                    return <div key={j} className=' rounded-2xl border-2 border-black px-3 text-sm   ' >
                                        {tag}
                                    </div>
                                })
                            }
                        </div>
                        </div>
                </div>
            )
        })
     }
        
     
      <div className='border-2 border-black bg-white  w-11/12 md:w-[400px] flex flex-col justify-center items-center py-5 px-8 rounded-xl font-bold  '>

   

        <div className='text-lg  font-bold'>Prize Evaluation</div>
        <div className=' self-start p-1 ' >
          <p className=' font-bold'>- ₹ 30000 Amount</p>
          <p className=' font-bold'>- Premium Swags and Goodies Kit</p>
          <p className=' font-bold'>- Certificate of Participation</p>

          <p className=' font-bold'> - Pro Version Free for 12 months</p>
        </div>
      </div>
      
    </div>
  </div>
  )
}

export default Tracks