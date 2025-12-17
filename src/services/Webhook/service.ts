import { AxiosResponse } from "axios"
import api from "../apiOpenBankProject"

export const CreateAnAccountWebhook = (bank_id: string): Promise<AxiosResponse> => {
    return api.post(`/obp/v4.0.0/banks/${bank_id}/account-web-hooks`)
}

export const CreateBankLevelAccountNotificationWebhook = (bank_id: string): Promise<AxiosResponse> => {
    return api.post(`/obp/v4.0.0/banks/${bank_id}/web-hooks/account/notifications/on-create-transaction`)
}

export const CreateSystemLevelAccountNotificationWebhook = (): Promise<AxiosResponse> => {
    return api.post(`/obp/v4.0.0/web-hooks/account/notifications/on-create-transaction`)
}

export const Enable_DisableAnAccountWebhook = (bank_id: string): Promise<AxiosResponse> => {
    return api.put(`/obp/v4.0.0/banks/${bank_id}/account-web-hooks`)
}

export const GetAccountWebhooks = (bank_id: string): Promise<AxiosResponse> => {
    return api.get(`/obp/v4.0.0/management/banks/${bank_id}/account-web-hooks`)
}