import {Link} from "react-router-dom";

export default function Callout() {
    return (
        <section className="callout">
            <div className="container px-4 px-lg-5 text-center">
                <h2 className="mx-auto mb-5">
                    Welcome to
                    <em>your</em>
                    next website!
                </h2>
                <Link className="btn btn-primary btn-xl" to="https://startbootstrap.com/theme/stylish-portfolio/">Download
                    Now!</Link>
            </div>
        </section>
    )
}