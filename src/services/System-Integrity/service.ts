import { AxiosResponse } from "axios"
import api from "../apiOpenBankProject"

export const CheckCustomViewNames = (): Promise<AxiosResponse> => {
    return api.get(`/obp/v5.1.0/management/system/integrity/custom-view-names-check`)
}

export const CheckSystemViewNames = (): Promise<AxiosResponse> => {
    return api.get(`/obp/v5.1.0/management/system/integrity/system-view-names-check`)
}

export const CheckUniqueIndexAtAccountAccess = (): Promise<AxiosResponse> => {
    return api.get(`/obp/v5.1.0/management/system/integrity/account-access-unique-index-1-check`)
}

export const CheckForOrphanedAccounts = (bank_id: string): Promise<AxiosResponse> => {
    return api.get(`/obp/v5.1.0/management/system/integrity/banks/${bank_id}/orphaned-account-check`)
}

export const CheckForSensibleCurrencies = (bank_id: string): Promise<AxiosResponse> => {
    return api.get(`/obp/v5.1.0/management/system/integrity/banks/${bank_id}/account-currency-check`)
}