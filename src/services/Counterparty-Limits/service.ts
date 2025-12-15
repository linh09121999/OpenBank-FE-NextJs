import { AxiosResponse } from "axios"
import api from "../apiOpenBankProject"

export const CreateCounterpartyLimit = (bank_id: string, account_id: string, view_id: string, counterparty_id: string) => {
    return api.post(`/obp/v6.0.0/banks/${bank_id}/accounts/${account_id}/views/${view_id}/counterparties/${counterparty_id}/limits`)
}

export const DeleteCounterpartyLimit = (bank_id: string, account_id: string, view_id: string, counterparty_id: string) => {
    return api.delete(`/obp/v6.0.0/banks/${bank_id}/accounts/${account_id}/views/${view_id}/counterparties/${counterparty_id}/limits`)
}

export const GetCounterpartyLimit = (bank_id: string, account_id: string, view_id: string, counterparty_id: string) => {
    return api.get(`/obp/v6.0.0/banks/${bank_id}/accounts/${account_id}/views/${view_id}/counterparties/${counterparty_id}/limits`)
}

export const GetCounterpartyLimitStatus = (bank_id: string, account_id: string, view_id: string, counterparty_id: string) => {
    return api.get(`/obp/v6.0.0/banks/${bank_id}/accounts/${account_id}/views/${view_id}/counterparties/${counterparty_id}/limit-status`)
}

export const UpdateCounterpartyLimit = (bank_id: string, account_id: string, view_id: string, counterparty_id: string) => {
    return api.put(`/obp/v6.0.0/banks/${bank_id}/accounts/${account_id}/views/${view_id}/counterparties/${counterparty_id}/limits`)
}