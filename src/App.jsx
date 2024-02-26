import React, { useState } from 'react'

const App = () => {
  const [array, setArray] = useState([215, 6532, 365, 23536])
  let ChangeMyArray = () => {
    setArray([523, 235, 2635, 65241])
  }
  return (
    <div>
      {/* <ul>{array.map((b, i)=>{
        
        <li key={i}> {b}</li>
      }
      })  */}
      {/* </ul> */}

      <ul>
        {array.map((val, ind)=>(
          <li key={ind}>{val}</li>
          )
          
        )}
      </ul>
      <button type="button" onClick={ChangeMyArray}>click</button>
    </div>
  )
}

export default App
