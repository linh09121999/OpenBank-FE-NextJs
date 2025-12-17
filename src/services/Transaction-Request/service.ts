import { AxiosResponse } from "axios"
import api from "../apiOpenBankProject"

export const AnswerTransactionRequestChallenge = (bank_id: string, account_id: string, view_id: string, transaction_request_type: string, transaction_request_id: string) => {
    return api.post(`/obp/v4.0.0/banks/${bank_id}/accounts/${account_id}/${view_id}/transaction-request-types/${transaction_request_type}/transaction-requests/${transaction_request_id}/challenge`)
}

export const CreateHistoricalTransactions = (bank_id: string): Promise<AxiosResponse> => {
    return api.post(`/obp/v4.0.0/banks/${bank_id}/management/historical/transactions`)
}

export const CreateTransactionRequest_ACCOUNT = (bank_id: string, account_id: string, view_id: string, account: string) => {
    return api.post(`/obp/v4.0.0/banks/${bank_id}/accounts/${account_id}/${view_id}/transaction-request-types/${account}/transaction-requests`)
}

export const CreateTransactionRequest_ACCOUNT_OTP = (bank_id: string, account_id: string, view_id: string, account_otp: string) => {
    return api.post(`/obp/v4.0.0/banks/${bank_id}/accounts/${account_id}/${view_id}/transaction-request-types/${account_otp}/transaction-requests`)
}

export const CreateTransactionRequest_AGENT_CASH_WITHDRAWAL = (bank_id: string, account_id: string, view_id: string, agent_cash_withdrawal: string) => {
    return api.post(`/obp/v4.0.0/banks/${bank_id}/accounts/${account_id}/${view_id}/transaction-request-types/${agent_cash_withdrawal}/transaction-requests`)
}

export const CreateTransactionRequest_CARD = (card: string) => {
    return api.post(`/obp/v4.0.0/transaction-request-types/${card}/transaction-requests`)
}

export const CreateTransactionRequest_COUNTERPARTY = (bank_id: string, account_id: string, view_id: string, counterparty: string) => {
    return api.post(`/obp/v4.0.0/banks/${bank_id}/accounts/${account_id}/${view_id}/transaction-request-types/${counterparty}/transaction-requests`)
}

export const CreateTransactionRequest_FREE_FORM = (bank_id: string, account_id: string, view_id: string, free_form: string): Promise<AxiosResponse> => {
    return api.post(`/obp/v4.0.0/banks/${bank_id}/accounts/${account_id}/${view_id}/transaction-request-types/${free_form}/transaction-requests`)
}

export const CreateTransactionRequest_REFUND = (bank_id: string, account_id: string, view_id: string, refund: string) => {
    return api.post(`/obp/v4.0.0/banks/${bank_id}/accounts/${account_id}/${view_id}/transaction-request-types/${refund}/transaction-requests`)
}

export const CreateTransactionRequest_SANDBOX_TAN = (bank_id: string, account_id: string, view_id: string, sandbox_tan: string) => {
    return api.post(`/obp/v4.0.0/banks/${bank_id}/accounts/${account_id}/${view_id}/transaction-request-types/${sandbox_tan}/transaction-requests`)
}

export const CreateTransactionRequest_SEPA = (bank_id: string, account_id: string, view_id: string, sepa: string) => {
    return api.post(`/obp/v4.0.0/banks/${bank_id}/accounts/${account_id}/${view_id}/transaction-request-types/${sepa}/transaction-requests`)
}

export const CreateTransactionRequest_SIMPLE = (bank_id: string, account_id: string, view_id: string, simple: string) => {
    return api.post(`/obp/v4.0.0/banks/${bank_id}/accounts/${account_id}/${view_id}/transaction-request-types/${simple}/transaction-requests`)
}

export const CreateTransactionRequestAttribute = (bank_id: string, account_id: string, transaction_request_id: string): Promise<AxiosResponse> => {
    return api.post(`/obp/v4.0.0/banks/${bank_id}/accounts/${account_id}/transaction-requests/${transaction_request_id}/attribute`)
}

export const Create_UpdateTransactionRequestAttributeDefinition = (bank_id: string): Promise<AxiosResponse> => {
    return api.post(`/obp/v4.0.0/banks/${bank_id}/attribute-definitions/transaction-request`)
}

export const DeleteTransactionRequestAttributeDefinition = (bank_id: string, attribute_definition_id: string): Promise<AxiosResponse> => {
    return api.delete(`/obp/v4.0.0/banks/${bank_id}/attribute-definitions/${attribute_definition_id}/transaction-request`)
}

export const GetTransactionRequest = (bank_id: string, account_id: string, view_id: string, transaction_request_id: string) => {
    return api.get(`/obp/v4.0.0/banks/${bank_id}/accounts/${account_id}/${view_id}/transaction-requests/${transaction_request_id}`)
}

export const GetTransactionRequestAttributeById = (bank_id: string, account_id: string, transaction_request_id: string, attribute_id: string): Promise<AxiosResponse> => {
    return api.get(`/obp/v4.0.0/banks/${bank_id}/accounts/${account_id}/transaction-requests/${transaction_request_id}/attributes/${attribute_id}`)
}

export const GetTransactionRequestAttributeDefinition = (bank_id: string): Promise<AxiosResponse> => {
    return api.get(`/obp/v4.0.0/banks/${bank_id}/attribute-definitions/transaction-request`)
}

export const GetTransactionRequestAttributes = (bank_id: string, account_id: string, transaction_request_id: string): Promise<AxiosResponse> => {
    return api.get(`/obp/v4.0.0/banks/${bank_id}/accounts/${account_id}/transaction-requests/${transaction_request_id}/attributes`)
}

export const GetTransactionRequestTypesAtBank = (bank_id: string) => {
    return api.get(`/obp/v4.0.0/banks/${bank_id}/transaction-request-types`)
}

export const GetTransactionRequestTypesForAccount = (bank_id: string, account_id: string, view_id: string) => {
    return api.get(`/obp/v4.0.0/banks/${bank_id}/accounts/${account_id}/${view_id}/transaction-request-types`)
}

export const GetTransactionRequestByID = (transaction_request_id: string): Promise<AxiosResponse> => {
    return api.get(`/obp/v5.1.0/management/transaction-requests/${transaction_request_id}`)
}

export const GetTransactionRequests = (bank_id: string, account_id: string, view_id: string) => {
    return api.get(`/obp/v5.1.0/banks/${bank_id}/accounts/${account_id}/${view_id}/transaction-requests`)
}

export const SaveHistoricalTransactions = (): Promise<AxiosResponse> => {
    return api.post(`/obp/v4.0.0/management/historical/transactions `)
}

export const UpdateTransactionRequestAttribute = (bank_id: string, account_id: string, transaction_request_id: string, attribute_id: string): Promise<AxiosResponse> => {
    return api.put(`/obp/v4.0.0/banks/${bank_id}/accounts/${account_id}/transaction-requests/${transaction_request_id}/attributes/${attribute_id}`)
}

export const UpdateTransactionRequestStatus = (transaction_request_id: string): Promise<AxiosResponse> => {
    return api.put(`/obp/v5.1.0/management/transaction-requests/${transaction_request_id}`)
}
