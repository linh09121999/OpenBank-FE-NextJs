import { AxiosResponse } from "axios"
import api from "../apiOpenBankProject"

export const GetBankLevelDynamicResourceDocs = (bank_id: string, api_version: string): Promise<AxiosResponse> => {
    return api.get(`/obp/v6.0.0/banks/${bank_id}/resource-docs/${api_version}/obp`)
}

export const GetGlossaryOfTheAPI = (): Promise<AxiosResponse> => {
    return api.get(`/obp/v4.0.0/api/glossary`)
}

export const GetMessageDocs = (connector: string): Promise<AxiosResponse> => {
    return api.get(`/obp/v4.0.0/message-docs/${connector}`)
}

export const GetMessageDocsSwagger = (connector: string): Promise<AxiosResponse> => {
    return api.get(`/obp/v4.0.0/message-docs/${connector}/swagger2.0`)
}

export const GetResourceDocs = (api_version: string): Promise<AxiosResponse> => {
    return api.get(`/obp/v4.0.0/resource-docs/${api_version}/obp`)
}

export const GetSwaggerdocumentation = (api_version: string): Promise<AxiosResponse> => {
    return api.get(`/obp/v4.0.0/resource-docs/${api_version}/swagger`)
}

export const GetScannedAPIVersions = (): Promise<AxiosResponse> => {
    return api.get(`/obp/v4.0.0/api/versions`)
}
