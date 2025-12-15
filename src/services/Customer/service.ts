import { AxiosResponse } from "axios"
import api from "../apiOpenBankProject"

export const CreateAddress = (bank_id: string, customer_id: string): Promise<AxiosResponse> => {
    return api.post(`/obp/v3.1.0/banks/${bank_id}/customers/${customer_id}/address`)
}

export const CreateAgent = (bank_id: string) => {
    return api.post(`/obp/v6.0.0/banks/${bank_id}/agents`)
}

export const CreateCustomer = (bank_id: string): Promise<AxiosResponse> => {
    return api.post(`/obp/v5.0.0/banks/${bank_id}/customers`)
}

export const CreateCustomerAccountLink = (bank_id: string): Promise<AxiosResponse> => {
    return api.post(`/obp/v5.0.0/banks/${bank_id}/customer-account-links`)
}

export const CreateCustomerAttribute = (bank_id: string, customer_id: string): Promise<AxiosResponse> => {
    return api.post(`/obp/v4.0.0/banks/${bank_id}/customers/${customer_id}/attribute`)
}

export const CreateCustomerSocialMediaHandle = (bank_id: string, customer_id: string): Promise<AxiosResponse> => {
    return api.post(`/obp/v2.1.0/banks/${bank_id}/customers/${customer_id}/social_media_handles`)
}

export const CreateTaxResidence = (bank_id: string, customer_id: string): Promise<AxiosResponse> => {
    return api.post(`/obp/v3.1.0/banks/${bank_id}/customers/${customer_id}/tax-residence`)
}

export const CreateUserCustomerLink = (bank_id: string): Promise<AxiosResponse> => {
    return api.post(`/obp/v4.0.0/banks/${bank_id}/user_customer_links`)
}

export const CreateOrUpdateCustomerAttributeDefinition = (bank_id: string): Promise<AxiosResponse> => {
    return api.put(`/obp/v4.0.0/banks/${bank_id}/attribute-definitions/customer`)
}

export const DeleteCustomerAccountLink = (bank_id: string, customer_account_link_id: string): Promise<AxiosResponse> => {
    return api.delete(`/obp/v5.0.0/banks/${bank_id}/customer-account-links/${customer_account_link_id}`)
}

export const DeleteCustomerAddress = (bank_id: string, customer_id: string, customer_address_id: string): Promise<AxiosResponse> => {
    return api.delete(`/obp/v3.1.0/banks/${bank_id}/customers/${customer_id}/addresses/${customer_address_id}`)
}

export const DeleteCustomerAttribute = (bank_id: string, customer_id: string, customer_attribute_id: string): Promise<AxiosResponse> => {
    return api.delete(`/obp/v4.0.0/banks/${bank_id}/${customer_id}/attributes/${customer_attribute_id}`)
}

export const DeleteCustomerAttributeDefinition = (bank_id: string, attribute_definition_id: string): Promise<AxiosResponse> => {
    return api.delete(`/obp/v4.0.0/banks/${bank_id}/attribute-definitions/${attribute_definition_id}/customer`)
}

export const DeleteCustomerCascade = (bank_id: string, customer_id: string): Promise<AxiosResponse> => {
    return api.delete(`/obp/v4.0.0/management/cascading/banks/${bank_id}/customers/${customer_id}`)
}

export const DeleteTaxResidence = (bank_id: string, customer_id: string, tax_residence_id: string): Promise<AxiosResponse> => {
    return api.delete(`/obp/v3.1.0/banks/${bank_id}/customers/${customer_id}/tax_residencies/${tax_residence_id}`)
}

export const DeleteUserCustomerLink = (bank_id: string, user_customer_link_id: string): Promise<AxiosResponse> => {
    return api.delete(`/obp/v4.0.0/banks/${bank_id}/user_customer_links/${user_customer_link_id}`)
}

export const GetCRMEvents = (bank_id: string) => {
    return api.get(`/obp/v2.1.0/banks/${bank_id}/crm-events`)
}

export const GetCorrelatedEntitiesForTheCurrentUser = () => {
    return api.get(`/obp/v4.0.0/my/correlated-entities`)
}

export const GetCorrelatedUserInfoByCustomer = (bank_id: string, customer_id: string): Promise<AxiosResponse> => {
    return api.get(`/obp/v4.0.0/banks/${bank_id}/customers/${customer_id}/correlated-users`)
}

export const GetCustomerAccountLinkById = (bank_id: string, customer_account_link_id: string): Promise<AxiosResponse> => {
    return api.get(`/obp/v5.0.0/banks/${bank_id}/customer-account-links/${customer_account_link_id}`)
}

export const GetCustomerAccountLinksByACCOUNT_ID = (bank_id: string, account_id: string): Promise<AxiosResponse> => {
    return api.get(`/obp/v5.0.0/banks/${bank_id}/accounts/${account_id}/customer-account-links`)
}

export const GetCustomerAccountLinksByCUSTOMER_ID = (bank_id: string, customer_id: string): Promise<AxiosResponse> => {
    return api.get(`/obp/v5.0.0/banks/${bank_id}/customers/${customer_id}/customer-account-links`)
}

export const GetCustomerAddresses = (bank_id: string, customer_id: string): Promise<AxiosResponse> => {
    return api.get(`/obp/v3.1.0/banks/${bank_id}/customers/${customer_id}/addresses`)
}

export const GetCustomerAttributeById = (bank_id: string, customer_id: string, attribute_id: string): Promise<AxiosResponse> => {
    return api.get(`/obp/v4.0.0/banks/${bank_id}/customers/${customer_id}/attributes/${attribute_id}`)
}

export const GetCustomerAttributeDefinition = (bank_id: string): Promise<AxiosResponse> => {
    return api.get(`/obp/v4.0.0/banks/${bank_id}/attribute-definitions/customer`)
}

export const GetCustomerAttributes = (bank_id: string, customer_id: string): Promise<AxiosResponse> => {
    return api.get(`/obp/v4.0.0/banks/${bank_id}/customers/${customer_id}/attributes`)
}

export const GetCustomerOverview = (bank_id: string): Promise<AxiosResponse> => {
    return api.post(`/obp/v5.0.0/banks/${bank_id}/customers/customer-number-query/overview`)
}

export const GetCustomerOverviewFlat = (bank_id: string): Promise<AxiosResponse> => {
    return api.post(`/obp/v5.0.0/banks/${bank_id}/customers/customer-number-query/overview-flat`)
}

export const GetCustomerSocialMediaHandles = (bank_id: string, customer_id: string): Promise<AxiosResponse> => {
    return api.get(`/obp/v2.1.0/banks/${bank_id}/customers/${customer_id}/social_media_handles`)
}

export const GetCustomerByCUSTOMER_ID = (bank_id: string, customer_id: string): Promise<AxiosResponse> => {
    return api.get(`/obp/v3.1.0/banks/${bank_id}/customers/${customer_id}`)
}

export const GetCustomerByCUSTOMER_NUMBER = (bank_id: string): Promise<AxiosResponse> => {
    return api.get(`/obp/v3.1.0/banks/${bank_id}/customers/customer-number`)
}

export const  = (): Promise<AxiosResponse> => {
    return api.(``)
}

export const  = (): Promise<AxiosResponse> => {
    return api.(``)
}

export const  = (): Promise<AxiosResponse> => {
    return api.(``)
}

export const  = (): Promise<AxiosResponse> => {
    return api.(``)
}

export const  = (): Promise<AxiosResponse> => {
    return api.(``)
}

export const  = (): Promise<AxiosResponse> => {
    return api.(``)
}

export const  = (): Promise<AxiosResponse> => {
    return api.(``)
}

export const  = (): Promise<AxiosResponse> => {
    return api.(``)
}

export const  = (): Promise<AxiosResponse> => {
    return api.(``)
}

export const  = (): Promise<AxiosResponse> => {
    return api.(``)
}

export const  = (): Promise<AxiosResponse> => {
    return api.(``)
}

export const  = (): Promise<AxiosResponse> => {
    return api.(``)
}

export const  = (): Promise<AxiosResponse> => {
    return api.(``)
}

export const  = (): Promise<AxiosResponse> => {
    return api.(``)
}