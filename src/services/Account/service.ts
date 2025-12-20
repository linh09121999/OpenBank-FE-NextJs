import { AxiosResponse } from "axios"
import api from "../apiOpenBankProject"

export const CheckAvailableFunds = (bank_id: string, account_id: string, view_id: string): Promise<AxiosResponse> => {
    return api.get(`/obp/v6.0.0/banks/${bank_id}/accounts/${account_id}/${view_id}/funds-available`)
}

export const CreateAccount_Post = (bank_id: string): Promise<AxiosResponse> => {
    return api.post(`/obp/v6.0.0/banks/${bank_id}/accounts`)
}

export const CreateAccount_Put = (bank_id: string, account_id: string): Promise<AxiosResponse> => {
    return api.put(`/obp/v6.0.0/banks/${bank_id}/accounts/${account_id}`)
}

export const CreateAccountAttribute = (bank_id: string, account_id: string, product_code: string): Promise<AxiosResponse> => {
    return api.post(`/obp/v6.0.0/banks/${bank_id}/accounts/${account_id}/products/${product_code}/attribute`)
}

export const CreateBankAccountBalance = (bank_id: string, account_id: string): Promise<AxiosResponse> => {
    return api.post(`/obp/v6.0.0/banks/${bank_id}/accounts/${account_id}/balances`)
}

export const Create_UpdateAccountAttributeDefinition = (bank_id: string): Promise<AxiosResponse> => {
    return api.put(`/obp/v6.0.0/banks/${bank_id}/attribute-definitions/account`)
}

export const DeleteAccountAttributeDefinition = (bank_id: string, attribute_definition_id: string): Promise<AxiosResponse> => {
    return api.delete(`/obp/v6.0.0/banks/${bank_id}/attribute-definitions/${attribute_definition_id}/account`)
}

export const DeleteAccountCascade = (bank_id: string, account_id: string): Promise<AxiosResponse> => {
    return api.delete(`/obp/v6.0.0/management/cascading/banks/${bank_id}/accounts/${account_id}`)
}

export const DeleteBankAccountBalance = (bank_id: string, account_id: string, balance_id: string): Promise<AxiosResponse> => {
    return api.delete(`/obp/v6.0.0/banks/${bank_id}/accounts/${account_id}/balances/${balance_id}`)
}

export const GetAccountAccessbyUSER_ID = (user_id: string): Promise<AxiosResponse> => {
    return api.get(`/obp/v6.0.0/users/${user_id}/account-access`)
}

export const GetAccountAttributeDefinition = (bank_id: string): Promise<AxiosResponse> => {
    return api.get(`/obp/v6.0.0/banks/${bank_id}/attribute-definitions/account`)
}

export const GetAccountBalancesbyBANK_ID = (bank_id: string): Promise<AxiosResponse> => {
    return api.get(`/obp/v6.0.0/banks/${bank_id}/balances`)
}

export const GetAccountBalancesbyBANK_IDandACCOUNT_IDthroughtheVIEW_ID = (bank_id: string, account_id: string, view_id: string): Promise<AxiosResponse> => {
    return api.get(`/obp/v6.0.0/banks/${bank_id}/accounts/${account_id}/views/${view_id}/balances`)
}

export const GetAccountBalancesbyBANK_IDthroughtheVIEW_ID = (bank_id: string, view_id: string): Promise<AxiosResponse> => {
    return api.get(`/obp/v6.0.0/banks/${bank_id}/views/${view_id}/balances`)
}

export const GetAccountbyAccountRouting = (): Promise<AxiosResponse> => {
    return api.post(`/obp/v6.0.0/management/accounts/account-routing-query`)
}

export const GetAccountbyId_Core = (bank_id: string, account_id: string): Promise<AxiosResponse> => {
    return api.get(`/obp/v6.0.0/my/banks/${bank_id}/accounts/${account_id}/account`)
}

export const GetAccountbyId_Core_throughtheVIEW_ID = (bank_id: string, account_id: string, view_id: string): Promise<AxiosResponse> => {
    return api.get(`/obp/v6.0.0/banks/${bank_id}/accounts/${account_id}/views/${view_id}`)
}

export const GetAccountbyId_Full = (bank_id: string, account_id: string, view_id: string): Promise<AxiosResponse> => {
    return api.get(`/obp/v6.0.0/banks/${bank_id}/accounts/${account_id}/${view_id}/account`)
}

export const GetAccountsHeld = (bank_id: string): Promise<AxiosResponse> => {
    return api.get(`/obp/v6.0.0/banks/${bank_id}/accounts-held`)
}

export const GetAccountsHeldByUser = (user_id: string): Promise<AxiosResponse> => {
    return api.get(`/obp/v6.0.0/users/${user_id}/accounts-held`)
}

export const GetAccountsMinimalforaCustomer = (customer_id: string): Promise<AxiosResponse> => {
    return api.get(`/obp/v6.0.0/customers/${customer_id}/accounts-minimal`)
}

export const GetAccountsatBank = (bank_id: string): Promise<AxiosResponse> => {
    return api.get(`/obp/v6.0.0/banks/${bank_id}/accounts`)
}

export const GetAccountsatBank_IDsonly = (bank_id: string): Promise<AxiosResponse> => {
    return api.get(`/obp/v6.0.0/banks/${bank_id}/accounts/account_ids/private`)
}

export const GetAccountsatBank_Minimal = (bank_id: string): Promise<AxiosResponse> => {
    return api.get(`/obp/v6.0.0/banks/${bank_id}/accounts/private`)
}

export const GetAccountsatallBanks_private = (): Promise<AxiosResponse> => {
    return api.get(`/obp/v6.0.0/my/accounts`)
}

export const GetAccountsbyAccountRoutingRegex = (): Promise<AxiosResponse> => {
    return api.post(`/obp/v6.0.0/management/accounts/account-routing-regex-query`)
}

export const GetAgent = (bank_id: string, agent_id: string): Promise<AxiosResponse> => {
    return api.get(`/obp/v6.0.0/banks/${bank_id}/agents/${agent_id}`)
}

export const GetAgentsatBank = (bank_id: string): Promise<AxiosResponse> => {
    return api.get(`/obp/v6.0.0/banks/${bank_id}/agents`)
}

export const GetAllBankAccountBalances = (bank_id: string, account_id: string): Promise<AxiosResponse> => {
    return api.get(`/obp/v6.0.0/banks/${bank_id}/accounts/${account_id}/balances`)
}

export const GetBankAccountBalanceByID = (bank_id: string, account_id: string, balance_id: string): Promise<AxiosResponse> => {
    return api.get(`/obp/v6.0.0/banks/${bank_id}/accounts/${account_id}/balances/${balance_id}`)
}

export const GetCheckbookOrders = (bank_id: string, account_id: string, view_id: string): Promise<AxiosResponse> => {
    return api.get(`/obp/v6.0.0/banks/${bank_id}/accounts/${account_id}/${view_id}/checkbook/orders`)
}

export const GetFastFirehoseAccountsatBank = (bank_id: string): Promise<AxiosResponse> => {
    return api.get(`/obp/v6.0.0/management/banks/${bank_id}/fast-firehose/accounts`)
}

export const GetFirehoseAccountsatBank = (bank_id: string, view_id: string): Promise<AxiosResponse> => {
    return api.get(`/obp/v6.0.0/banks/${bank_id}/firehose/accounts/views/${view_id}`)
}

export const UpdateAccount = (bank_id: string, account_id: string): Promise<AxiosResponse> => {
    return api.put(`/obp/v6.0.0/management/banks/${bank_id}/accounts/${account_id}`)
}

export const UpdateAccountAttribute = (bank_id: string, account_id: string, product_code: string, account_attribute_id: string): Promise<AxiosResponse> => {
    return api.put(`/obp/v6.0.0/banks/${bank_id}/accounts/${account_id}/products/${product_code}/attributes/${account_attribute_id}`)
}

export const UpdateAccountLabel = (bank_id: string, account_id: string): Promise<AxiosResponse> => {
    return api.put(`/obp/v6.0.0/banks/${bank_id}/accounts/${account_id}`)
}

export const UpdateBankAccountBalance = (bank_id: string, account_id: string, balance_id: string): Promise<AxiosResponse> => {
    return api.put(`/obp/v6.0.0/banks/${bank_id}/accounts/${account_id}/balances/${balance_id}`)
}

export const ValidateAndCheckIBAN = (): Promise<AxiosResponse> => {
    return api.post(`/obp/v6.0.0/account/check/scheme/iban`)
}

