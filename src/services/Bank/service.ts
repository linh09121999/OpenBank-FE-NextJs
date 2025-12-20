import { AxiosResponse } from "axios"
import api from "../apiOpenBankProject"

export const CreateBank = (): Promise<AxiosResponse> => {
    return api.post(`/obp/v5.0.0/banks`)
}

export const CreateBankAttribute = (bank_id: string): Promise<AxiosResponse> => {
    return api.post(`/obp/v6.0.0/banks/${bank_id}/attribute`)
}

export const CreateSettlementAccount = (bank_id: string): Promise<AxiosResponse> => {
    return api.post(`/obp/v6.0.0/banks/${bank_id}/settlement-accounts`)
}

export const CreateTransactionTypeABank = (bank_id: string): Promise<AxiosResponse> => {
    return api.put(`/obp/v6.0.0/banks/${bank_id}/transaction-types`)
}

export const CreateOrUpdateBankAttributeDefinition = (bank_id: string): Promise<AxiosResponse> => {
    return api.put(`/obp/v6.0.0/banks/${bank_id}/attribute-definitions/bank`)
}

export const DeleteBankAttribute = (bank_id: string, bank_attribute_id: string): Promise<AxiosResponse> => {
    return api.delete(`/obp/v6.0.0/banks/${bank_id}/attributes/${bank_attribute_id}`)
}

export const DeleteBankCascade = (bank_id: string): Promise<AxiosResponse> => {
    return api.delete(`/obp/v6.0.0/management/cascading/banks/${bank_id}`)
}

export const GetBank = (bank_id: string): Promise<AxiosResponse> => {
    return api.get(`/obp/v6.0.0/banks/${bank_id}`)
}

export const GetBankAttributeByBANK_ATTRIBUTE_ID = (bank_id: string, bank_attribute_id: string): Promise<AxiosResponse> => {
    return api.get(`/obp/v6.0.0/banks/${bank_id}/attributes/${bank_attribute_id}`)
}

export const GetBankAttributes = (bank_id: string): Promise<AxiosResponse> => {
    return api.get(`/obp/v6.0.0/banks/${bank_id}/attributes`)
}

export const GetSettlementAccountsAtBank = (bank_id: string): Promise<AxiosResponse> => {
    return api.get(`/obp/v6.0.0/banks/${bank_id}/settlement-accounts`)
}

export const GetTransactionTypesAtBank = (bank_id: string): Promise<AxiosResponse> => {
    return api.get(`/obp/v6.0.0/banks/${bank_id}/transaction-types`)
}

export const UpdateBank = (): Promise<AxiosResponse> => {
    return api.put(`/obp/v6.0.0/banks`)
}

export const UpdateBankAttribute = (bank_id: string, bank_attribute_id: string)=> {
    return api.put(`/obp/v6.0.0/banks/${bank_id}/attributes/${bank_attribute_id}`)
}
