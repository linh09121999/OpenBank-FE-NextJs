import { type AxiosResponse } from "axios";
import api from "../apiOpenBankProject";

export const CreateBankLevelEndpointTag = (data: { tag_name: string }, bank_id: string, operation_id: string): Promise<AxiosResponse> => {
    return api.post(`/obp/v6.0.0/management/banks/${bank_id}/endpoints/${operation_id}/tags`, data)
}

export const CreateSystemLevelEndpointTag = (data: { tag_name: string }, operation_id: string): Promise<AxiosResponse> => {
    return api.post(`/obp/v6.0.0/management/endpoints/${operation_id}/tags`, data)
}

export const DeleteBankLevelEndpointTag = (bank_id: string, operation_id: string, endpoint_tag_id: string): Promise<AxiosResponse> => {
    return api.delete(`/obp/v6.0.0/management/banks/${bank_id}/endpoints/${operation_id}/tags/${endpoint_tag_id}`)
}

export const DeleteSystemLevelEndpointTag = (operation_id: string, endpoint_tag_id: string): Promise<AxiosResponse> => {
    return api.delete(`/obp/v6.0.0/management/endpoints/${operation_id}/tags/${endpoint_tag_id}`)
}

export const GetBankLevelEndpointTags = (bank_id: string, operation_id: string): Promise<AxiosResponse> => {
    return api.get(`/obp/v6.0.0/management/banks/${bank_id}/endpoints/${operation_id}/tags`)
}

export const GetSystemLevelEndpointTags = (operation_id: string): Promise<AxiosResponse> => {
    return api.get(`/obp/v6.0.0/management/endpoints/${operation_id}/tags`)
}

export const UpdateBankLevelEndpointTag = (data: { tag_name: string }, bank_id: string, operation_id: string, endpoint_tag_id: string): Promise<AxiosResponse> => {
    return api.put(`/obp/v6.0.0/management/banks/${bank_id}/endpoints/${operation_id}/tags/${endpoint_tag_id}`, data)
}

export const UpdateSystemLevelEndpointTag = (data: { tag_name: string }, operation_id: string, endpoint_tag_id: string) => {
    return api.put(`/obp/v6.0.0/management/endpoints/${operation_id}/tags/${endpoint_tag_id}`, data)
}

export const GetAPIConfiguration = (): Promise<AxiosResponse> => {
    return api.get(`/obp/v6.0.0/config`)
}

export const GetAPIInfo = () => {
    return api.get(`/obp/v6.0.0/root`)
}

export const GetAPITags = () => {
    return api.get(`/obp/v6.0.0/tags`)
}

export const GetAdapterInfo = (): Promise<AxiosResponse> => {
    return api.get(`/obp/v6.0.0/adapter`)
}

export const GetAdapterInfoForABank = (bank_id: string): Promise<AxiosResponse> => {
    return api.get(`/obp/v6.0.0/banks/${bank_id}/adapter`)
}

export const GetConnectorStatus = () => {
    return api.get(`/obp/v6.0.0/connector/loopback`)
}

export const GetJSONWebKey = () => {
    return api.get(`/obp/v6.0.0/certs`)
}

export const GetJSONWebKeyURIs = () => {
    return api.get(`/obp/v6.0.0/jwks-uris`)
}

export const GetLogCache = (log_level: string): Promise<AxiosResponse> => {
    return api.get(`/obp/v6.0.0/dev-ops/log-cache/${log_level}`)
}

export const GetMapperDatabaseInfo = (): Promise<AxiosResponse> => {
    return api.get(`/obp/v6.0.0/database/info`)
}

export const GetRateLimitingInfo = () => {
    return api.get(`/obp/v6.0.0/rate-limiting`)
}

export const GetSuggestedSessionTimeout = () => {
    return api.get(`/obp/v6.0.0/ui/suggested-session-timeout`)
}

export const GetWellKnownURIs = () => {
    return api.get(`/obp/v6.0.0/well-known`)
}

export const GetTheCallContextOfACurrentCall = (): Promise<AxiosResponse> => {
    return api.get(`/obp/v6.0.0/development/call_context`)
}

export const VerifyRequestAndSignResponseOfACurrentCall = () => {
    return api.get(`/obp/v6.0.0/development/echo/jws-verified-request-jws-signed-response`)
}

export const WaitingForGodot = () => {
    return api.get(`/obp/v6.0.0/waiting-for-godot`)
}

