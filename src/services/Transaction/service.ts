import { AxiosResponse } from "axios"
import api from "../apiOpenBankProject"

export const CreateTransactionAttribute = (bank_id: string, account_id: string, transaction_id: string): Promise<AxiosResponse> => {
    return api.post(`/obp/v4.0.0/banks/${bank_id}/accounts/${account_id}/transactions/${transaction_id}/attribute`)
}

export const Create_UpdateTransactionAttributeDefinition = (bank_id: string): Promise<AxiosResponse> => {
    return api.put(`/obp/v4.0.0/banks/${bank_id}/attribute-definitions/transaction`)
}

export const DeleteTransactionAttributeDefinition = (bank_id: string, attribute_definition_id: string): Promise<AxiosResponse> => {
    return api.delete(`/obp/v4.0.0/banks/${bank_id}/attribute-definitions/${attribute_definition_id}/transaction`)
}

export const DeleteTransactionCascade = (bank_id: string, account_id: string, transaction_id: string): Promise<AxiosResponse> => {
    return api.delete(`/obp/v4.0.0/management/cascading/banks/${bank_id}/accounts/${account_id}/transactions/${transaction_id}`)
}

export const GetBalancingTransaction = (transaction_id: string) => {
    return api.get(`/obp/v4.0.0/transactions/${transaction_id}/balancing-transaction`)
}

export const GetDoubleEntryTransaction = (bank_id: string, account_id: string, view_id: string, transaction_id: string): Promise<AxiosResponse> => {
    return api.get(`/obp/v4.0.0/banks/${bank_id}/accounts/${account_id}/${view_id}/transactions/${transaction_id}/double-entry-transaction`)
}

export const GetFirehoseTransactionsForAccount = (bank_id: string, account_id: string, view_id: string): Promise<AxiosResponse> => {
    return api.get(`/obp/v4.0.0/banks/${bank_id}/firehose/accounts/${account_id}/views/${view_id}/transactions`)
}

export const GetOtherAccountOfTransaction = (bank_id: string, account_id: string, view_id: string, transaction_id: string) => {
    return api.get(`/obp/v4.0.0/banks/${bank_id}/accounts/${account_id}/${view_id}/transactions/${transaction_id}/other_account`)
}

export const GetTransactionAttributeById = (bank_id: string, account_id: string, transaction_id: string, attribute_id: string): Promise<AxiosResponse> => {
    return api.get(`/obp/v4.0.0/banks/${bank_id}/accounts/${account_id}/transactions/${transaction_id}/attributes/${attribute_id}`)
}

export const GetTransactionAttributeDefinition = (bank_id: string): Promise<AxiosResponse> => {
    return api.get(`/obp/v4.0.0/banks/${bank_id}/attribute-definitions/transaction`)
}

export const GetTransactionAttributes = (bank_id: string, account_id: string, transaction_id: string): Promise<AxiosResponse> => {
    return api.get(`/obp/v4.0.0/banks/${bank_id}/accounts/${account_id}/transactions/${transaction_id}/attributes`)
}

export const GetTransactionById = (bank_id: string, account_id: string, view_id: string, transaction_id: string) => {
    return api.get(`/obp/v4.0.0/banks/${bank_id}/accounts/${account_id}/${view_id}/transactions/${transaction_id}/transaction`)
}

export const GetTransactionsForAccount_Core = (bank_id: string, account_id: string) => {
    return api.get(`/obp/v4.0.0/my/banks/${bank_id}/accounts/${account_id}/transactions`)
}

export const GetTransactionsForAccount_Full = (bank_id: string, account_id: string, view_id: string) => {
    return api.get(`/obp/v4.0.0/banks/${bank_id}/accounts/${account_id}/${view_id}/transactions`)
}

export const UpdateTransactionAttribute = (bank_id: string, account_id: string, transaction_id: string, account_attribute_id: string): Promise<AxiosResponse> => {
    return api.put(`/obp/v4.0.0/banks/${bank_id}/accounts/${account_id}/transactions/${transaction_id}/attributes/${account_attribute_id}`)
}