import {Link} from "react-router-dom";

export default function Header() {
    return (
        <header className="masthead d-flex align-items-center">
            <div className="container px-4 px-lg-5 text-center">
                <h1 className="mb-1">Stylish Portfolio</h1>
                <h3 className="mb-5"><em>A Free Bootstrap Theme by Start Bootstrap</em></h3>
                <Link className="btn btn-primary btn-xl" to="/about">Find Out More</Link>
            </div>
        </header>
    )
}