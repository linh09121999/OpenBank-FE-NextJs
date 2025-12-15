import { Account, AccountAccess, AccountRouting, Entitlement, FromAccount } from "../type";

interface ViewAccess {
    bank_id: string;
    account_id: string;
    view_id: string;
}


export interface ReqConsent {
    everything: boolean;
    views: ViewAccess[];
    entitlements: Entitlement[];
    consumer_id: string;
    email: string;
    valid_from: string; // ISO 8601 date string
    time_to_live: number;
}


interface TransactionLimit {
    currency: string;
    max_single_amount: string;
    max_monthly_amount: string;
    max_number_of_monthly_transactions: number;
    max_yearly_amount: string;
    max_number_of_yearly_transactions: number;
    max_total_amount: string;
    max_number_of_transactions: number;
}

export interface ToAccount {
    counterparty_name: string;
    bank_routing: AccountRouting;
    account_routing: AccountRouting;
    branch_routing: AccountRouting;
    limit: TransactionLimit;
}

export interface ReqConsentRequest {
    everything: boolean;
    account_access: AccountAccess[];
    entitlements: Entitlement[];
    consumer_id: string;
    email: string;
    phone_number: string;
    valid_from: string; // ISO 8601 date string
    time_to_live: number;
}

export interface ReqConsentRequestVRP {
    from_account: FromAccount;
    to_account: ToAccount;
    email: string;
    phone_number: string;
    valid_from: string; // ISO 8601 date string
    time_to_live: number;
}

export interface ReqConsentAccountAccess {
    access: {
        accounts: Account[]
    }
}