import React from "react"
import { Link } from "react-router-dom";
function Login(){
    return(
        <div className="auth">
                <h1>
                    Login
                </h1>
                <form action="connexion.php" method="post">
                  <input type="email" placeholder="E-mail" required name="email"/>
                  <input type="password" placeholder="Password" required name="mdp"/>
                  <input type="submit" value="Login"/>
                  <span>Vous n'avez pas de compte ?<Link to="/Inscription"> Inscrivez Vous </Link> </span>                    
                </form>
        </div>
    )
}
export default Login;