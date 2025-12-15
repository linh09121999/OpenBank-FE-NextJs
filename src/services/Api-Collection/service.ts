import { AxiosResponse } from "axios"
import api from "../apiOpenBankProject"

export const CreateMyApiCollection = () => {
    return api.post(`/obp/v6.0.0/my/api-collections`)
}

export const CreateMyApiCollectionEndpoint = (api_collection_name: string) => {
    return api.post(`/obp/v6.0.0/my/api-collections/${api_collection_name}/api-collection-endpoints`)
}

export const CreateMyApiCollectionEndpointById = (api_collection_name: string) => {
    return api.post(`/obp/v6.0.0/my/api-collection-ids/${api_collection_name}/api-collection-endpoints`)
}

export const DeleteMyApiCollection = (api_collection_name: string) => {
    return api.delete(`/obp/v6.0.0/my/api-collections/${api_collection_name}`)
}

export const DeleteMyApiCollectionEndpoint = (api_collection_name: string, operation_id: string) => {
    return api.delete(`/obp/v6.0.0/my/api-collections/${api_collection_name}/api-collection-endpoints/${operation_id}`)
}

export const DeleteMyApiCollectionEndpointById = (api_collection_id: string, api_collection_endpoint_id: string) => {
    return api.delete(`/obp/v6.0.0/my/api-collection-ids/${api_collection_id}/api-collection-endpoint-ids/${api_collection_endpoint_id}`)
}

export const GetAllAPICollections = (): Promise<AxiosResponse> => {
    return api.get(`/obp/v6.0.0/management/api-collections`)
}

export const GetApiCollectionEndpoints = (api_collection_id: string) => {
    return api.get(`/obp/v6.0.0/api-collections/${api_collection_id}/api-collection-endpoints`)
}

export const GetApiCollectionsforUser = (user_id: string): Promise<AxiosResponse> => {
    return api.get(`/obp/v6.0.0/users/${user_id}/api-collections`)
}

export const GetFeaturedApiCollections = () => {
    return api.get(`/obp/v6.0.0/api-collections/featured`)
}

export const GetMyApiCollectionById = (api_collection_id: string) => {
    return api.get(`/obp/v6.0.0/my/api-collections/${api_collection_id}`)
}

export const GetMyApiCollectionByName = (api_collection_name: string) => {
    return api.get(`/obp/v6.0.0/my/api-collections/name/${api_collection_name}`)
}

export const GetMyApiCollectionEndpoint = (api_collection_name: string, operation_id: string) => {
    return api.get(`/obp/v6.0.0/my/api-collections/${api_collection_name}/api-collection-endpoints/${operation_id}`)
}

export const GetMyApiCollectionEndpoints = (api_collection_name: string) => {
    return api.get(`/obp/v6.0.0/my/api-collections/${api_collection_name}/api-collection-endpoints`)
}

export const GetMyApiCollectionEndpointsById = (api_collection_name: string) => {
    return api.get(`/obp/v6.0.0/my/api-collection-ids/${api_collection_name}/api-collection-endpoints`)
}

export const GetMyApiCollections = () => {
    return api.get(`/obp/v6.0.0/my/api-collections`)
}

export const GetSharableApiCollectionById = (api_collection_id: string) => {
    return api.get(`/obp/v6.0.0/api-collections/sharable/${api_collection_id}`)
}

export const UpdateMyApiCollectionByAPI_COLLECTION_ID = (api_collection_id: string) => {
    return api.put(`/obp/v6.0.0/my/api-collections/${api_collection_id}`)
}
