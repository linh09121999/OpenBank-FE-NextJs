import { AxiosResponse } from "axios"
import api from "../apiOpenBankProject"

export const CreateStandingOrder = (bank_id: string, account_id: string, view_id: string): Promise<AxiosResponse> => {
    return api.post(`/obp/v4.0.0/banks/${bank_id}/accounts/${account_id}/${view_id}/standing-order`)
}

export const CreateStandingOrderManagement = (bank_id: string, account_id: string): Promise<AxiosResponse> => {
    return api.post(`/obp/v4.0.0/management/banks/${bank_id}/accounts/${account_id}/standing-order`)
}
