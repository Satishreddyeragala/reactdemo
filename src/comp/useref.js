import React, { useRef, useState } from 'react'

const Useref = () => {
    let[data,setData]=useState([])
    let tfr=useRef()
    let fun=()=>{
        setData([...data,tfr.current.value])
        tfr.current.value=""
    }
  return (
    <div>
        <input type="text" ref={tfr}/>
        <button onClick={fun}>Add</button>
        <div>
            {
                data.map((item)=><li>{item}</li>)
            }
        </div>
    </div>
  )
}

export default Useref