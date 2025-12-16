import { AxiosResponse } from "axios"
import api from "../apiOpenBankProject"

export const DataWarehouseSearch = (index: string): Promise<AxiosResponse> => {
    return api.post(`/obp/v6.0.0/search/warehouse/${index}`)
}

export const DataWarehouseStatistics = (index: string, field: string): Promise<AxiosResponse> => {
    return api.post(`/obp/v6.0.0/search/warehouse/statistics/${index}/${field}`)
}
