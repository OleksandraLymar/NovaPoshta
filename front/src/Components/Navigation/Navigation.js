import {Link} from "react-router-dom";

export default function Navigation() {
    return (
        <Link className="menu-toggle rounded" to="/"><i className="fas fa-bars"></i></Link>,
        <nav id="sidebar-wrapper">
            <ul className="sidebar-nav">
                <li className="sidebar-brand"><Link to="/">Nova-Poshta</Link></li>
                <li className="sidebar-nav-item"><Link to="/">Home</Link></li>
                <li className="sidebar-nav-item"><Link to="/about">About</Link></li>
                <li className="sidebar-nav-item"><Link to="/services">Services</Link></li>
                <li className="sidebar-nav-item"><Link to="/portfolio">Portfolio</Link></li>
                <li className="sidebar-nav-item"><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    )
}