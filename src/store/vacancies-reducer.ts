import {rabotaApi, VacancyType} from "../api/api"
import {Dispatch} from "redux"


const initialState = {
    vacancies: [],
    isLoading: false
}

export const vacanciesReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "SET_VACANCIES":
            return {...state, vacancies: action.vacancies}
        case "DATA-LOADING":
            return {...state, isLoading: action.isLoading}
        default:
            return state
    }
}

export const setDataTC = () =>  async (dispatch: Dispatch) => {
    try {
        dispatch(setDataLoadingAC(true))
        await rabotaApi.getAllVacancies().
            then(res => {
                dispatch(setVacanciesAC(res.data))
        })
        dispatch(setDataLoadingAC(false))
    } catch (err) {
        dispatch(setDataLoadingAC(false))
    }
}

export const setVacanciesAC = (vacancies: Array<VacancyType>) => ({type: "SET_VACANCIES", vacancies} as const)
export const setDataLoadingAC = (isLoading: boolean) => ({type: "DATA-LOADING", isLoading} as const)

type ActionsType = ReturnType<typeof setVacanciesAC> | ReturnType<typeof setDataLoadingAC>

type InitialStateType = {
    vacancies: Array<VacancyType>
    isLoading: boolean
}
