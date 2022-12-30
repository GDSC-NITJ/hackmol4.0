import React from 'react'

function RulesPoints({Desc,color}) {
  return (
    <div style={{background:color}} className='rulesPoints border-2 border-black shadow-3xl rounded-2xl flex flex-col p-3 justify-center text-black h-20 mx-7 my-9 text-sm font-Plus-Jakarta font-bold'>
    {Desc}
    </div>
  )
}

export default RulesPoints