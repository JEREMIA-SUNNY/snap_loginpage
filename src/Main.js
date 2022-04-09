import { Link } from "react-router-dom"
const Main = () => {
    return (     
        <div className="login">

        <div className="btn">
                
                <Link to="./Signup"><button className="btn-signin">Sign up</button></Link>
                <Link to="./Loginn"><button className="btn-login">Login</button></Link>
               
        </div>
        
        
        </div>


     );
}
 
export default  Main;