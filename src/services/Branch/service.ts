import { AxiosResponse } from "axios"
import api from "../apiOpenBankProject"

export const CreateBranch = (bank_id: string): Promise<AxiosResponse> => {
    return api.post(`/obp/v6.0.0/banks/${bank_id}/branches`)
}

export const DeleteBranch = (bank_id: string, branch_id: string): Promise<AxiosResponse> => {
    return api.delete(`/obp/v6.0.0/banks/${bank_id}/branches/${branch_id}`)
}

export const GetBranch = (bank_id: string, branch_id: string): Promise<AxiosResponse> => {
    return api.get(`/obp/v6.0.0/banks/${bank_id}/branches/${branch_id}`)
}

export const GetBranchesforaBank = (bank_id: string): Promise<AxiosResponse> => {
    return api.get(`/obp/v6.0.0/banks/${bank_id}/branches`)
}
