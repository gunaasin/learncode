
import {Link} from "react-router-dom";
export const Navbar = () => {
  return (
    <div className="navbar">
        <img src="codelogo.png" alt=""  className="logo"/>
        <div className="rightnav">
      
            <Link to="/login" className="button1"><i className="fa-solid fa-user"></i>&nbsp;&nbsp;{localStorage.getItem("loggedInUser") || "Login"}</Link>
            <a href="/#link"><button className="button2">Play &nbsp;&nbsp;<i className="fa-solid fa-play"></i></button></a>
           
        </div>
    </div>
  )
}
