import React, {FC} from "react"


export const SearchArea: FC = () => {

    return (
        <div className="area-wrapper">
            <div className="area-label">
                Регион:
            </div>
            <div className="area-region">
                Калининградская область
            </div>
            <form action="" className="area-form">
                <input type="text" placeholder="Вакансия или город" className="area-form_text"/>
                <button className="area-form_button">
                    <img src="https://gsr-rabota.ru/images/search.svg" alt="search"/>
                    Искать
                </button>
            </form>
            <p className="area-title">Поиск вакансий</p>
            <div className="area-subtitle">
                <span className="area-subtitle-item">главная</span>
                <span className="area-subtitle-item">поиск вакансий</span>
            </div>
            <div className="area-underline"></div>
        </div>
    )
}
