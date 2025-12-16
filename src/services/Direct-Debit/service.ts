import { AxiosResponse } from "axios"
import api from "../apiOpenBankProject"

export const CreateDirectDebit = (bank_id: string, account_id: string, view_id: string) => {
    return api.post(`/obp/v6.0.0/banks/${bank_id}/accounts/${account_id}/${view_id}/direct-debit`)
}

export const CreateDirectDebit_management = (bank_id: string, account_id: string): Promise<AxiosResponse> => {
    return api.post(`/obp/v6.0.0/management/banks/${bank_id}/accounts/${account_id}/direct-debit`)
}
