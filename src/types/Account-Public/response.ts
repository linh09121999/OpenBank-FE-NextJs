import { AccountAttribute, AccountBalance, AccountRouting, AccountRules, Owners, ViewsAvailable } from "../type";

export interface ResPublicAccountbyId {
    id: string;
    bank_id: string;
    label: string;
    number: string;
    owners: Owners[];
    type: string;
    balance: AccountBalance;
    account_routings: AccountRouting[];
    account_rules: AccountRules[];
    account_attributes: AccountAttribute[];
}

interface PublicAccountsatBank {
    id: string;
    label: string;
    bank_id: string;
    views_available: ViewsAvailable[];
}

export interface ResPublicAccountsatBank {
    accounts: PublicAccountsatBank[]
}