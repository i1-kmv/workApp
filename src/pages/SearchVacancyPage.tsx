import React, {FC, useEffect, useState} from "react"
import {SearchArea} from "../componets/SearchArea"
import {Filters} from "../componets/Filters"
import {Cards} from "../componets/Cards"
import {useDispatch, useSelector} from "react-redux"
import {setDataTC} from "../store/vacancies-reducer"
import {AppRootStateType} from "../store/store"
import {VacancyType} from "../api/api"
import Loader from "react-ts-loaders"


export const SearchVacancyPage: FC = () => {

    const [regionFilterValue, setRegionFilterValue] = useState<string>('')
    const [cityFilterValue, setCityFilterValue] = useState<string>('')
    const [clientFilterValue, setClientFilterValue] = useState<string>('')
    const [currentPage, setCurrentPage] = useState<number>(1)

    const dispatch = useDispatch();

    useEffect(() => {
        // @ts-ignore
        dispatch(setDataTC())
    }, [])

    const isLoading = useSelector<AppRootStateType, boolean>(state => state.vacancies.isLoading);

    const vacancies = useSelector<AppRootStateType, Array<VacancyType>>(state => state.vacancies.vacancies)

    let filteredVacancies: Array<VacancyType> = vacancies

    if (regionFilterValue) {
        filteredVacancies = filteredVacancies.filter(el => el.regionname === regionFilterValue)
    }

    if (cityFilterValue) {
        filteredVacancies = filteredVacancies.filter(el => el.placetitle === cityFilterValue)
    }

    if (clientFilterValue) {
        filteredVacancies = filteredVacancies.filter(el => el.clientname === clientFilterValue)
    }

    const regionList: Array<string> = []
    filteredVacancies.map(el => el.regionname && regionList.indexOf(el.regionname) === -1 && regionList.push(el.regionname))

    const cityList: Array<string> = []
    filteredVacancies.map(el => el.placetitle && cityList.indexOf(el.placetitle) === -1 && cityList.push(el.placetitle))

    const clientsList: Array<string> = []
    filteredVacancies.map(el => el.clientname && clientsList.indexOf(el.clientname) === -1 && clientsList.push(el.clientname))


    return (
        <>
            <SearchArea/>
            {isLoading ? <div className="filters-loader"><Loader/></div> :
                <div className="filters">
                    <Filters
                        regionList={regionList}
                        cityList={cityList}
                        clientList={clientsList}
                        regionHandler={setRegionFilterValue}
                        cityHandler={setCityFilterValue}
                        clientHandler={setClientFilterValue}
                    />
                    <Cards vacancies={filteredVacancies}/>
                </div>}
        </>
    )
}
