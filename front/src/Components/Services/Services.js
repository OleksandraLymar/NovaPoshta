export default function Services() {
    return (
        <section className="content-section bg-primary text-white text-center" id="services">
            <div className="container px-4 px-lg-5">
                <div className="content-section-heading">
                    <h3 className="text-secondary mb-0">Сервіси</h3>
                    <h2 className="mb-5">Що ми пропунуємо?</h2>
                </div>
                <div className="row gx-4 gx-lg-5">
                    <div className="col-lg-3 col-md-6 mb-5 mb-lg-0">
                        <div className="service-icon rounded-circle mx-auto mb-3">
                            <img className="icon-first" src={"https://novaposhta.ua/uploads/misc/img/ico/selfservice1.png"}/>
                        </div>
                        <div className={"circle-title-first color"}><h4><strong>Самообслуговування</strong></h4></div>
                        <p className="text-faded mb-0">Сервіс, який надається Відправнику з метою самостійного оформлення відправлень без допомоги оператора відділення.</p>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-5 mb-lg-0">
                        <div className="service-icon rounded-circle mx-auto mb-3">
                            <img className="icon-second" src={"https://novaposhta.ua/uploads/misc/img/ico/Zamok.png"}/>
                        </div>
                        <div className={"color"}><h4><strong>Зберігання</strong></h4></div>
                        <p className="text-faded mb-0">Послуга передбачає зберігання відправлення у відділенні Нова пошта 60 (шістдесят) календарних днів. </p>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-5 mb-md-0">
                        <div className="service-icon rounded-circle mx-auto mb-3">
                            <img className="icon-first" src={"https://novaposhta.ua/uploads/misc/img/nadiina_pokupka.png"}/>
                        </div>
                        <div className={"color"}><h4><strong>Надійна покупка</strong></h4></div>
                        <p className="text-faded mb-0">
                            Послуга для користувачів, що купують товар онлайн і розраховуються банківською карткою. З цією послугою покупки стають безпечними та легкими.
                        </p>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="service-icon rounded-circle mx-auto mb-3">
                            <img className="icon-second" src={"https://novaposhta.ua/uploads/misc/img/ico/Pereadresaciya.png"}/>
                        </div>
                        <div className={"color"}><h4><strong>Переадресування</strong></h4></div>
                        <p className="text-faded mb-0">Послуга передбачає зміну за бажанням Відправника адреси доставки відправлення після його забору представником компанії «Нова пошта».</p>
                    </div>
                </div>
            </div>
        </section>

    )
}