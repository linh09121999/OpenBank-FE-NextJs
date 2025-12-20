import { AxiosResponse } from "axios"
import api from "../apiOpenBankProject"

export const CreateAConsumer = (): Promise<AxiosResponse> => {
    return api.post(`/obp/v6.0.0/my/consumers`)
}

export const EnableOrDisableConsumers = (consumer_id: string): Promise<AxiosResponse> => {
    return api.put(`/obp/v6.0.0/management/consumers/${consumer_id}`)
}

export const GetConsumer = (consumer_id: string): Promise<AxiosResponse> => {
    return api.get(`/obp/v6.0.0/management/consumers/${consumer_id}`)
}

export const GetConsumers = (): Promise<AxiosResponse> => {
    return api.get(`/obp/v6.0.0/management/consumers`)
}

export const GetConsumers_LoggedInUser = (): Promise<AxiosResponse> => {
    return api.get(`/obp/v6.0.0/management/users/current/consumers`)
}

export const GetRateLimitsForAConsumer = (consumer_id: string): Promise<AxiosResponse> => {
    return api.get(`/obp/v6.0.0/management/consumers/${consumer_id}/consumer/call-limits`)
}

export const SetRateLimits_CallLimitsPerConsumer = (consumer_id: string): Promise<AxiosResponse> => {
    return api.put(`/obp/v6.0.0/management/consumers/${consumer_id}/consumer/call-limits`)
}

export const UpdateConsumerCertificate = (consumer_id: string): Promise<AxiosResponse> => {
    return api.put(`/obp/v6.0.0/management/consumers/${consumer_id}/consumer/certificate`)
}

export const UpdateConsumerLogoURL = (consumer_id: string): Promise<AxiosResponse> => {
    return api.put(`/obp/v6.0.0/management/consumers/${consumer_id}/consumer/logo_url`)
}

export const UpdateConsumerName = (consumer_id: string): Promise<AxiosResponse> => {
    return api.put(`/obp/v6.0.0/management/consumers/${consumer_id}/consumer/name`)
}

export const UpdateConsumerRedirectURL = (consumer_id: string): Promise<AxiosResponse> => {
    return api.put(`/obp/v6.0.0/management/consumers/${consumer_id}/consumer/redirect_url`)
}
