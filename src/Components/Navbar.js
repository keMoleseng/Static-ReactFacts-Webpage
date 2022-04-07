import logo from "../images/react-icon-small.png"
import "../style.css"

function Navbar(){
return (
    <nav className="nav-bar">
        <div className="logo-div" >
            <img src={logo} className="logo-img" />
            <h2>ReactFacts</h2>
        </div>
        <h3>React Course - Project 1</h3>
    </nav>
)
}

export default Navbar