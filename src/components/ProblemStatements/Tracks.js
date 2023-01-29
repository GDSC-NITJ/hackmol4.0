import React from 'react'




function Tracks() {


    const obj = [
        {
            img: 'https://cdn-icons-png.flaticon.com/512/4515/4515497.png',
            title: "Green Technology",
            description: "Develop applications that promote renewable energy, increase energy efficiency, reduce waste, and promote sustainability.",
            tags:[
                'web','mobile','green technology', 'sustainable'
            ],
            color: 'orange'
        },
        {
            img: 'https://cdn-icons-png.flaticon.com/512/887/887739.png',
            title: "Blockchain Development - Web3",
            description: "Explore the potential of blockchain technology and develop applications that leverage its features.",
            tags:[
                'blockchain','web3','crypto', 'bitcoin','ethereum'
            ],
            color: 'yellow'
        },
        {
            img: 'https://cdn-icons-png.flaticon.com/512/3227/3227831.png',
            title: "Agriculture and Rural Development",
            description: "Create applications and technologies that increase agricultural productivity and improve rural livelihoods.",
            tags:[
                'web','mobile','IoT', 'sustainable','farming'
            ],
            color: '[#90A8ED]'
            
        },
        {
            img: 'https://cdn-icons-png.flaticon.com/512/2382/2382533.png',
            title: "MedTech/Healthcare",
            description: "Develop innovative medical technologies and healthcare applications that improve patient outcomes and provide better access to healthcare.",
            tags:[
                'meditation','consulation-bots','cancer', 'medical solutions','fitness','lifestyle'
            ],
            color: 'green'
        },
        {
            img: 'https://cdn-icons-png.flaticon.com/512/4616/4616734.png',
            title: "Machine Learning / Artificial Intelligence",
            description: "Explore the applications and possibilities of machine learning and AI, and develop applications that use them.",
            tags:[
                'automatation','neuroscience','chatgpt', 'python', 'future','deep-learning','ai-model'
            ],
            color: '[#D0A4FF]'
            
        },
        {
            img: 'https://cdn-icons-png.flaticon.com/512/1457/1457847.png',
            title: "Smart Education",
            description: "Develop applications and technologies to improve the quality of and access to education.",
            tags:[
                'elearning','edtech','innovative education', 'educate-for-good'
            ],
            color: 'orange'
            
        },
        {
            img: 'https://cdn-icons-png.flaticon.com/512/2092/2092757.png',
            title: "Cyber Security",
            description: "Develop and implement measures to protect data and networks from cyber-attacks. ",
            tags:[
                'hacking','infosec','linux', 'kali-linux','secure'
            ],
            color: 'yellow'
            
        },
        {
            img: 'https://cdn-icons-png.flaticon.com/512/2416/2416790.png',
            title: "Internet of Things (loT)",
            description: "Leverage the power of the Internet of Things to create applications that increase efficiency and reduce waste.",
            tags:[
                'robotics','automation','rasperry pi', 'arduino','cloud'
            ],
            color: '[#90A8ED]'
            
        },
        {
            img: 'https://cdn-icons-png.flaticon.com/512/8646/8646407.png',
            title: "Open Innovation",
            description: "Encourage hackathon participants to come up with innovative solutions that promote collaboration and open innovation.",
            tags:[
                'business', 'beginner-friendly', 'tech','startup','fintech'
            ],
            color: 'green'
            
        },
    ]

  return (
    <div className='py-10 md:py-20 space-y-8 border-y-2 border-black  '>
    <h1 className='text-center  text-4xl font-bold'>Themes</h1>
    <div className='flex w-full flex-wrap justify-center gap-5'>
      {/* card for different problem statements mapping of obj  */}
     {
        obj.map((data,i)=>{
            return (
                <div key={i} className={`border-2 border-black bg-${data.color} w-11/12 md:w-[400px] flex flex-col justify-between gap-3  p-5  rounded-xl font-bold  `}>
                <div className='flex flex-col gap-3' >
                    <img src={data?.img} className='w-1/5 scale-[90%]'></img>
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