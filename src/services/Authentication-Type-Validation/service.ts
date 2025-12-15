import { AxiosResponse } from "axios"
import api from "../apiOpenBankProject"

export const CreateAnAuthenticationTypeValidation = (operation_id: string): Promise<AxiosResponse> => {
    return api.post(`/obp/v6.0.0/management/authentication-type-validations/${operation_id}`)
}

export const DeleteAnAuthenticationTypeValidation = (operation_id: string): Promise<AxiosResponse> => {
    return api.delete(`/obp/v6.0.0/management/authentication-type-validations/${operation_id}`)
}

export const GetAllAuthenticationTypeValidations = (): Promise<AxiosResponse> => {
    return api.get(`/obp/v6.0.0/management/authentication-type-validations`)
}

export const GetAllAuthenticationTypeValidations_Public = () => {
    return api.get(`/obp/v6.0.0/endpoints/authentication-type-validations`)
}

export const GetAnAuthenticationTypeValidation = (operation_id: string): Promise<AxiosResponse> => {
    return api.get(`/obp/v6.0.0/management/authentication-type-validations/${operation_id}`)
}

export const UpdateAnAuthenticationTypeValidation = (operation_id: string): Promise<AxiosResponse> => {
    return api.put(`/obp/v6.0.0/management/authentication-type-validations/${operation_id}`)
}
