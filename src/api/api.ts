import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://gsr-rabota.ru/api/v2',
})


export const rabotaApi = {
    getAllVacancies() {
        return instance.get<Array<VacancyType>>('/GetAllVacancies')
    }
}

export type VacancyType = {
    address: string
    baseindex: number
    clientid: number
    clientname: string
    directionid: number
    directiontitle: string
    flghot: number
    flgstemmer: number
    is_active: number
    latitude: number
    longitude: number
    numentries: number | null
    numgeoentries: number | null
    placeid: number
    placetitle: string
    profid: number
    proftitle: string
    region_id: number
    regionname: string
    salary_day: number
    salary_hour: number | null
    salary_month: number | null
    salary_type: number
    salary_type_title: string
    salary_volume: string
    salary_volume_ex: string
    salary_week: number | null
    search_desc: string
    search_geo: string
    stafftype: number
    stationname: number | null
    vacancy_id: number
    vacplacement_id: number
    vdescription: "Требуются работники торгового зала в сеть гипермаркетов "
    websitevacancynum: "020152"
}
