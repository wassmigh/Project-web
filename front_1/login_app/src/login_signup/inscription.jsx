import React from "react"
import { Link } from "react-router-dom";

function Inscription(){
    return(
        <div className="Inscri">
            <h1>Inscription</h1>
            <form action='register.php' method="post">
                <input type="text" placeholder="Username" required name="username"/>
                <input type="email" required placeholder="E-mail" name="email"/>
                <input type="password" required placeholder="Password" name="password"/>
                <input type="password" placeholder="Confirm Password" />
                <input type="submit" value="Signup"/>
                <span>You already have an Account ?<Link to="/Login">Sign in</Link></span>
            </form>
        </div>
    )
}
export default Inscription;