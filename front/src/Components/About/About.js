import {Link} from "react-router-dom";

export default function About(){
    return(
        <section className="content-section bg-light" id="about">
            <div className="container px-4 px-lg-5 text-center">
                <div className="row gx-4 gx-lg-5 justify-content-center">
                    <div className="col-lg-10">
                        <h2>Stylish Portfolio is the perfect theme for your next project!</h2>
                        <p className="lead mb-5">
                            This theme features a flexible, UX friendly sidebar menu and stock photos from our friends
                            at
                            <Link to="https://unsplash.com/">Unsplash</Link>
                            !
                        </p>
                        <Link className="btn btn-dark btn-xl" to="/services">What We Offer</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}