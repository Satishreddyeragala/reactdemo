const Cart = (props) => {
    let cart=props.cart
  return (
    <>
    {cart.length==0&&<div className='empty'>Your cart is empty</div>}
    {cart.length>0&&<div className='prod'>
    {
     cart.map((item,i)=>{
         return(
             <div className='card'>
                 <div className='cimg'><img src={item.images[0]}/></div>
                 <h3>Title:{item.title}</h3>
                 <h3>Description:{item.description}</h3>
                 <h3>Price:{item.price}</h3>
                 <h3>Brand:{item.brand}</h3>
                 <h3>Category:{item.category}</h3>
                 <h3 className='h3'><button onClick={()=>props.dec(i)}>-</button>{item.qty}<button onClick={()=>props.inc(i)}>+</button></h3>
                 <h3>Total:{item.qty*item.price}</h3>
                 <button onClick={()=>props.del(i)}>Delete</button>
             </div>
         )
     })
    }
 </div>}
 {cart.length!=0&&<div className='amount'>Amount need to pay:{props.ctotal}</div>}
 </>
  )
}

export default Cart