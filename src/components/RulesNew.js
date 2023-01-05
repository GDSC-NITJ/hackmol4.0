import { rule } from 'postcss'
import React, { useEffect, useState } from 'react'
import Hackmol4 from '../../public/Hackmol4.png'
import RulesPoints from './RulesPoints'

function RulesNew() {

    const [rules,setRules]=useState([{}]);

    useEffect(()=>{
        setRules([
            {color:"#FFEB01",rule:"Each team would comprise of 3 to 4 members "},
            {color:"#FF6F0F",rule:"Team members could be from different institutions as well"},
            {color:"#5C40EC",rule:"The idea submission begins on 15th Jan,2023 and ends on 30th Jan,2023"},
            {color:"#FFEB01",rule:"Only one person in the team would be the team leader who is required to register on behalf of all the members"},
            {color:"#94E95D",rule:"All work on a project should be done during the HackMol. Your code repository must be initialized at the beginning of HackMol itself"}
        ])
    },[])
    

    

    return (
        <div id='rules' className='rulesNew w-full  pb-10 bg-white flex flex-col md:flex-row overflow-auto h-'>
            <div className="rulesLeft w-full md:w-1/2 white flex items-center flex-col">
                <div className="w-11/12  " >
                
                    <div className="rules__title mt-12 text-4xl mb-6 font-bold font-Space-Grotesk">
                        RULES
                    </div>
                    <div className="rules__desc mb-10 font-Plus-Jakarta">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum quasi quam, distinctio ut non ipsum saepe reprehenderit dolores iusto adipisci hic veritatis possimus, esse, totam magni et ea ratione illo?
                    </div>
                    <div className="rulesRight h-1/2 md:hidden  flex flex-col justify-center w-full items-center ">
                <img src={Hackmol4.src} alt="Image" className=' mb-10  w-[330px] ' />
            </div>
                    <div className="rules__list  space-y-8  ">
                        
                      {  rules.map((ele,id)=>{
                            return    <RulesPoints key={id} Desc={ele.rule} color={ele.color}/>
                        })
                        }
                    </div>
                    
              
                 </div>
            </div>
            <div className="rulesRight w-1/2 hidden  md:flex flex-col justify-start sticky top-0 ">
                <img src={Hackmol4.src} alt="Image" className='m-12 ' />
            </div>
        </div>
    )
}

export default RulesNew
