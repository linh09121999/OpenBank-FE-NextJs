import { AxiosResponse } from "axios"
import api from "../apiOpenBankProject"

export const CreateWebUiProps = (): Promise<AxiosResponse> => {
    return api.post(`/obp/v4.0.0/management/webui_props`)
}

export const DeleteWebUiProps = (web_ui_props_id: string): Promise<AxiosResponse> => {
    return api.delete(`/obp/v4.0.0/management/webui_props/${web_ui_props_id}`)
}

export const GetWebUiProps = () => {
    return api.get(`/obp/v5.1.0/webui-props`)
}
