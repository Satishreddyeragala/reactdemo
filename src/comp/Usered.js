import React, { useReducer } from 'react'

const Usered = () => {
   let[state,dispatch]=useReducer((state,action)=>{
    if(action.type=="name")
    {
        return{...state,"name":action.payload}
    }
    return{"data":[...state.data,state.name],"name":""}

   },{"data":[],"name":""})   
  return (
    <div>
        <input type="text" onChange={(e)=>dispatch({"type":"name","payload":e.target.value})} value={state.name}/>
        <button onClick={()=>dispatch({"type":"data"})}>Add</button>
        <div>
            {
                state.data.map((item)=><li>{item}</li>)
            }
        </div>
    </div>
  )
}

export default Usered