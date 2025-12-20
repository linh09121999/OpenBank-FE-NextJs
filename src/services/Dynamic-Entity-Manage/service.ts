import { AxiosResponse } from "axios"
import api from "../apiOpenBankProject"

export const CreateBankLevelDynamicEntity = (bank_id: string): Promise<AxiosResponse> => {
    return api.post(`/obp/v4.0.0/management/banks/${bank_id}/dynamic-entities`)
}

export const CreateSystemLevelDynamicEntity = (): Promise<AxiosResponse> => {
    return api.post(`/obp/v4.0.0/management/system-dynamic-entities`)
}

export const DeleteBankLevelDynamicEntity = (bank_id: string, dynamic_entity_id: string): Promise<AxiosResponse> => {
    return api.delete(`/obp/v4.0.0/management/banks/${bank_id}/dynamic-entities/${dynamic_entity_id}`)
}

export const DeleteMyDynamicEntity = (dynamic_entity_id: string): Promise<AxiosResponse> => {
    return api.delete(`/obp/v4.0.0/my/dynamic-entities/${dynamic_entity_id}`)
}

export const DeleteSystemLevelDynamicEntity = (dynamic_entity_id: string): Promise<AxiosResponse> => {
    return api.delete(`/obp/v4.0.0/management/system-dynamic-entities/${dynamic_entity_id}`)
}

export const GetBankLevelDynamicEntities = (bank_id: string): Promise<AxiosResponse> => {
    return api.get(`/obp/v4.0.0/management/banks/${bank_id}/dynamic-entities`)
}

export const GetMyDynamicEntities = (): Promise<AxiosResponse> => {
    return api.get(`/obp/v4.0.0/my/dynamic-entities`)
}

export const GetSystemDynamicEntities = (): Promise<AxiosResponse> => {
    return api.get(`/obp/v4.0.0/management/system-dynamic-entities`)
}

export const UpdateBankLevelDynamicEntity = (bank_id: string, dynamic_entity_id: string): Promise<AxiosResponse> => {
    return api.put(`/obp/v4.0.0/management/banks/${bank_id}/dynamic-entities/${dynamic_entity_id}`)
}

export const UpdateMyDynamicEntity = (dynamic_entity_id: string): Promise<AxiosResponse> => {
    return api.put(`/obp/v4.0.0/my/dynamic-entities/${dynamic_entity_id}`)
}

export const UpdateSystemLevelDynamicEntity = (dynamic_entity_id: string): Promise<AxiosResponse> => {
    return api.put(`/obp/v4.0.0/management/system-dynamic-entities/${dynamic_entity_id}`)
}