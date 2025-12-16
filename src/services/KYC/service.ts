import { AxiosResponse } from "axios"
import api from "../apiOpenBankProject"

export const AddKYCCheck = (bank_id: string, customer_id: string, kyc_check_id: string): Promise<AxiosResponse> => {
    return api.put(`/obp/v4.0.0/banks/${bank_id}/customers/${customer_id}/kyc_check/${kyc_check_id}`)
}

export const AddKYCDocument = (bank_id: string, customer_id: string, kyc_document_id: string): Promise<AxiosResponse> => {
    return api.put(`/obp/v4.0.0/banks/${bank_id}/customers/${customer_id}/kyc_documents/${kyc_document_id}`)
}

export const AddKYCMedia = (bank_id: string, customer_id: string, kyc_media_id: string): Promise<AxiosResponse> => {
    return api.put(`/obp/v4.0.0/banks/${bank_id}/customers/${customer_id}/kyc_media/${kyc_media_id}`)
}

export const AddKYCStatus = (bank_id: string, customer_id: string): Promise<AxiosResponse> => {
    return api.put(`/obp/v4.0.0/banks/${bank_id}/customers/${customer_id}/kyc_statuses`)
}

export const GetCustomerKYCChecks = (customer_id: string): Promise<AxiosResponse> => {
    return api.get(`/obp/v4.0.0/customers/${customer_id}/kyc_checks`)
}

export const GetCustomerKYCDocuments = (customer_id: string): Promise<AxiosResponse> => {
    return api.get(`/obp/v4.0.0/customers/${customer_id}/kyc_documents`)
}

export const GetCustomerKYCStatuses = (customer_id: string): Promise<AxiosResponse> => {
    return api.get(`/obp/v4.0.0/customers/${customer_id}/kyc_statuses`)
}

export const GetKYCMediaForACustomer = (customer_id: string): Promise<AxiosResponse> => {
    return api.get(`/obp/v4.0.0/customers/${customer_id}/kyc_media`)
}