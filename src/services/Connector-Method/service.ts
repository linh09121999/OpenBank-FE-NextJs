import { AxiosResponse } from "axios"
import api from "../apiOpenBankProject"

export const CreateConnectorMethod = (): Promise<AxiosResponse> => {
    return api.post(`/obp/v6.0.0/management/connector-methods`)
}

export const GetConnectorMethodById = (connector_method_id: string): Promise<AxiosResponse> => {
    return api.get(`/obp/v6.0.0/management/connector-methods/${connector_method_id}`)
}

export const GetAllConnectorMethods = (): Promise<AxiosResponse> => {
    return api.get(`/obp/v6.0.0/management/connector-methods`)
}

export const UpdateConnectorMethod = (connector_method_id: string): Promise<AxiosResponse> => {
    return api.put(`/obp/v6.0.0/management/connector-methods/${connector_method_id}`)
}
