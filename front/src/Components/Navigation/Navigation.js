// import {Link} from "react-router-dom";
// import React from "react";
//
// export default function Navigation() {
//
//     return (
//
//         <>
//             <Link className="menu-toggle rounded " to={"/"}><i className="fas fa-bars"> </i></Link>
//             <nav id="sidebar-wrapper" >
//                 <ul className="sidebar-nav">
//                     <li className="sidebar-brand"><Link to="/">Nova-Poshta</Link></li>
//                     <li className="sidebar-nav-item"><Link to="/">Home</Link></li>
//                     <li className="sidebar-nav-item"><Link to="/about">About</Link></li>
//                     <li className="sidebar-nav-item"><Link to="/services">Services</Link></li>
//                     <li className="sidebar-nav-item"><Link to="/portfolio">Portfolio</Link></li>
//                     <li className="sidebar-nav-item"><Link to="/contact">Contact</Link></li>
//                 </ul>
//             </nav>
//         </>
//     )
// }
import {Link} from "react-router-dom";
import React from "react";

export default function Navigation() {

    return (
        <header>
            <nav className=" navbar navbar-expand-lg  fixed-top">
                <div className="container-fluid">

                    <div className="collapse navbar-collapse" id="navbarExample01">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item active">
                                <a className="nav-link" aria-current="page" href="#">Домашня сторінка </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#about">Про компанію </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#services">Сервіси</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#delivery">Доставка</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#departments">Відділення</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#contact">Зв'язок</a>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}