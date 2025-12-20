import { AxiosResponse } from "axios"
import api from "../apiOpenBankProject"

export const CreateBankLevelDynamicEndpoint = (bank_id: string): Promise<AxiosResponse> => {
    return api.post(`/obp/v4.0.0/management/banks/${bank_id}/dynamic-endpoints`)
}

export const CreateDynamicEndpoint = (): Promise<AxiosResponse> => {
    return api.post(`/obp/v4.0.0/management/dynamic-endpoints`)
}

export const DeleteBankLevelDynamicEndpoint = (bank_id: string, dynamic_endpoint_id: string): Promise<AxiosResponse> => {
    return api.delete(`/obp/v4.0.0/management/banks/${bank_id}/dynamic-endpoints/${dynamic_endpoint_id}`)
}

export const DeleteDynamicEndpoint = (dynamic_endpoint_id: string): Promise<AxiosResponse> => {
    return api.delete(`/obp/v4.0.0/management/dynamic-endpoints/${dynamic_endpoint_id}`)
}

export const DeleteMyDynamicEndpoint = (dynamic_endpoint_id: string): Promise<AxiosResponse> => {
    return api.delete(`/obp/v4.0.0/my/dynamic-endpoints/${dynamic_endpoint_id}`)
}

export const GetBankLevelDynamicEndpoint = (bank_id: string, dynamic_endpoint_id: string): Promise<AxiosResponse> => {
    return api.get(`/obp/v4.0.0/management/banks/${bank_id}/dynamic-endpoints/${dynamic_endpoint_id}`)
}

export const GetBankLevelDynamicEndpoints = (bank_id: string): Promise<AxiosResponse> => {
    return api.get(`/obp/v4.0.0/management/banks/${bank_id}/dynamic-endpoints`)
}

export const GetDynamicEndpoint = (dynamic_endpoint_id: string): Promise<AxiosResponse> => {
    return api.get(`/obp/v4.0.0/management/dynamic-endpoints/${dynamic_endpoint_id}`)
}

export const GetDynamicEndpoints = (): Promise<AxiosResponse> => {
    return api.get(`/obp/v4.0.0/management/dynamic-endpoints`)
}

export const GetMyDynamicEndpoints = (): Promise<AxiosResponse> => {
    return api.get(`/obp/v4.0.0/my/dynamic-endpoints`)
}

export const UpdateBankLevelDynamicEndpointHost = (bank_id: string, dynamic_endpoint_id: string): Promise<AxiosResponse> => {
    return api.put(`/obp/v4.0.0/management/banks/${bank_id}/dynamic-endpoints/${dynamic_endpoint_id}/host`)
}

export const UpdateDynamicEndpointHost = (dynamic_endpoint_id: string): Promise<AxiosResponse> => {
    return api.put(`/obp/v4.0.0/management/dynamic-endpoints/${dynamic_endpoint_id}/host`)
}