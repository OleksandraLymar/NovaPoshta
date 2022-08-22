import {Link} from "react-router-dom";

export default function About(){
    return(
        <section className="content-section bg-light" id="about">
            <div className="container px-4 px-lg-5 text-center">
                <div className="row gx-4 gx-lg-5 justify-content-center">
                    <div className="col-lg-10 about">
                        <h2 >Здійснюємо швидку доставку!</h2>
                        <p className="lead mb-5 ">
                            Компанія «Нова пошта» пропонує клієнтам <a href="https://novaposhta.ua/privatnim_klientam/otrimati">доставку</a> кур'єром, у відділенні або у поштоматі                            !
                        </p>
                        <a className="btn btn-dark btn-xl" href="https://novaposhta.ua/privatnim_klientam/vidpraviti">Як відправити посилку?</a>
                    </div>
                </div>
            </div>
        </section>
    )
}