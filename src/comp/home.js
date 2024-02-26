import React from 'react'
import './Nav.css'
const Home = (props) => {
    let prod=props.prod
  return (
    <div className='prod'>
    {
     prod.map((item,i)=>{
         return(
             <div className='card'>
                 <div className='cimg'><img src={item.images[0]}/></div>
                 <h3>Title:{item.title}</h3>
                 <h3>Description:{item.description}</h3>
                 <h3>Price:{item.price}</h3>
                 <h3>Brand:{item.brand}</h3>
                 <h3>Category:{item.category}</h3>
             <button onClick={()=>props.addcart(i)}>Add to cart</button> 
             
             </div>
         )
     })
    }
 </div>
  )
}
export default Home