import React from 'react'

function RuleCard({title, description}) {
  return (
    <div className='border-2  m-2 w-48 ' >
        <h1 className=' border-b-2 p-2 '>{title}</h1>
        <div className='p-2' >{description} Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, error? </div>
    </div>
  )
}

export default RuleCard