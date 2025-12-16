import { AxiosResponse } from "axios"
import api from "../apiOpenBankProject"

export const CreateBankLevelDynamicMessageDoc = (bank_id: string): Promise<AxiosResponse> => {
    return api.post(`/obp/v4.0.0/management/banks/${bank_id}/dynamic-message-docs`)
}

export const CreateDynamicMessageDoc = (): Promise<AxiosResponse> => {
    return api.post(`/obp/v4.0.0/management/dynamic-message-docs`)
}

export const DeleteBankLevelDynamicMessageDoc = (bank_id: string, dynamic_message_doc_id: string): Promise<AxiosResponse> => {
    return api.delete(`/obp/v4.0.0/management/banks/${bank_id}/dynamic-message-docs/${dynamic_message_doc_id}`)
}

export const DeleteDynamicMessageDoc = (dynamic_message_doc_id: string): Promise<AxiosResponse> => {
    return api.delete(`/obp/v4.0.0/management/dynamic-message-docs/${dynamic_message_doc_id}`)
}

export const GetBankLevelDynamicMessageDoc = (bank_id: string, dynamic_message_doc_id: string): Promise<AxiosResponse> => {
    return api.get(`/obp/v4.0.0/management/banks/${bank_id}/dynamic-message-docs/${dynamic_message_doc_id}`)
}

export const GetDynamicMessageDoc = (dynamic_message_doc_id: string): Promise<AxiosResponse> => {
    return api.get(`/obp/v4.0.0/management/dynamic-message-docs/${dynamic_message_doc_id}`)
}

export const GetAllBankLevelDynamicMessageDocs = (bank_id: string): Promise<AxiosResponse> => {
    return api.get(`/obp/v4.0.0/management/banks/${bank_id}/dynamic-message-docs`)
}

export const GetAllDynamicMessageDocs = (): Promise<AxiosResponse> => {
    return api.get(`/obp/v4.0.0/management/dynamic-message-docs`)
}

export const UpdateBankLevelDynamicMessageDoc = (bank_id: string, dynamic_message_doc_id: string): Promise<AxiosResponse> => {
    return api.put(`/obp/v4.0.0/management/banks/${bank_id}/dynamic-message-docs/${dynamic_message_doc_id}`)
}

export const UpdateDynamicMessageDoc = (dynamic_message_doc_id: string): Promise<AxiosResponse> => {
    return api.put(`/obp/v4.0.0/management/dynamic-message-docs/${dynamic_message_doc_id}`)
}