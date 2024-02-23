import React, { useState } from 'react'

const UsestatePra = () => {
    const [adder , setAdder] = useState(0)
    function increnum(params) {
        setAdder(adder+1)
    }
    function decrenum(params) {
        if (adder<=0) {
            setAdder(0)
        } else {
            setAdder(adder-1)
        }
    }
  return (
    <div>
      
<button onClick={()=>increnum()}>+</button>
<p>{adder}</p>
<button onClick={()=>decrenum()}>-</button>

    </div>
  )
}

export default UsestatePra
