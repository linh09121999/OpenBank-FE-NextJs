import { AxiosResponse } from "axios"
import api from "../apiOpenBankProject"

export const CreateRegulatedEntity = (): Promise<AxiosResponse> => {
    return api.post(`/obp/v6.0.0/regulated-entities`)
}

export const CreateRegulatedEntityAttribute = (regulated_entity_id: string): Promise<AxiosResponse> => {
    return api.post(`/obp/v6.0.0/regulated-entities/${regulated_entity_id}/attributes`)
}

export const CreateAConsumer_DynamicRegistration = (): Promise<AxiosResponse> => {
    return api.post(`/obp/v6.0.0/dynamic-registration/consumers`)
}

export const DeleteRegulatedEntity = (regulated_entity_id: string): Promise<AxiosResponse> => {
    return api.delete(`/obp/v6.0.0/regulated-entities/${regulated_entity_id}`)
}

export const DeleteRegulatedEntityAttribute = (regulated_entity_id: string, regulated_entity_attribute_id: string): Promise<AxiosResponse> => {
    return api.delete(`/obp/v6.0.0/regulated-entities/${regulated_entity_id}/attributes/${regulated_entity_attribute_id}`)
}

export const GetAllRegulatedEntityAttributes = (regulated_entity_id: string): Promise<AxiosResponse> => {
    return api.get(`/obp/v6.0.0/regulated-entities/${regulated_entity_id}/attributes`)
}

export const GetRegulatedEntities = (): Promise<AxiosResponse> => {
    return api.get(`/obp/v6.0.0/regulated-entities`)
}

export const GetRegulatedEntity = (regulated_entity_id: string): Promise<AxiosResponse> => {
    return api.get(`/obp/v6.0.0/regulated-entities/${regulated_entity_id}`)
}

export const GetRegulatedEntityAttributeByID = (regulated_entity_id: string, regulated_entity_attribute_id: string): Promise<AxiosResponse> => {
    return api.get(`/obp/v6.0.0/regulated-entities/${regulated_entity_id}/attributes/${regulated_entity_attribute_id}`)
}

export const UpdateRegulatedEntityAttribute = (regulated_entity_id: string, regulated_entity_attribute_id: string): Promise<AxiosResponse> => {
    return api.put(`/obp/v6.0.0/regulated-entities/${regulated_entity_id}/attributes/${regulated_entity_attribute_id}`)
}
