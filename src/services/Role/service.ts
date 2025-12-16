import { AxiosResponse } from "axios"
import api from "../apiOpenBankProject"

export const AddEntitlementForAUser = (user_id: string): Promise<AxiosResponse> => {
    return api.post(`/obp/v4.0.0/users/${user_id}/entitlements`)
}

export const Create_DAuth_UserWithRoles = () => {
    return api.post(`/obp/v4.0.0/user-entitlements`)
}

export const CreateEntitlementRequestForCurrentUser = () => {
    return api.post(`/obp/v4.0.0/entitlement-requests`)
}

export const DeleteEntitlement = (user_id: string, entitlement_id: string): Promise<AxiosResponse> => {
    return api.delete(`/obp/v4.0.0/users/${user_id}/entitlement/${entitlement_id}`)
}

export const DeleteEntitlementRequest = (entitlement_request_id: string): Promise<AxiosResponse> => {
    return api.delete(`/obp/v4.0.0/entitlement-requests/${entitlement_request_id}`)
}

export const GetEntitlementRequestsForAUser = (user_id: string): Promise<AxiosResponse> => {
    return api.get(`/obp/v4.0.0/users/${user_id}/entitlement-requests`)
}

export const GetEntitlementRequestsForTheCurrentUser = () => {
    return api.get(`/obp/v4.0.0/my/entitlement-requests`)
}

export const GetEntitlementsAndPermissionsForAUser = (user_id: string): Promise<AxiosResponse> => {
    return api.get(`/obp/v5.1.0/users/${user_id}/entitlements-and-permissions`)
}

export const GetEntitlementsForOneBank = (user_id: string): Promise<AxiosResponse> => {
    return api.get(`/obp/v4.0.0/banks/${user_id}/entitlements`)
}

export const GetEntitlementsForUser = (user_id: string): Promise<AxiosResponse> => {
    return api.get(`/obp/v4.0.0/users/${user_id}/entitlements`)
}

export const GetEntitlementsForUserAtBank = (bank_id: string, user_id: string): Promise<AxiosResponse> => {
    return api.get(`/obp/v4.0.0/banks/${bank_id}/users/${user_id}/entitlements`)
}

export const GetEntitlementsForTheCurrentUser = () => {
    return api.get(`/obp/v4.0.0/my/entitlements`)
}

export const GetRoles = () => {
    return api.get(`/obp/v4.0.0/roles`)
}

export const GetAllEntitlementRequests = (): Promise<AxiosResponse> => {
    return api.get(`/obp/v4.0.0/entitlement-requests`)
}

export const GetAllEntitlements = () => {
    return api.get(`/obp/v4.0.0/entitlements`)
}