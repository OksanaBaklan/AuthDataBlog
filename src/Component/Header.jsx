import { NavLink } from "react-router-dom"

export default function Header(){
    
    return (
        <>
         <header>
         <nav className="nav">
      <NavLink to="/home" className="link" >Todo list</NavLink>
      <NavLink to="/" className="link" >Log out</NavLink>

    </nav>

         </header>
        </>
     
    )
}