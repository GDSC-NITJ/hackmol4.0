import React from 'react'

function RulesPoints({title,decription}) {
  return (
    <div className='rulesPoints flex flex-row space-x-2'>
      <div className="rulesPoints__header font-semibold">
        {"-> "}{title}{" : "}
      </div>
      <div className="rulesPoints__details">
        {decription}
      </div>
    </div>
  )
}

export default RulesPoints