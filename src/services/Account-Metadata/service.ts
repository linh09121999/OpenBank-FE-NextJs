import { AxiosResponse } from "axios"
import api from "../apiOpenBankProject"

export const CreateATagOnAccount = (bank_id: string, account_id: string, view_id: string) => {
    return api.post(`/obp/v6.0.0/banks/${bank_id}/accounts/${account_id}/${view_id}/metadata/tags`)
}

export const DeleteATagOnAccount = (bank_id: string, account_id: string, view_id: string, tag_id: string) => {
    return api.delete(`/obp/v6.0.0/banks/${bank_id}/accounts/${account_id}/${view_id}/metadata/tags/${tag_id}`)
}

export const GetATagOnAccount = (bank_id: string, account_id: string, view_id: string) => {
    return api.get(`/obp/v6.0.0/banks/${bank_id}/accounts/${account_id}/${view_id}/metadata/tags`)
}

