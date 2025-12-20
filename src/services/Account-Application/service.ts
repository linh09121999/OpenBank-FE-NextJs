import { AxiosResponse } from "axios"
import api from "../apiOpenBankProject"

export const CreateAccountApplication = (bank_id: string): Promise<AxiosResponse> => {
    return api.post(`/obp/v6.0.0/banks/${bank_id}/account-applications`)
}

export const GetAccountApplicationbyId = (bank_id: string, account_application_id: string): Promise<AxiosResponse> => {
    return api.get(`/obp/v6.0.0/banks/${bank_id}/account-applications/${account_application_id}`)
}

export const GetAccountApplications = (bank_id: string): Promise<AxiosResponse> => {
    return api.get(`/obp/v6.0.0/banks/${bank_id}/account-applications`)
}

export const UpdateAccountApplicationStatus = (bank_id: string, account_application_id: string): Promise<AxiosResponse> => {
    return api.put(`/obp/v6.0.0/banks/${bank_id}/account-applications/${account_application_id}`)
}
