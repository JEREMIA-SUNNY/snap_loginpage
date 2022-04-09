import { Link } from "react-router-dom"
import { MdOutlineArrowBackIosNew } from 'react-icons/md';
import { useState } from "react";
const Signup = () => {

    const [user, setUser] = useState({
        names: "",
        password: "",
        country: "",
    })
    const [succ, setSucc] = useState("")
    function changed(e) {
        const { name, value } = e.target;

        setUser(prev => {
            return {
                ...prev, [name]: value
            }
        })
    }


    console.log(user.names)
    console.log(user.password)

    let check = user.password;
    let check2 = user.password;
    var mess;
    function submit() {
        console.log("workig")
        if (user.names !== "" && user.password !== "") {
            setSucc("successfull")
        }
        else {
            setSucc("Enter valid items")
        }


    }




    return (
        <div className="signup">
            <Link to="/"><button className="btnback" ><MdOutlineArrowBackIosNew /></button></Link>
            <h4 className="h6c">welcome to snapchat</h4>
            <div className="inp2">
                <select id="" className="inp13"
                    value={user.country} name="country" onChange={changed}
                >
                    <option value="india"> india</option>
                    <option value="uss" >usa</option>
                    <option value="france" >france</option>
                    <option value="ire" >ire</option>
                    <option value="red" >Red</option>
                </select>
                <input type="text" className="inp1 " placeholder="email or number" name="names" value={user.names} onChange={changed} />
            </div>
            <div className="">
                <input type="text" className="inp1" placeholder="Password" name="password" value={user.password} onChange={changed} />
            </div>
            <div className="">
                <button className="btn-login" onClick={submit} >Sign in</button>
            </div>
            <h6 className="h6c"
            >{succ}</h6>
        </div>
    );
}

export default Signup;