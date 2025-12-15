import { AccountBalance, AccountRouting } from "../type";

export interface ReqAccount {
    user_id: string;
    label: string;
    product_code: string;
    balance: AccountBalance;
    branch_id: string;
    account_routings: AccountRouting[];
}

export interface ReqAccountAttribute {
    name: string;
    type: string;
    value: string;
    product_instance_code: string;
}

export interface ReqBankAccountBalance {
    balance_type: string;
    balance_amount: string;
}

export interface ReqAccountAttributeDefinition {
    name: string;
    category: string;
    type: "STRING" | "INTEGER" | "DOUBLE" | "DATE_WITH_DAY" | "BOOLEAN";
    description: string;
    alias: string;
    can_be_seen_on_views: string[];
    is_active: boolean;
}

export interface ReqAccountbyAccountRouting {
    bank_id: string;
    account_routing: AccountRouting;
}

export interface ReqAccountsbyAccountRoutingRegex {
    bank_id: string;
    account_routing: AccountRouting;
}

export interface ReqUpdateAccount {
    label: string;
    type: string;
    branch_id: string;
    account_routings: AccountRouting[];
}

export interface ReqBankAccountBalance {
    balance_type: string;
    balance_amount: string
}