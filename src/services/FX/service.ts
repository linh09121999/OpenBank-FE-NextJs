import { AxiosResponse } from "axios"
import api from "../apiOpenBankProject"

export const CreateFx = (bank_id: string): Promise<AxiosResponse> => {
    return api.put(`/obp/v4.0.0/banks/${bank_id}/fx`)
}

export const GetCurrenciesAtABank = (bank_id: string): Promise<AxiosResponse> => {
    return api.get(`/obp/v5.1.0/banks/${bank_id}/currencies`)
}

export const GetCurrentFxRate = (bank_id: string, from_currency_code: string, to_currency_code: string): Promise<AxiosResponse> => {
    return api.get(`/obp/v4.0.0/banks/${bank_id}/fx/${from_currency_code}/${to_currency_code}`)
}
