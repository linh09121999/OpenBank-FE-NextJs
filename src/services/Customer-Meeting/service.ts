import { AxiosResponse } from "axios"
import api from "../apiOpenBankProject"

export const CreateMeeting_VideoConference_Call = (bank_id: string) => {
    return api.post(`/obp/v6.0.0/banks/${bank_id}/meetings`)
}

export const GetMeeting = (bank_id: string, meeting_id: string) => {
    return api.get(`/obp/v6.0.0/banks/${bank_id}/meetings/${meeting_id}`)
}

export const GetMeetings = (bank_id: string) => {
    return api.get(`/obp/v6.0.0/banks/${bank_id}/meetings`)
}