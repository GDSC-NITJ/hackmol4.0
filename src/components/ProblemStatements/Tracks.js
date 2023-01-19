import React from 'react'




function Tracks() {


    const obj = [
        {
            img: '',
            title: "Tracking food waste for productive usage",
            description: "The objective is to find a way to keep track of food that would otherwise go to waste and redirect it to those who require it, such as individuals or organizations. The solution should be able to track the food waste and the effect it has on reducing hunger and food insecurity in the community, while also being environmentally friendly.",
            tags:[
                'web','mobile','green technology', 'sustainable'
            ],
            color: 'orange'
            
            
        },
        {
            img: '',
            title: "Collecting and reusing single-use plastics and industrial waste",
            description: "The problem statement is concerned with creating an effective system for gathering and repurposing single-use plastics and industrial waste, in order to decrease their environmental harm and find new uses for the materials",
            tags:[
                'web','mobile','green technology', 'sustainable'
            ],
            color: 'yellow'
            
        },
        {
            img: '',
            title: "Application to help small businesses sell their products",
            description: "The goal is to help these businesses expand their customer base, simplify their sales process, and boost their revenue by providing them with easy-to-use tools for listing, promoting, and managing their products, as well as tracking sales and processing orders and payments",
            tags:[
                'web','mobile','green technology', 'sustainable'
            ],
            color: '[#90A8ED]'
            
        },
        {
            img: '',
            title: "Elimination of industrial emissions",
            description: "Developing solutions to reduce industrial pollution, including harmful pollutants released from factories and power plants, to improve air quality and decrease negative effects on the environment and human health.",
            tags:[
                'web','mobile','green technology', 'sustainable'
            ],
            color: 'green'
            
        },
        {
            img: '',
            title: "Smart and sustainable supply chain",
            description: "Creating a smart and sustainable supply chain through the use of technology and sustainable practices. Optimizing efficiency, transparency and reducing environmental impact.",
            tags:[
                'web','mobile','green technology', 'sustainable'
            ],
            color: '[#D0A4FF]'
            
        },
        {
            img: '',
            title: "Application to track carbon emissions",
            description: "Problem statement is to create an application to track carbon emissions. The app would allow individuals and organizations to monitor their carbon footprint, and identify opportunities for reducing emissions.",
            tags:[
                'web','mobile','green technology', 'sustainable'
            ],
            color: 'orange'
            
        },
        {
            img: '',
            title: "Application to promote knowledge in green technology",
            description: "Creating an application to raise awareness and educate people about green technology, including sustainable practices, renewable energy and other environmentally-friendly technologies. ",
            tags:[
                'web','mobile','green technology', 'sustainable'
            ],
            color: 'yellow'
            
        },
        {
            img: '',
            title: "Softwares as well as hardware for helping green agriculture",
            description: "The problem statement is to create software and hardware solutions for improving efficiency and sustainability of agricultural practices.  The goal is to reduce the environmental impact of farming while improving efficiency",
            tags:[
                'web','mobile','green technology', 'sustainable'
            ],
            color: '[#90A8ED]'
            
        },
        {
            img: '',
            title: "OPEN INNOVATION IDEAS",
            description: "New Ideas and solutions solving real world problems are welcome",
            tags:[
                'web','mobile','green technology', 'sustainable'
            ],
            color: 'green'
            
        },
    ]

  return (
    <div className='py-10 md:py-20 space-y-8  '>
    <h1 className='text-center  text-4xl font-bold'>Problem Statements</h1>
    <div className='flex w-full flex-wrap justify-center  gap-5 '>
      {/* card for diffreent problem statements mapping of obj  */}
     {
        obj.map((data,i)=>{
            return (
                <div key={i} className={`border-2 border-black bg-${data.color}  w-11/12 md:w-[400px] flex flex-col justify-between gap-3  p-5  rounded-xl font-bold  `}>
                <div className='flex flex-col gap-3' >
                    <h3 className='text-xl font-bold'> 
                        {data?.title}
                    </h3>
                    <div className='text-sm' >
                        {data?.description}
                     </div>
                </div>
                    <div>
                        <div className=' text-sm  mb-2' >Popular Tags</div>
                        <div className='flex flex-wrap gap-2' >
                            {
                                data.tags.map((tag,j)=>{
                                    return <div key={j} className='transition py-0.5  bg-white hover:shadow-2xl duration-200  relative hover:-translate-y-1  ease-in hover:ease-in  rounded-2xl border border-black px-3 text-[12px]   ' >
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
        

      
    </div>
  </div>
  )
}

export default Tracks