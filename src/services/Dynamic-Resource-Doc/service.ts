import { AxiosResponse } from "axios"
import api from "../apiOpenBankProject"

export const CreateBankLevelDynamicResourceDoc = (bank_id: string): Promise<AxiosResponse> => {
    return api.post(`/obp/v4.0.0/management/banks/${bank_id}/dynamic-resource-docs`)
}

export const CreateDynamicResourceDoc = (): Promise<AxiosResponse> => {
    return api.post(`/obp/v4.0.0/management/dynamic-resource-docs`)
}

export const CreateDynamicResourceDocEndpointCode = () => {
    return api.post(`/obp/v4.0.0/management/dynamic-resource-docs/endpoint-code`)
}

export const DeleteBankLevelDynamicResourceDoc = (bank_id: string): Promise<AxiosResponse> => {
    return api.delete(`/obp/v4.0.0/management/banks/${bank_id}/dynamic-resource-docs/DYNAMIC-RESOURCE-DOC-ID`)
}

export const DeleteDynamicResourceDoc = (): Promise<AxiosResponse> => {
    return api.delete(`/obp/v4.0.0/management/dynamic-resource-docs/DYNAMIC-RESOURCE-DOC-ID`)
}

export const GetBankLevelDynamicResourceDocById = (bank_id: string): Promise<AxiosResponse> => {
    return api.get(`/obp/v4.0.0/management/banks/${bank_id}/dynamic-resource-docs/DYNAMIC-RESOURCE-DOC-ID`)
}

export const GetDynamicResourceDocById = (): Promise<AxiosResponse> => {
    return api.get(`/obp/v4.0.0/management/dynamic-resource-docs/DYNAMIC-RESOURCE-DOC-ID`)
}

export const GetAllBankLevelDynamicResourceDocs = (bank_id: string): Promise<AxiosResponse> => {
    return api.get(`/obp/v4.0.0/management/banks/${bank_id}/dynamic-resource-docs`)
}

export const GetAllDynamicResourceDocs = (): Promise<AxiosResponse> => {
    return api.get(`/obp/v4.0.0/management/dynamic-resource-docs`)
}

export const UpdateBankLevelDynamicResourceDoc = (bank_id: string): Promise<AxiosResponse> => {
    return api.put(`/obp/v4.0.0/management/banks/${bank_id}/dynamic-resource-docs/DYNAMIC-RESOURCE-DOC-ID`)
}

export const UpdateDynamicResourceDoc = (): Promise<AxiosResponse> => {
    return api.put(`/obp/v4.0.0/management/dynamic-resource-docs/DYNAMIC-RESOURCE-DOC-ID`)
}