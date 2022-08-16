import {Link} from "react-router-dom";

export default function Footer() {
    return (
        <footer className="footer text-center">
            <div className="container px-4 px-lg-5">
                <ul className="list-inline mb-5">
                    <li className="list-inline-item">
                        <Link className="social-link rounded-circle text-white mr-3" to="/"><i
                            className="icon-social-facebook"></i></Link>
                    </li>
                    <li className="list-inline-item">
                        <Link className="social-link rounded-circle text-white mr-3" to="/"><i
                            className="icon-social-twitter"></i></Link>
                    </li>
                    <li className="list-inline-item">
                        <Link className="social-link rounded-circle text-white" to="/"><i
                            className="icon-social-github"></i></Link>
                    </li>
                </ul>
                <p className="text-muted small mb-0">Copyright &copy; Your Website 2022</p>
            </div>
        </footer>
    )
}