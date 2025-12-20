import { AxiosResponse } from "axios"
import api from "../apiOpenBankProject"

export const AddUserToAConsent = (bank_id: string, consent_id: string): Promise<AxiosResponse> => {
    return api.put(`/obp/v6.0.0/banks/${bank_id}/consents/${consent_id}/user-update-request`)
}

export const AnswerConsentChallenge = (bank_id: string, consent_id: string): Promise<AxiosResponse> => {
    return api.post(`/obp/v6.0.0/banks/${bank_id}/consents/${consent_id}/challenge`)
}

export const CreateConsent_EMAIL = (bank_id: string, email: string): Promise<AxiosResponse> => {
    return api.post(`/obp/v6.0.0/banks/${bank_id}/my/consents/${email}`)
}

export const CreateConsent_IMPLICIT = (bank_id: string, implicit: string): Promise<AxiosResponse> => {
    return api.post(`/obp/v6.0.0/banks/${bank_id}/my/consents/${implicit}`)
}

export const CreateConsent_SMS = (bank_id: string, sms: string): Promise<AxiosResponse> => {
    return api.post(`/obp/v6.0.0/banks/${bank_id}/my/consents/${sms}`)
}

export const CreateConsentByCONSENT_REQUEST_ID_EMAIL = (consent_request_id: string, email: string): Promise<AxiosResponse> => {
    return api.post(`/obp/v6.0.0/consumer/consent-requests/${consent_request_id}/${email}/consents`)
}

export const CreateConsentByCONSENT_REQUEST_ID_IMPLICIT = (consent_request_id: string, implicit: string): Promise<AxiosResponse> => {
    return api.post(`/obp/v6.0.0/consumer/consent-requests/${consent_request_id}/${implicit}/consents`)
}

export const CreateConsentByCONSENT_REQUEST_ID_SMS = (consent_request_id: string, sms: string): Promise<AxiosResponse> => {
    return api.post(`/obp/v6.0.0/consumer/consent-requests/${consent_request_id}/${sms}/consents`)
}

export const CreateConsentRequest = (): Promise<AxiosResponse> => {
    return api.post(`/obp/v6.0.0/consumer/consent-requests`)
}

export const CreateConsentRequestVRP = (): Promise<AxiosResponse> => {
    return api.post(`/obp/v6.0.0/consumer/vrp-consent-requests`)
}

export const GetConsentByConsentIdViaConsumer = (consent_id: string): Promise<AxiosResponse> => {
    return api.get(`/obp/v6.0.0/consumer/current/consents/${consent_id}`)
}

export const GetConsentByConsentIdViaUser = (consent_id: string): Promise<AxiosResponse> => {
    return api.get(`/obp/v6.0.0/user/current/consents/${consent_id}`)
}

export const GetConsentByConsentRequestIdViaConsumer = (consent_request_id: string): Promise<AxiosResponse> => {
    return api.get(`/obp/v6.0.0/consumer/consent-requests/${consent_request_id}/consents`)
}

export const GetConsentRequest = (consent_request_id: string): Promise<AxiosResponse> => {
    return api.get(`/obp/v6.0.0/consumer/consent-requests/${consent_request_id}`)
}

export const GetConsents = (): Promise<AxiosResponse> => {
    return api.get(`/obp/v6.0.0/management/consents`)
}

export const GetConsentsAtBank = (bank_id: string): Promise<AxiosResponse> => {
    return api.get(`/obp/v6.0.0/management/consents/banks/${bank_id}`)
}

export const GetMyConsents = (): Promise<AxiosResponse> => {
    return api.get(`/obp/v6.0.0/my/consents`)
}

export const GetMyConsentsInfo = (): Promise<AxiosResponse> => {
    return api.get(`/obp/v6.0.0/my/consent-infos`)
}

export const GetMyConsentsInfoAtBank = (bank_id: string): Promise<AxiosResponse> => {
    return api.get(`/obp/v6.0.0/banks/${bank_id}/my/consent-infos`)
}

export const GetMyConsentsAtBank = (bank_id: string): Promise<AxiosResponse> => {
    return api.get(`/obp/v6.0.0/banks/${bank_id}/my/consents`)
}

export const ProvideClientCertificateInfoOfACurrentCall = (): Promise<AxiosResponse> => {
    return api.get(`/obp/v6.0.0/my/mtls/certificate/current`)
}

export const RevokeConsentAtBank = (bank_id: string, consent_id: string): Promise<AxiosResponse> => {
    return api.delete(`/obp/v6.0.0/banks/${bank_id}/consents/${consent_id}`)
}

export const RevokeConsentUsedInTheCurrentCall = (): Promise<AxiosResponse> => {
    return api.delete(`/obp/v6.0.0/my/consent/current`)
}

export const RevokeMyConsent = (consent_id: string): Promise<AxiosResponse> => {
    return api.delete(`/obp/v6.0.0/my/consents/${consent_id}`)
}

export const UpdateConsentAccountAccessBy_CONSENT_ID = (bank_id: string, consent_id: string): Promise<AxiosResponse> => {
    return api.put(`/obp/v6.0.0/management/banks/${bank_id}/consents/${consent_id}/account-access`)
}

export const UpdateConsentStatus = (bank_id: string, consent_id: string): Promise<AxiosResponse> => {
    return api.put(`/obp/v6.0.0/banks/${bank_id}/consents/${consent_id}`)
}

export const UpdateConsentStatusByCONSENT_ID = (bank_id: string, consent_id: string): Promise<AxiosResponse> => {
    return api.put(`/obp/v6.0.0/management/banks/${bank_id}/consents/${consent_id}`)
}

export const UpdateCreatedByUserOfConsentByCONSENT_ID = (bank_id: string, consent_id: string): Promise<AxiosResponse> => {
    return api.put(`/obp/v6.0.0/management/banks/${bank_id}/consents/${consent_id}/created-by-user`)
}
