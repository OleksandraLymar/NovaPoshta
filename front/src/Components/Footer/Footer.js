import {Link} from "react-router-dom";

export default function Footer() {
    return (
        <footer class="text-center text-lg-start bg-white text-muted">
            <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                <div class="me-5 d-none d-lg-block">
                    <span>Get connected with us on social networks:</span>
                </div>
                <div>
                    <a href="https://www.facebook.com/nova.poshta.official" class="me-4 link-grayish">
                        <i class="fab fa-facebook-f"></i>
                    </a>
                    <a href="https://twitter.com/NP_official_ua" class="me-4 link-grayish">
                        <i class="fab fa-twitter"></i>
                    </a>
                    <a href="https://www.instagram.com/novaposhta.official/" class="me-4 link-grayish">
                        <i class="fab fa-instagram"></i>
                    </a>
                    <a href="https://www.linkedin.com/company/novaposhta/?viewAsMember=true" class="me-4 link-grayish">
                        <i class="fab fa-linkedin"></i>
                    </a>
                </div>
            </section>
            <section class="">
                <div class="container text-center text-md-start mt-5">
                    <div class="row mt-3">
                        <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

                            <h6 class=" text-uppercase fw-bold mb-4">
                                <i class=" fas fa-dolly-flatbed me-3 text-grayish"></i>Нова Пошта
                            </h6>
                            <p>
                                Швидка і надійна відправка по всій Україні.
                            </p>
                        </div>
                        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 class="text-uppercase fw-bold mb-4">
                                Портал розробника
                            </h6>
                            <p>
                                <a href="https://developers.novaposhta.ua/" class="text-reset">API 2.0</a>
                            </p>

                        </div>
                        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 class="text-uppercase fw-bold mb-4">
                                Мобільний додаток
                            </h6>
                            <p>
                                <a href="https://play.google.com/store/apps/details?id=ua.novaposhtaa&referrer=utm_source=npsite&utm_medium=index_poage" class="text-reset">Android</a>
                            </p>
                            <p>
                                <a href="https://apps.apple.com/us/app/%D0%BD%D0%BE%D0%B2%D0%B0-%D0%BF%D0%BE%D1%88%D1%82%D0%B0/id545980774" class="text-reset"> Apple iOS</a>
                            </p>
                        </div>
                        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                            <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
                            <p><i class="fas fa-home me-3 text-grayish"></i> Київ, Україна</p>
                            <p><i class="fas fa-phone me-3 text-grayish"></i> + 38(050)4-500-609</p>
                            <p><i class="fas fa-phone me-3 text-grayish"></i> + 38(093)4-500-609</p>
                        </div>
                    </div>
                </div>
            </section>
            <div class="text-center p-4" >
                © 2006–2022 ТОВ «Нова Пошта»
            </div>
        </footer>
    )
}