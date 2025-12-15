import { AxiosResponse } from "axios"
import api from "../apiOpenBankProject"

export const AddCorporateLocationToCounterparty = (bank_id: string, account_id: string, view_id: string, other_account_id: string) => {
    return api.post(`/obp/v2.1.0/banks/${bank_id}/accounts/${account_id}/${view_id}/other_accounts/${other_account_id}/metadata/corporate_location`)
}

export const AddCounterpartyMoreInfo = (bank_id: string, account_id: string, view_id: string, other_account_id: string) => {
    return api.post(`/obp/v2.1.0/banks/${bank_id}/accounts/${account_id}/${view_id}/other_accounts/${other_account_id}/metadata/more_info`)
}

export const AddOpenCorporatesURLToCounterparty = (bank_id: string, account_id: string, view_id: string, other_account_id: string) => {
    return api.post(`/obp/v2.1.0/banks/${bank_id}/accounts/${account_id}/${view_id}/other_accounts/${other_account_id}/metadata/open_corporates_url`)
}

export const AddImageUrlToOtherBankBccount = (bank_id: string, account_id: string, view_id: string, other_account_id: string) => {
    return api.post(`/obp/v2.1.0/banks/${bank_id}/accounts/${account_id}/${view_id}/other_accounts/${other_account_id}/metadata/image_url`)
}

export const AddPhysicalLocationToOtherBankAccount = (bank_id: string, account_id: string, view_id: string, other_account_id: string) => {
    return api.post(`/obp/v2.1.0/banks/${bank_id}/accounts/${account_id}/${view_id}/other_accounts/${other_account_id}/metadata/physical_location`)
}

export const AddPublicAliasToOtherBankAccount = (bank_id: string, account_id: string, view_id: string, other_account_id: string) => {
    return api.post(`/obp/v2.1.0/banks/${bank_id}/accounts/${account_id}/${view_id}/other_accounts/${other_account_id}/public_alias`)
}

export const AddUrlToOtherBankAccount = (bank_id: string, account_id: string, view_id: string, other_account_id: string) => {
    return api.post(`/obp/v2.1.0/banks/${bank_id}/accounts/${account_id}/${view_id}/other_accounts/${other_account_id}/metadata/url`)
}

export const CreateOtherAccountPrivateAlias = (bank_id: string, account_id: string, view_id: string, other_account_id: string) => {
    return api.post(`/obp/v2.1.0/banks/${bank_id}/accounts/${account_id}/${view_id}/other_accounts/${other_account_id}/private_alias`)
}

export const DeleteCounterpartyCorporateLocation = (bank_id: string, account_id: string, view_id: string, other_account_id: string) => {
    return api.delete(`/obp/v2.1.0/banks/${bank_id}/accounts/${account_id}/${view_id}/other_accounts/${other_account_id}/metadata/corporate_location`)
}

export const DeleteCounterpartyImageURL = (bank_id: string, account_id: string, view_id: string, other_account_id: string) => {
    return api.delete(`/obp/v2.1.0/banks/${bank_id}/accounts/${account_id}/${view_id}/other_accounts/${other_account_id}/metadata/image_url`)
}

export const DeleteCounterpartyOpenCorporatesURL = (bank_id: string, account_id: string, view_id: string, other_account_id: string) => {
    return api.delete(`/obp/v2.1.0/banks/${bank_id}/accounts/${account_id}/${view_id}/other_accounts/${other_account_id}/metadata/open_corporates_url`)
}

export const DeleteCounterpartyPhysicalLocation = (bank_id: string, account_id: string, view_id: string, other_account_id: string) => {
    return api.delete(`/obp/v2.1.0/banks/${bank_id}/accounts/${account_id}/${view_id}/other_accounts/${other_account_id}/metadata/physical_location`)
}

export const DeleteCounterpartyPrivateAlias = (bank_id: string, account_id: string, view_id: string, other_account_id: string) => {
    return api.delete(`/obp/v2.1.0/banks/${bank_id}/accounts/${account_id}/${view_id}/other_accounts/${other_account_id}/private_alias`)
}

export const DeleteCounterpartyPublicAlias = (bank_id: string, account_id: string, view_id: string, other_account_id: string) => {
    return api.delete(`/obp/v2.1.0/banks/${bank_id}/accounts/${account_id}/${view_id}/other_accounts/${other_account_id}/public_alias`)
}

export const DeleteMoreInfoOfOtherBankAccount = (bank_id: string, account_id: string, view_id: string, other_account_id: string) => {
    return api.delete(`/obp/v2.1.0/banks/${bank_id}/accounts/${account_id}/${view_id}/other_accounts/${other_account_id}/metadata/more_info`)
}

export const DeleteUrlOfOtherBankAccount = (bank_id: string, account_id: string, view_id: string, other_account_id: string) => {
    return api.delete(`/obp/v2.1.0/banks/${bank_id}/accounts/${account_id}/${view_id}/other_accounts/${other_account_id}/metadata/url`)
}

export const GetOtherAccountMetadata = (bank_id: string, account_id: string, view_id: string, other_account_id: string) => {
    return api.get(`/obp/v2.1.0/banks/${bank_id}/accounts/${account_id}/${view_id}/other_accounts/${other_account_id}/metadata`)
}

export const GetOtherAccountPrivateAlias = (bank_id: string, account_id: string, view_id: string, other_account_id: string) => {
    return api.get(`/obp/v2.1.0/banks/${bank_id}/accounts/${account_id}/${view_id}/other_accounts/${other_account_id}/private_alias`)
}

export const GetPublicAliasOfOtherBankAccount = (bank_id: string, account_id: string, view_id: string, other_account_id: string) => {
    return api.get(`/obp/v2.1.0/banks/${bank_id}/accounts/${account_id}/${view_id}/other_accounts/${other_account_id}/public_alias`)
}

export const UpdateCounterpartyCorporateLocation = (bank_id: string, account_id: string, view_id: string, other_account_id: string) => {
    return api.put(`/obp/v2.1.0/banks/${bank_id}/accounts/${account_id}/${view_id}/other_accounts/${other_account_id}/metadata/corporate_location`)
}

export const UpdateCounterpartyImageUrl = (bank_id: string, account_id: string, view_id: string, other_account_id: string) => {
    return api.put(`/obp/v2.1.0/banks/${bank_id}/accounts/${account_id}/${view_id}/other_accounts/${other_account_id}/metadata/image_url`)
}

export const UpdateCounterpartyMoreInfo = (bank_id: string, account_id: string, view_id: string, other_account_id: string) => {
    return api.put(`/obp/v2.1.0/banks/${bank_id}/accounts/${account_id}/${view_id}/other_accounts/${other_account_id}/metadata/more_info`)
}

export const UpdateCounterpartyPhysicalLocation = (bank_id: string, account_id: string, view_id: string, other_account_id: string) => {
    return api.put(`/obp/v2.1.0/banks/${bank_id}/accounts/${account_id}/${view_id}/other_accounts/${other_account_id}/metadata/physical_location`)
}

export const UpdateCounterpartyPrivateAlias = (bank_id: string, account_id: string, view_id: string, other_account_id: string) => {
    return api.put(`/obp/v2.1.0/banks/${bank_id}/accounts/${account_id}/${view_id}/other_accounts/${other_account_id}/private_alias`)
}

export const UpdateOpenCorporatesUrlOfCounterparty = (bank_id: string, account_id: string, view_id: string, other_account_id: string) => {
    return api.put(`/obp/v2.1.0/banks/${bank_id}/accounts/${account_id}/${view_id}/other_accounts/${other_account_id}/metadata/open_corporates_url`)
}

export const UpdatePublicAliasOfOtherBankAccount = (bank_id: string, account_id: string, view_id: string, other_account_id: string) => {
    return api.put(`/obp/v2.1.0/banks/${bank_id}/accounts/${account_id}/${view_id}/other_accounts/${other_account_id}/public_alias`)
}

export const UpdateUrlOfOtherBankAccount = (bank_id: string, account_id: string, view_id: string, other_account_id: string) => {
    return api.put(`/obp/v2.1.0/banks/${bank_id}/accounts/${account_id}/${view_id}/other_accounts/${other_account_id}/metadata/url`)
}
