import {Link} from "react-router-dom";

export default function Portfolio() {
    return (
        <section className="content-section" id="portfolio">
            <div className="container px-4 px-lg-5">
                <div className="content-section-heading text-center">
                    <h3 className="text-secondary mb-0 title-dostavka">Міжнародна доставка</h3>
                    <h2 className="mb-5 under-title-text">Для клієнтів доступні наступні види послуг для доставки з України і в Україну</h2>
                </div>
                <div className="row gx-0">
                    <div className="col-lg-6">
                        <Link className="portfolio-item" to="/">
                            <div className="caption">
                                <div className="caption-content">
                                    <div className="h2">Речі з дому за кордон</div>
                                    <p className="mb-0">Тепер ти можеш відправляти посилки родині, друзям та колегам по всьому Світу так само легко, як ти звик відправляти Новою Поштою по Україні, завдяки Nova Poshta Global!</p>
                                </div>
                            </div>
                            <img className="img-fluid img-car" src="assets/img/car.jpg" alt="..."/>
                        </Link>
                    </div>
                    <div className="col-lg-6">
                        <Link className="portfolio-item" to="/">
                            <div className="caption">
                                <div className="caption-content">
                                    <div className="h2">Доставляємо Ваші речі</div>
                                    <p className="mb-0 ">До Євросоюзу за привабливими тарифами!</p>
                                </div>
                            </div>
                            <img className="img-fluid img-car" src="assets/img/es.jpg" alt="..."/>
                        </Link>
                    </div>
                    <div className="col-lg-6">
                        <Link className="portfolio-item" to="/">
                            <div className="caption">
                                <div className="caption-content">
                                    <div className="h2">Глобальна доставка</div>
                                    <p className="mb-0">Для доставки документів, вантажів та відправлень у більшість країн світу з України</p>
                                </div>
                            </div>
                            <img className="img-fluid img-car" src="assets/img/doc.jpg" alt="..."/>
                        </Link>
                    </div>
                    <div className="col-lg-6">
                        <a className="portfolio-item" href="#!">
                            <div className="caption">
                                <div className="caption-content">
                                    <div className="h2">NP Export Econom</div>
                                    <p className="mb-0">Доставка за доступним тарифом в Молдову</p>
                                </div>
                            </div>
                            <img className="img-fluid img-car" src="assets/img/moldova.jpg" alt="..."/>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}