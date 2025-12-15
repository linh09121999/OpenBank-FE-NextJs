import { AccountBalance, AccountRouting } from "../type";

export interface ReqBank {
    id: string;
    bank_code: string;
    full_name: string;
    logo: string;
    website: string;
    bank_routings: AccountRouting[]
}

export interface ReqBankAttribute {
    name: string;
    type: string;
    value: string;
    is_active: boolean;
}

export interface ReqSettlementAccount {
    user_id: string;
    payment_system: string;
    balance: AccountBalance;
    label: string;
    branch_id: string;
    account_routings: AccountRouting[];
}

export interface ReqTransactionTypeABank {
    id: {
        value: string;
    },
    bank_id: string;
    short_code: string;
    summary: string;
    description: string;
    charge: AccountBalance
}

export interface ReqBankAttributeDefinition {
    name: string;
    category: string;
    type: string;
    description: string;
    alias: string;
    can_be_seen_on_views: string[];
    is_active: boolean;
}