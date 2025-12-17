import { AxiosResponse } from "axios"
import api from "../apiOpenBankProject"

export const AddPermissionToASystemView = (view_id: string): Promise<AxiosResponse> => {
    return api.post(`/obp/v5.1.0/system-views/${view_id}/permissions`)
}

export const CreateSystemView = (): Promise<AxiosResponse> => {
    return api.post(`/obp/v5.0.0/system-views`)
}

export const DeletePermissionToASystemView = (view_id: string, permission_name: string): Promise<AxiosResponse> => {
    return api.delete(`/obp/v5.1.0/system-views/${view_id}/permissions/${permission_name}`)
}

export const DeleteSystemView = (view_id: string): Promise<AxiosResponse> => {
    return api.delete(`/obp/v5.0.0/system-views/${view_id}`)
}

export const GetIdsOfSystemViews = (): Promise<AxiosResponse> => {
    return api.get(`/obp/v5.0.0/system-views-ids`)
}

export const GetSystemView = (view_id: string): Promise<AxiosResponse> => {
    return api.get(`/obp/v5.0.0/system-views/${view_id}`)
}

export const UpdateSystemView = (view_id: string): Promise<AxiosResponse> => {
    return api.put(`/obp/v5.0.0/system-views/${view_id}`)
}