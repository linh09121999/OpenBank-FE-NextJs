import { AxiosResponse } from "axios"
import api from "../apiOpenBankProject"

export const GetBanks = () => {
    return api.get(`/obp/v6.0.0/banks`)
}
