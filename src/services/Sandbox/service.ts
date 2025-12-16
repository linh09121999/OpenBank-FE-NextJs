import { AxiosResponse } from "axios"
import api from "../apiOpenBankProject"

export const CreateSandbox = (): Promise<AxiosResponse> => {
    return api.post(`/obp/v4.0.0/sandbox/data-import`)
}