import { AxiosResponse } from "axios"
import api from "../apiOpenBankProject"

export const CreateScopeForAConsumer = (consumer_id: string) => {
    return api.post(`/obp/v4.0.0/consumers/${consumer_id}/scopes`)
}

export const DeleteConsumerScope = (consumer_id: string, scope_id: string) => {
    return api.delete(`/obp/v4.0.0/consumers/${consumer_id}/scope/${scope_id}`)
}

export const GetScopesForConsumer = (consumer_id: string) => {
    return api.get(`/obp/v4.0.0/consumers/${consumer_id}/scopes`)
}
