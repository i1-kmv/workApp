import React, {FC, useState} from "react"
import {CustomSelect} from "./ui/CustomSelect"
import {useDispatch} from "react-redux"
import {setDataLoadingAC} from "../store/vacancies-reducer"

type FiltersPropsType = {
    regionList: Array<string>
    cityList: Array<string>
    clientList: Array<string>
    regionHandler: (val: string) => void
    cityHandler: (val: string) => void
    clientHandler: (val: string) => void
}


export const Filters: FC<FiltersPropsType> = ({regionList, cityList, clientList,regionHandler,
    cityHandler,clientHandler}) => {

    const dispatch = useDispatch()

    const [regionValue, setRegionValue] = useState<string>('')
    const [cityValue, setCityValue] = useState<string>('')
    const [clientValue, setClientValue] = useState<string>('')

    const onClearHandler = () => {
        regionHandler('')
        cityHandler('')
        clientHandler('')
        setCityValue('')
        setRegionValue('')
        setClientValue('')
    }

    const onAddFiltersHandler = () => {
        regionHandler(regionValue)
        cityHandler(cityValue)
        clientHandler(clientValue)
        dispatch(setDataLoadingAC(true))
        setTimeout(() => {
            dispatch(setDataLoadingAC(false))
        }, 1000)
    }

    return (
        <div>
            <CustomSelect
                placeholder="Выберите регион"
                value={regionValue}
                onChange={setRegionValue}
                list={regionList}
                label="Регион"
            />
            <CustomSelect
                placeholder="Выберите город"
                value={cityValue}
                onChange={setCityValue}
                list={cityList}
                label="Город"
            />
            <CustomSelect
                placeholder="Выберите организацию"
                value={clientValue}
                onChange={setClientValue}
                list={clientList}
                label="Организация"
            />
            <div className="filters-buttons">
                <button
                    className="filters-button"
                    onClick={onAddFiltersHandler}
                >
                    Применить
                </button>
                <div
                    className="filters-clear"
                    onClick={onClearHandler}
                >
                    Очистить
                </div>
            </div>
        </div>
    )
}
