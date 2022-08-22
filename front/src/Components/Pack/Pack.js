// import React from "@types/react";

export default function Pack() {
    return (
<div className={"pack-body"}>
        <div className={"text-before-card"}>Пакування</div>,
        <div className={"card-wrapper"}>
            <div className="card" >
                <img src="https://static.novaposhta.ua/sitecard/misc/img/pack/pack_5kg.png" className="card-img card-img-first " alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Оберіть коробку</h5>
                    <p className="card-text">Оберіть коробку, яка найбільше підходить за розміром - для того, щоб уникнути пустот, через які посилка може пошкодитися.</p>
                </div>
            </div>
            <div className="card" >
                <img src="https://static.novaposhta.ua/sitecard/misc/img/pack/pack_box.png" className="card-img" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Зберіть коробку</h5>
                    <p className="card-text">Загорніть вміст посилки у пом'якшувальний матеріал - наприклад, повітряно-бульбашкову плівку - з усіх боків.</p>
                </div>
            </div>
            <div className="card" >
                <img src="https://static.novaposhta.ua/sitecard/misc/img/pack/pack_0.5kg.png" className="card-img" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Додайте маркування</h5>
                    <p className="card-text">Скріпіть коробку широким скотчем з усіх боків та згинів декілька разів. Захисна стрічка на посилці має складати букву Н. Приклейте маркування на найбільшу поверхню.</p>
                </div>
            </div>
        </div>
</div>
    )
}