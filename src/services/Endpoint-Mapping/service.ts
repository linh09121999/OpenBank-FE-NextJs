import { AxiosResponse } from "axios"
import api from "../apiOpenBankProject"

export const CreateBankLevelEndpointMapping = (bank_id: string): Promise<AxiosResponse> => {
    return api.post(`/obp/v4.0.0/management/banks/${bank_id}/endpoint-mappings`)
}

export const CreateEndpointMapping = (): Promise<AxiosResponse> => {
    return api.post(`/obp/v4.0.0/management/endpoint-mappings`)
}

export const DeleteBankLevelEndpointMapping = (bank_id: string, endpoint_mapping_id: string): Promise<AxiosResponse> => {
    return api.delete(`/obp/v4.0.0/management/banks/${bank_id}/endpoint-mappings/${endpoint_mapping_id}`)
}

export const DeleteEndpointMapping = (endpoint_mapping_id: string): Promise<AxiosResponse> => {
    return api.delete(`/obp/v4.0.0/management/endpoint-mappings/${endpoint_mapping_id}`)
}

export const GetBankLevelEndpointMapping = (bank_id: string, endpoint_mapping_id: string): Promise<AxiosResponse> => {
    return api.get(`/obp/v4.0.0/management/banks/${bank_id}/endpoint-mappings/${endpoint_mapping_id}`)
}

export const GetEndpointMappingById = (endpoint_mapping_id: string): Promise<AxiosResponse> => {
    return api.get(`/obp/v4.0.0/management/endpoint-mappings/${endpoint_mapping_id}`)
}

export const GetAllBankLevelEndpointMappings = (bank_id: string): Promise<AxiosResponse> => {
    return api.get(`/obp/v4.0.0/management/banks/${bank_id}/endpoint-mappings`)
}

export const GetAllEndpointMappings = (): Promise<AxiosResponse> => {
    return api.get(`/obp/v4.0.0/management/endpoint-mappings`)
}

export const UpdateBankLevelEndpointMapping = (bank_id: string, endpoint_mapping_id: string): Promise<AxiosResponse> => {
    return api.put(`/obp/v4.0.0/management/banks/${bank_id}/endpoint-mappings/${endpoint_mapping_id}`)
}

export const UpdateEndpointMapping = (endpoint_mapping_id: string): Promise<AxiosResponse> => {
    return api.put(`/obp/v4.0.0/management/endpoint-mappings/${endpoint_mapping_id}`)
}
