import { Component } from "react";
class App extends Component
{
    /*constructor()
    {
        super()
        this.state={"name":"","data":[]}
    }
    fun=(e)=>
    {
        this.setState({...this.state,"name":e.target.value})
    }
    fun1=()=>
    {
        this.setState({"data":[...this.state.data,this.state.name],"name":""})
    }   

   render()
   {
    return(
        <div>
            <input type="text" value={this.state.name} onChange={this.fun}/>
            <button onClick={this.fun1}>Add</button>
            <div>
                {
                    this.state.data.map((item)=><li>{item}</li>)
                }
            </div>
        </div>
    )
   }*/
   //class component with inc and dec funtion
   constructor()
   {
    super()
    this.state={"data":[]}
   }
   /*inc=()=>{
    //this.setState({"c":this.state.c+1})
    this.setState((prev)=>{
        return{"c":prev.c+1}
    })
   }
   dec=()=>{
    //this.setState({"c":this.state.c-1})
    this.setState((prev)=>{
        return{"c":prev.c-1}
    })
   }*/
   componentDidMount()
   {
    fetch("https://jsonplaceholder.typicode.com/comments").then((res)=>res.json()).then((data)=>this.setState({"data":data}))
   }
   componentDidUpdate()
   {
    console.log("comp is updated")
   }
   componentWillUnmount()
   {
    console.log("comp will unmount")
   }
   render()
   {
    return(
        <div>
            {/* <div>{this.state.c}</div> */}
           {/* <button onClick={this.inc}>INC</button> */}
            {/* <button onClick={this.dec}>dec</button> */}
            {
                this.state.data.map((item)=><li>{item.name}{ item.body}</li>)
            }
        </div>
    )
   }
   /*constructor()
   {
    super()
    this.data={"name":"satish","age":21,"dept":"cse"}
   }
   render()
   {
    return(
        <div>
            <Com data={this.data}/>
        </div>
    )
   }*/
}

export default App