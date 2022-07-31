import React, {FC, useState} from "react"
import {PopupResponse} from "./PopupResponse"

type VacancyCardPropType = {
    placetitle: string
    proftitle: string
    salary: string
    direction: string
    clientName: string
}


export const VacancyCard: FC<VacancyCardPropType> = (
    {placetitle, proftitle, salary, direction, clientName}) => {

    const [isResponseMode, setIsResponseMode] = useState<boolean>(false)

    const setIsResponseModeHandler = () => {
        setIsResponseMode(!isResponseMode)
    }

    return (
        <div className="card-wrapper">
            <div className="card-region">{placetitle}</div>
            <div className="card-title">{proftitle}</div>
            <div className="card-underline"></div>
            <div className="card-salary">{salary}</div>
            <div className="card-speciality">{direction}</div>
            <div className="card-client">{clientName}</div>
            <button className="card-details">Подробнее</button>
            <button
                className="card-response"
                onClick={setIsResponseModeHandler}
            >
                Откликнуться!
            </button>
            {isResponseMode &&  <PopupResponse setIsResponseMode={setIsResponseMode}/>}
        </div>
    )
}
