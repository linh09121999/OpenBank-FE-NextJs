import { AxiosResponse } from "axios"
import api from "../apiOpenBankProject"

export const CreateMethodRouting = (): Promise<AxiosResponse> => {
    return api.post(`/obp/v4.0.0/management/method_routings`)
}

export const DeleteMethodRouting = (method_routing_id: string): Promise<AxiosResponse> => {
    return api.delete(`/obp/v4.0.0/management/method_routings/${method_routing_id}`)
}

export const GetMethodRoutings = (): Promise<AxiosResponse> => {
    return api.get(`/obp/v4.0.0/management/method_routings`)
}

export const UpdateMethodRouting = (method_routing_id: string): Promise<AxiosResponse> => {
    return api.put(`/obp/v4.0.0/management/method_routings/${method_routing_id}`)
}
