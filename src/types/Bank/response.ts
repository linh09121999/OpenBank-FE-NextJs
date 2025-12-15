import { AccountAttribute, AccountBalance, AccountRouting, Attribute } from "../type";

export interface ResBank {
    id: string;
    bank_code: string;
    full_name: string;
    logo: string;
    website: string;
    bank_routings: AccountRouting[];
    attributes: Attribute[]
}

export interface BankAttribute {
    bank_id: string;
    bank_attribute_id: string;
    name: string;
    type: string;
    value: string;
    is_active: boolean;
}

export interface ResSettlementAccount {
    account_id: string;
    user_id: string;
    payment_system: string;
    balance: AccountBalance;
    label: string;
    branch_id: string;
    account_routings: AccountRouting[];
    account_attributes: AccountAttribute[];
}

export interface ResTransactionTypeABank {
    id: {
        value: string;
    },
    bank_id: string;
    short_code: string;
    summary: string;
    description: string;
    charge: AccountBalance
}

export interface ResBankAttribute {
    bank_attribute_id: string;
    bank_id: string;
    name: string;
    category: string;
    type: string;
    description: string;
    alias: string;
    can_be_seen_on_views: string[];
    is_active: boolean;
}

export interface ResBankAttributes {
    bank_attributes: BankAttribute[]
}

export interface ResSettlementAccountsAtBank {
    account_id: string;
    payment_system: string;
    balance: AccountBalance;
    label: string;
    branch_id: string;
    account_routings: AccountRouting[];
    account_attributes: AccountAttribute[];
}

export interface ResTransactionTypesAtBank {
    transaction_types: ResTransactionTypeABank[]
}