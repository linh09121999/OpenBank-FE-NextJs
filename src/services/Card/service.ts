import { AxiosResponse } from "axios"
import api from "../apiOpenBankProject"

export const CreateCard = (bank_id: string): Promise<AxiosResponse> => {
    return api.post(`/obp/v6.0.0/management/banks/${bank_id}/cards`)
}

export const CreateCardAttribute = (bank_id: string, card_id: string): Promise<AxiosResponse> => {
    return api.post(`/obp/v6.0.0/management/banks/${bank_id}/cards/${card_id}/attribute`)
}

export const CreateOrUpdateCardAttributeDefinition = (bank_id: string): Promise<AxiosResponse> => {
    return api.put(`/obp/v6.0.0/banks/${bank_id}/attribute-definitions/card`)
}

export const DeleteCard = (bank_id: string, card_id: string): Promise<AxiosResponse> => {
    return api.delete(`/obp/v6.0.0/management/banks/${bank_id}/cards/${card_id}`)
}

export const DeleteCardAttributeDefinition = (bank_id: string, attribute_definition_id: string): Promise<AxiosResponse> => {
    return api.delete(`/obp/v6.0.0/banks/${bank_id}/attribute-definitions/${attribute_definition_id}/card`)
}

export const GetCardAttributeDefinition = (bank_id: string): Promise<AxiosResponse> => {
    return api.get(`/obp/v6.0.0/banks/${bank_id}/attribute-definitions/card`)
}

export const GetCardById = (bank_id: string, card_id: string): Promise<AxiosResponse> => {
    return api.get(`/obp/v6.0.0/management/banks/${bank_id}/cards/${card_id}`)
}

export const GetCardsForTheSpecifiedBank = (bank_id: string): Promise<AxiosResponse> => {
    return api.get(`/obp/v6.0.0/management/banks/${bank_id}/cards`)
}

export const GetCardsForTheCurrentUser = (): Promise<AxiosResponse> => {
    return api.get(`/obp/v6.0.0/cards`)
}

export const GetStatusOfCreditCardOrder = (bank_id: string, account_id: string, view_id: string): Promise<AxiosResponse> => {
    return api.get(`/obp/v6.0.0/banks/${bank_id}/accounts/${account_id}/${view_id}/credit_cards/orders`)
}

export const UpdateCard = (bank_id: string, card_id: string): Promise<AxiosResponse> => {
    return api.put(`/obp/v6.0.0/management/banks/${bank_id}/cards/${card_id}`)
}

export const UpdateCardAttribute = (bank_id: string, card_id: string, card_attribute_id: string): Promise<AxiosResponse> => {
    return api.put(`/obp/v6.0.0/management/banks/${bank_id}/cards/${card_id}/attributes/${card_attribute_id}`)
}
