import { AxiosResponse } from "axios"
import api from "../apiOpenBankProject"

export const CreateProductCollection = (bank_id: string, collection_code: string): Promise<AxiosResponse> => {
    return api.put(`/obp/v4.0.0/banks/${bank_id}/product-collections/${collection_code}`)
}

export const GetProductCollection = (bank_id: string, collection_code: string) => {
    return api.get(`/obp/v4.0.0/banks/${bank_id}/product-collections/${collection_code}`)
}
