import { AxiosResponse } from "axios"
import api from "../apiOpenBankProject"

export const CreateCounterparty_Explicit = (bank_id: string, account_id: string, view_id: string): Promise<AxiosResponse> => {
    return api.post(`/obp/v4.0.0/banks/${bank_id}/accounts/${account_id}/${view_id}/counterparties`)
}

export const CreateCounterpartyForAnyAccount_Explicit = (bank_id: string, account_id: string, view_id: string): Promise<AxiosResponse> => {
    return api.post(`/obp/v4.0.0/management/banks/${bank_id}/accounts/${account_id}/${view_id}/counterparties`)
}

export const DeleteCounterparty_Explicit = (bank_id: string, account_id: string, view_id: string, counterparty_id: string): Promise<AxiosResponse> => {
    return api.post(`/obp/v4.0.0/banks/${bank_id}/accounts/${account_id}/${view_id}/counterparties/${counterparty_id}`)
}

export const DeleteCounterpartyForAnyAccount_Explicit = (bank_id: string, account_id: string, view_id: string, counterparty_id: string): Promise<AxiosResponse> => {
    return api.delete(`/obp/v4.0.0/management/banks/${bank_id}/accounts/${account_id}/${view_id}/counterparties/${counterparty_id}`)
}

export const GetCounterparties_Explicit = (bank_id: string, account_id: string, view_id: string): Promise<AxiosResponse> => {
    return api.get(`/obp/v4.0.0/banks/${bank_id}/accounts/${account_id}/${view_id}/counterparties`)
}

export const GetCounterpartiesForAnyAccount_Explicit = (bank_id: string, account_id: string, view_id: string): Promise<AxiosResponse> => {
    return api.get(`/obp/v4.0.0/management/banks/${bank_id}/accounts/${account_id}/${view_id}/counterparties`)
}

export const GetCounterpartyById_Explicit = (bank_id: string, account_id: string, view_id: string, counterparty_id: string): Promise<AxiosResponse> => {
    return api.get(`/obp/v4.0.0/banks/${bank_id}/accounts/${account_id}/${view_id}/counterparties/${counterparty_id}`)
}

export const GetCounterpartyByIdForAnyAccount_Explicit = (bank_id: string, account_id: string, view_id: string, counterparty_id: string): Promise<AxiosResponse> => {
    return api.get(`/obp/v4.0.0/management/banks/${bank_id}/accounts/${account_id}/${view_id}/counterparties/${counterparty_id}`)
}

export const GetCounterpartyByNameForAnyAccount_Explicit = (bank_id: string, account_id: string, view_id: string, counterparty_name: string): Promise<AxiosResponse> => {
    return api.get(`/obp/v4.0.0/management/banks/${bank_id}/accounts/${account_id}/${view_id}/counterparty-names/${counterparty_name}`)
}

export const GetOtherAccountById = (bank_id: string, account_id: string, view_id: string, counterparty_id: string): Promise<AxiosResponse> => {
    return api.get(`/obp/v3.0.0/banks/${bank_id}/accounts/${account_id}/${view_id}/other_accounts/${counterparty_id}`)
}

export const GetOtherAccountsOfOneAccount = (bank_id: string, account_id: string, view_id: string): Promise<AxiosResponse> => {
    return api.get(`/obp/v3.0.0/banks/${bank_id}/accounts/${account_id}/${view_id}/other_accounts`)
}
