import { Link } from "react-router-dom"
import { MdOutlineArrowBackIosNew } from 'react-icons/md';
import { useState } from "react";
const Loginn = () => {
    const [elem,setElem]=useState({
        names:"",
        password:""
    }) 


    function changed(event){
        
        setElem(prev=>{
            const {name,value}=event.target;
                return{
                    ...prev,[name]:value
                }
            })
console.log(elem)
    }

    return (
        <div className="signup">
            <Link to="/"><button className="btnback" ><MdOutlineArrowBackIosNew /></button></Link>
          
          
            <div className="inp2">
                <input type="text" className="inp1" placeholder="email or number" onChange={changed}
                name="names" value={elem.names}
                />
            </div>
          
          
            <div className="">
                <input type="password" className="inp1" placeholder="Password" name="password"  
                value={elem.password}
              onChange={changed}
                
                /> 

            </div>
          
          
            <div className="">
                <button className="btn-login" >Log in</button>
            </div>

        </div>
    );
}

export default Loginn;