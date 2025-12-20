import { AxiosResponse } from "axios"
import api from "../apiOpenBankProject"

export const GetPublicAccountbyId = (bank_id: string, account_id: string, view_id: string): Promise<AxiosResponse> => {
    return api.get(`/obp/v6.0.0/banks/${bank_id}/public/accounts/${account_id}/${view_id}/account`)
}

export const GetPublicAccountsAtBank = (bank_id: string): Promise<AxiosResponse> => {
    return api.get(`/obp/v6.0.0/banks/${bank_id}/accounts/public`)
}

export const GetPublicAccountsAtAllBanks = (): Promise<AxiosResponse> => {
    return api.get(`/obp/v6.0.0/accounts/public`)
}
