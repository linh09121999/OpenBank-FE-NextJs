import { type AxiosResponse } from "axios";
import api from "../apiOpenBankProject";
import { ReqATM, ReqATMAttribute } from "@/types/ATM/request";

export const CreateATM = (data: ReqATM, bank_id: string): Promise<AxiosResponse> => {
    return api.post(`/obp/v6.0.0/banks/${bank_id}/atms`, data)
}

export const CreateATMAttribute = (data: ReqATMAttribute, bank_id: string, atm_id: string): Promise<AxiosResponse> => {
    return api.post(`/obp/v6.0.0/banks/${bank_id}/atms/${atm_id}/attributes`, data)
}

export const DeleteATM = (bank_id: string, atm_id: string): Promise<AxiosResponse> => {
    return api.delete(`/obp/v6.0.0/banks/${bank_id}/atms/${atm_id}`)
}

export const DeleteATMAttribute = (bank_id: string, atm_id: string, atm_attribute_id: string): Promise<AxiosResponse> => {
    return api.delete(`/obp/v6.0.0/banks/${bank_id}/atms/${atm_id}/attributes/${atm_attribute_id}`)
}

export const GetATMAttributeByATM_ATTRIBUTE_ID = (bank_id: string, atm_id: string, atm_attribute_id: string): Promise<AxiosResponse> => {
    return api.get(`/obp/v6.0.0/banks/${bank_id}/atms/${atm_id}/attributes/${atm_attribute_id}`)
}

export const GetATMAttributes = (bank_id: string, atm_id: string): Promise<AxiosResponse> => {
    return api.get(`/obp/v6.0.0/banks/${bank_id}/atms/${atm_id}/attributes`)
}

export const GetBankATM = (bank_id: string, atm_id: string): Promise<AxiosResponse> => {
    return api.get(`/obp/v6.0.0/banks/${bank_id}/atms/${atm_id}`)
}

export const GetBankATMS = (bank_id: string): Promise<AxiosResponse> => {
    return api.get(`/obp/v6.0.0/banks/${bank_id}/atms`)
}

export const HeadBankATMS = (bank_id: string): Promise<AxiosResponse> => {
    return api.get(`/obp/v6.0.0/banks/${bank_id}/atms`)
}

export const UpdateATM = (bank_id: string, atm_id: string): Promise<AxiosResponse> => {
    return api.put(`/obp/v6.0.0/banks/${bank_id}/atms/${atm_id}`)
}

export const UpdateATMAccessibilityFeatures = (bank_id: string, atm_id: string): Promise<AxiosResponse> => {
    return api.put(`/obp/v6.0.0/banks/${bank_id}/atms/${atm_id}/accessibility-features`)
}

export const UpdateATMAttribute = (bank_id: string, atm_id: string, atm_attribute_id: string): Promise<AxiosResponse> => {
    return api.put(`/obp/v6.0.0/banks/${bank_id}/atms/${atm_id}/attributes/${atm_attribute_id}`)
}

export const UpdateATMLocationCategories = (bank_id: string, atm_id: string): Promise<AxiosResponse> => {
    return api.put(`/obp/v6.0.0/banks/${bank_id}/atms/${atm_id}/location-categories`)
}

export const UpdateATMNotes = (bank_id: string, atm_id: string): Promise<AxiosResponse> => {
    return api.put(`/obp/v6.0.0/banks/${bank_id}/atms/${atm_id}/notes`)
}

export const UpdateATMServices = (bank_id: string, atm_id: string): Promise<AxiosResponse> => {
    return api.put(`/obp/v6.0.0/banks/${bank_id}/atms/${atm_id}/services`)
}

export const UpdateATMSupportedCurrencies = (bank_id: string, atm_id: string): Promise<AxiosResponse> => {
    return api.put(`/obp/v6.0.0/banks/${bank_id}/atms/${atm_id}/supported-currencies`)
}

export const UpdateATMSupportedLanguages = (bank_id: string, atm_id: string): Promise<AxiosResponse> => {
    return api.put(`/obp/v6.0.0/banks/${bank_id}/atms/${atm_id}/supported-languages`)
}
