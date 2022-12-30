import React from 'react'
import Hackmol4 from '../public/Hackmol4.png'
import RulesPoints from './RulesPoints'

function RulesNew() {
    return (
        <div className='rulesNew w-full h-full bg-white flex flex-row'>
            <div className="rulesLeft w-1/2 white">
                <div className="rules__title m-7 mt-10 text-4xl font-bold font-Space-Grotesk">
                    RULES
                </div>
                <div className="rules__desc m-7 font-Plus-Jakarta">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum quasi quam, distinctio ut non ipsum saepe reprehenderit dolores iusto adipisci hic veritatis possimus, esse, totam magni et ea ratione illo?
                </div>
                <div className="rules__list">
                    <RulesPoints Desc="This is rule 1 you have to follow it noobs ;)" color="#FFEB01"/>
                    <RulesPoints Desc="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum quasi quam, distinctio ut non ipsum saepe reprehenderit dolores" color="#FF6F0F"/>
                    <RulesPoints Desc="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum quasi quam, distinctio ut non ipsum saepe reprehenderit dolores" color="#94E95D"/>
                    <RulesPoints Desc="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum quasi quam, distinctio ut non ipsum saepe reprehenderit dolores" color="#5C40EC"/>
                    <RulesPoints Desc="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum quasi quam, distinctio ut non ipsum saepe reprehenderit dolores" color="#FFEB01"/>
                </div>
                
            </div>
            <div className="rulesRight w-1/2 flex flex-col justify-start">
                <img src={Hackmol4.src} alt="Image" className='m-12' />
            </div>
        </div>
    )
}

export default RulesNew
