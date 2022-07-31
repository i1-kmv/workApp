import React, {FC} from "react"
import {VacancyCard} from "./ui/VacancyCard"
import {VacancyType} from "../api/api"


type CardPropsType = {
    vacancies: Array<VacancyType>
}


export const Cards: FC<CardPropsType> = ({vacancies}) => {

    return (
        <div className="area-cards">
            {vacancies.map((el, index) => (
                <VacancyCard
                    key={el.address + index}
                    placetitle={el.placetitle}
                    proftitle={el.proftitle}
                    salary={el.salary_volume_ex}
                    direction={el.directiontitle}
                    clientName={el.clientname}
                />)
            )}
        </div>
    )
}
