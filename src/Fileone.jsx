import React from 'react'
import Filetwo from './Filetwo'

const Fileone = ({parsingtext}) => {
  return (
    <div>
        <h1>{parsingtext}</h1>
      <Filetwo filtow = {parsingtext}/>
    </div>
  )
}

export default Fileone
