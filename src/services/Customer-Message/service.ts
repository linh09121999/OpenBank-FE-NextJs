import { AxiosResponse } from "axios"
import api from "../apiOpenBankProject"

export const CreateCustomerMessage = (bank_id: string, customer_id: string): Promise<AxiosResponse> => {
    return api.post(`/obp/v6.0.0/banks/${bank_id}/customer/${customer_id}/messages`)
}

export const GetCustomerMessagesForACustomer = (bank_id: string, customer_id: string): Promise<AxiosResponse> => {
    return api.get(`/obp/v6.0.0/banks/${bank_id}/customer/${customer_id}/messages`)
}

export const GetCustomerMessagesForAllCustomers = (bank_id: string): Promise<AxiosResponse> => {
    return api.get(`/obp/v6.0.0/banks/${bank_id}/customer/messages`)
}