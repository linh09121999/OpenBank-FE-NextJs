import { AxiosResponse } from "axios"
import api from "../apiOpenBankProject"

export const CreateAJSONSchemaValidation = (operation_id: string): Promise<AxiosResponse> => {
    return api.post(`/obp/v4.0.0/management/json-schema-validations/${operation_id}`)
}

export const DeleteAJSONSchemaValidation = (operation_id: string): Promise<AxiosResponse> => {
    return api.delete(`/obp/v4.0.0/management/json-schema-validations/${operation_id}`)
}

export const GetAJSONSchemaValidation = (operation_id: string): Promise<AxiosResponse> => {
    return api.get(`/obp/v4.0.0/management/json-schema-validations/${operation_id}`)
}

export const GetAllJSONSchemaValidations = (): Promise<AxiosResponse> => {
    return api.get(`/obp/v4.0.0/management/json-schema-validations`)
}

export const GetAllJSONSchemaValidations_Public = (): Promise<AxiosResponse> => {
    return api.get(`/obp/v4.0.0/endpoints/json-schema-validations`)
}

export const UpdateAJSONSchemaValidation = (operation_id: string): Promise<AxiosResponse> => {
    return api.put(`/obp/v4.0.0/management/json-schema-validations/${operation_id}`)
}