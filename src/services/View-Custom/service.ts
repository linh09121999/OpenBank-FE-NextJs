import { AxiosResponse } from "axios"
import api from "../apiOpenBankProject"

export const CreateCustomView = (bank_id: string, account_id: string) => {
    return api.post(`/obp/v4.0.0/banks/${bank_id}/accounts/${account_id}/views`)
}

export const DeleteCustomView = (bank_id: string, account_id: string, view_id: string, target_view_id: string) => {
    return api.delete(`/obp/v5.1.0/banks/${bank_id}/accounts/${account_id}/views/${view_id}/target-views/${target_view_id}`)
}

export const GetAccountAccessForUser = (bank_id: string, account_id: string, provider: string, provider_id: string) => {
    return api.get(`/obp/v4.0.0/banks/${bank_id}/accounts/${account_id}/permissions/${provider}/${provider_id}`)
}

export const GetCustomView = (bank_id: string, account_id: string, view_id: string, target_view_id: string) => {
    return api.get(`/obp/v5.1.0/banks/${bank_id}/accounts/${account_id}/views/${view_id}/target-views/${target_view_id}`)
}

export const GetViewsForAccount = (bank_id: string, account_id: string) => {
    return api.get(`/obp/v5.0.0/banks/${bank_id}/accounts/${account_id}/views`)
}

export const GetAccess = (bank_id: string, account_id: string) => {
    return api.get(`/obp/v4.0.0/banks/${bank_id}/accounts/${account_id}/permissions`)
}

export const UpdateCustomView = (bank_id: string, account_id: string, view_id: string, target_view_id: string) => {
    return api.put(`/obp/v5.1.0/banks/${bank_id}/accounts/${account_id}/views/${view_id}/target-views/${target_view_id}`)
}