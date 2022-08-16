import {Link} from "react-router-dom";

export default function CallToAction() {
    return (
        <section className="content-section bg-primary text-white">
            <div className="container px-4 px-lg-5 text-center">
                <h2 className="mb-4">The buttons below are impossible to resist...</h2>
                <Link className="btn btn-xl btn-light me-4" to="/">Click Me!</Link>
                <Link className="btn btn-xl btn-dark" to="/">Look at Me!</Link>
            </div>
        </section>
    )
}