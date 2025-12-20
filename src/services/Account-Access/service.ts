import { AxiosResponse } from "axios"
import api from "../apiOpenBankProject"

export const Create_DAuth_UserwithAccountAccess = (bank_id: string, account_id: string, view_id: string): Promise<AxiosResponse> => {
    return api.post(`/obp/v6.0.0/banks/${bank_id}/accounts/${account_id}/views/${view_id}/user-account-access`)
}

export const GrantUserAccessToView = (bank_id: string, account_id: string, view_id: string): Promise<AxiosResponse> => {
    return api.post(`/obp/v6.0.0/banks/${bank_id}/accounts/${account_id}/views/${view_id}/account-access/grant`)
}

export const RevokeUserAccessToView = (bank_id: string, account_id: string, view_id: string): Promise<AxiosResponse> => {
    return api.post(`/obp/v6.0.0/banks/${bank_id}/accounts/${account_id}/views/${view_id}/account-access/revoke`)
}

