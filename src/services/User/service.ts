import { AxiosResponse } from "axios"
import api from "../apiOpenBankProject"

export const AnswerUserAuthContextUpdateChallenge = (bank_id: string, auth_context_update_id: string) => {
    return api.post(`/obp/v5.0.0/banks/${bank_id}/users/current/auth-context-updates/${auth_context_update_id}/challenge`)
}

export const CreateMyPersonalUserAttribute = () => {
    return api.post(`/obp/v4.0.0/my/user/attributes`)
}

export const CreateNonPersonalUserAttribute = (user_id: string): Promise<AxiosResponse> => {
    return api.post(`/obp/v5.1.0/users/${user_id}/non-personal/attributes`)
}

export const CreateUser = () => {
    return api.post(`/obp/v4.0.0/users`)
}

export const CreateUserAuthContext = (user_id: string): Promise<AxiosResponse> => {
    return api.post(`/obp/v5.0.0/users/${user_id}/auth-context`)
}

export const CreateUserAuthContextUpdateRequest = (bank_id: string, sca_method: string) => {
    return api.post(`/obp/v5.0.0/banks/${bank_id}/users/current/auth-context-updates/${sca_method}`)
}

export const CreatePasswordResetUrl = (): Promise<AxiosResponse> => {
    return api.post(`/obp/v4.0.0/management/user/reset-password-url`)
}

export const DeleteNonPersonalUserAttribute = (user_id: string, user_attribute_id: string): Promise<AxiosResponse> => {
    return api.delete(`/obp/v5.1.0/users/${user_id}/non-personal/attributes/${user_attribute_id}`)
}

export const DeleteUserAuthContext = (user_id: string, user_auth_context_id: string): Promise<AxiosResponse> => {
    return api.delete(`/obp/v4.0.0/users/${user_id}/auth-context/${user_auth_context_id}`)
}

export const DeleteUsersAuthContexts = (user_id: string): Promise<AxiosResponse> => {
    return api.delete(`/obp/v4.0.0/users/${user_id}/auth-context`)
}

export const DeleteAUser = (user_id: string): Promise<AxiosResponse> => {
    return api.delete(`/obp/v4.0.0/users/${user_id}`)
}

export const GetLogoutLink = () => {
    return api.get(`/obp/v4.0.0/users/current/logout-link`)
}

export const GetMyPersonalUserAttributes = () => {
    return api.get(`/obp/v4.0.0/my/user/attributes`)
}

export const GetMySpaces = () => {
    return api.get(`/obp/v4.0.0/my/spaces`)
}

export const GetNonPersonalUserAttributes = (user_id: string): Promise<AxiosResponse> => {
    return api.get(`/obp/v5.1.0/users/${user_id}/non-personal/attributes`)
}

export const GetUser_Current = () => {
    return api.get(`/obp/v4.0.0/users/current`)
}

export const GetUserAuthContexts = (user_id: string): Promise<AxiosResponse> => {
    return api.get(`/obp/v5.0.0/users/${user_id}/auth-context`)
}

export const GetUserId_Current = () => {
    return api.get(`/obp/v4.0.0/users/current/user_id`)
}

export const GetUserLockStatus = (provider: string, username: string): Promise<AxiosResponse> => {
    return api.get(`/obp/v5.1.0/users/${provider}/${username}/lock-status`)
}

export const GetUserByUSERNAME = (provider: string, username: string): Promise<AxiosResponse> => {
    return api.get(`/obp/v5.1.0/users/provider/${provider}/username/${username}`)
}

export const GetUserByUSER_ID = (user_id: string): Promise<AxiosResponse> => {
    return api.get(`/obp/v4.0.0/users/user_id/${user_id}`)
}

export const GetUserWithAttributesByUSER_ID = (user_id: string): Promise<AxiosResponse> => {
    return api.get(`/obp/v4.0.0/users/${user_id}/attributes`)
}

export const GetUsersByEmailAddress = (email: string): Promise<AxiosResponse> => {
    return api.get(`/obp/v4.0.0/users/email/${email}/terminator`)
}

export const GetAllUsers = (): Promise<AxiosResponse> => {
    return api.get(`/obp/v4.0.0/users`)
}

export const LockTheUser = (provider: string, username: string): Promise<AxiosResponse> => {
    return api.post(`/obp/v5.1.0/users/${provider}/${username}/locks`)
}

export const RefreshUser = (user_id: string): Promise<AxiosResponse> => {
    return api.post(`/obp/v4.0.0/users/${user_id}/refresh`)
}

export const SyncUser = (provider: string, provider_id: string): Promise<AxiosResponse> => {
    return api.post(`/obp/v5.1.0/users/${provider}/${provider_id}/sync`)
}

export const UnlockTheUser = (provider: string, username: string): Promise<AxiosResponse> => {
    return api.put(`/obp/v5.1.0/users/${provider}/${username}/lock-status`)
}

export const UpdateMyPersonalUserAttribute = (user_attribute_id: string) => {
    return api.put(`/obp/v4.0.0/my/user/attributes/${user_attribute_id}`)
}

export const ValidateAUser = (user_id: string): Promise<AxiosResponse> => {
    return api.put(`/obp/v5.1.0/management/users/${user_id}`)
}
