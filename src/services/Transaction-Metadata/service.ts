import { AxiosResponse } from "axios"
import api from "../apiOpenBankProject"

export const AddATransactionComment = (bank_id: string, account_id: string, view_id: string, transaction_id: string) => {
    return api.post(`/obp/v4.0.0/banks/${bank_id}/accounts/${account_id}/${view_id}/transactions/${transaction_id}/metadata/comments`)
}

export const AddATransactionImage = (bank_id: string, account_id: string, view_id: string, transaction_id: string) => {
    return api.post(`/obp/v4.0.0/banks/${bank_id}/accounts/${account_id}/${view_id}/transactions/${transaction_id}/metadata/images`)
}

export const AddATransactionNarrative = (bank_id: string, account_id: string, view_id: string, transaction_id: string) => {
    return api.post(`/obp/v4.0.0/banks/${bank_id}/accounts/${account_id}/${view_id}/transactions/${transaction_id}/metadata/narrative`)
}

export const AddATransactionTag = (bank_id: string, account_id: string, view_id: string, transaction_id: string) => {
    return api.post(`/obp/v4.0.0/banks/${bank_id}/accounts/${account_id}/${view_id}/transactions/${transaction_id}/metadata/tags`)
}

export const AddATransactionWhereTag = (bank_id: string, account_id: string, view_id: string, transaction_id: string) => {
    return api.post(`/obp/v4.0.0/banks/${bank_id}/accounts/${account_id}/${view_id}/transactions/${transaction_id}/metadata/where`)
}

export const DeleteATransactionComment = (bank_id: string, account_id: string, view_id: string, transaction_id: string, comment_id: string) => {
    return api.delete(`/obp/v4.0.0/banks/${bank_id}/accounts/${account_id}/${view_id}/transactions/${transaction_id}/metadata/comments/${comment_id}`)
}

export const DeleteATransactionImage = (bank_id: string, account_id: string, view_id: string, transaction_id: string, image_id: string) => {
    return api.delete(`/obp/v4.0.0/banks/${bank_id}/accounts/${account_id}/${view_id}/transactions/${transaction_id}/metadata/images/${image_id}`)
}

export const DeleteATransactionNarrative = (bank_id: string, account_id: string, view_id: string, transaction_id: string) => {
    return api.delete(`/obp/v4.0.0/banks/${bank_id}/accounts/${account_id}/${view_id}/transactions/${transaction_id}/metadata/narrative`)
}

export const DeleteATransactionTag = (bank_id: string, account_id: string, view_id: string, transaction_id: string, tag_id: string) => {
    return api.delete(`/obp/v4.0.0/banks/${bank_id}/accounts/${account_id}/${view_id}/transactions/${transaction_id}/metadata/tags/${tag_id}`)
}

export const GetTransactionComments = (bank_id: string, account_id: string, view_id: string, transaction_id: string) => {
    return api.get(`/obp/v4.0.0/banks/${bank_id}/accounts/${account_id}/${view_id}/transactions/${transaction_id}/metadata/comments`)
}

export const GetTransactionImages = (bank_id: string, account_id: string, view_id: string, transaction_id: string) => {
    return api.get(`/obp/v4.0.0/banks/${bank_id}/accounts/${account_id}/${view_id}/transactions/${transaction_id}/metadata/images`)
}

export const GetTransactionTags = (bank_id: string, account_id: string, view_id: string, transaction_id: string) => {
    return api.get(`/obp/v4.0.0/banks/${bank_id}/accounts/${account_id}/${view_id}/transactions/${transaction_id}/metadata/tags`)
}

export const GetATransactionNarrative = (bank_id: string, account_id: string, view_id: string, transaction_id: string) => {
    return api.get(`/obp/v4.0.0/banks/${bank_id}/accounts/${account_id}/${view_id}/transactions/${transaction_id}/metadata/narrative`)
}

export const GetATransactionWhereTag = (bank_id: string, account_id: string, view_id: string, transaction_id: string) => {
    return api.get(`/obp/v4.0.0/banks/${bank_id}/accounts/${account_id}/${view_id}/transactions/${transaction_id}/metadata/where`)
}

export const UpdateATransactionNarrative = (bank_id: string, account_id: string, view_id: string, transaction_id: string) => {
    return api.put(`/obp/v4.0.0/banks/${bank_id}/accounts/${account_id}/${view_id}/transactions/${transaction_id}/metadata/narrative`)
}

export const UpdateATransactionWhereTag = (bank_id: string, account_id: string, view_id: string, transaction_id: string) => {
    return api.put(`/obp/v4.0.0/banks/${bank_id}/accounts/${account_id}/${view_id}/transactions/${transaction_id}/metadata/where`)
}