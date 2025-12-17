import { AxiosResponse } from "axios"
import api from "../apiOpenBankProject"

export const CreateUserInvitation = (bank_id: string): Promise<AxiosResponse> => {
    return api.post(`/obp/v4.0.0/banks/${bank_id}/user-invitation`)
}

export const GetUserInvitation = (bank_id: string, secret_link: string): Promise<AxiosResponse> => {
    return api.get(`/obp/v4.0.0/banks/${bank_id}/user-invitations/${secret_link}`)
}

export const GetUserInvitationInformation = (bank_id: string): Promise<AxiosResponse> => {
    return api.post(`/obp/v4.0.0/banks/${bank_id}/user-invitations`)
}

export const GetUserInvitations = (bank_id: string): Promise<AxiosResponse> => {
    return api.get(`/obp/v4.0.0/banks/${bank_id}/user-invitations`)
}
