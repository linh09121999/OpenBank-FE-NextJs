import { AccountBalance, AccountMinimal, AttributeRegulated, Reason, Refund, TransactionFromTo } from "../type";

export interface ReqTransactionRequestChallenge {
    id: string;
    answer: string;
    reason_code?: string;
    additional_information?: string;
}

export interface ReqHistoricalTransactions {
    from_account_id: string;
    to_account_id: string;
    value: AccountBalance;
    description: string;
    posted: string; // ISO 8601 date string
    completed: string; // ISO 8601 date string
    type: string;
    charge_policy: string;
}

export interface ReqTransactionRequest {
    to?: AccountMinimal;
    value: AccountBalance;
    description: string;
    charge_policy?: string;
    future_date?: string;
    attributes?: AttributeRegulated
}

export interface ReqTransactionRequest_CARD {
    card: {
        card_type: string;
        brand: string;
        cvv: string;
        card_number: string;
        name_on_card: string;
        expiry_year: string;
        expiry_month: string;
    };
    to: {
        counterparty_id: string
    };
    value: AccountBalance;
    description: string;
}

export interface ReqTransactionRequest_REFUND {
    to: AccountMinimal;
    from: {
        counterparty_id: string;
    };
    value: AccountBalance;
    description: string;
    refund: Refund;
}

export interface ReqTransactionRequest_SEPA {
    value: AccountBalance;
    to: {
        iban: string;
    };
    description: string;
    charge_policy: string;
    future_date: string;
    reasons: Reason[];
}

export interface TransactionRequest_SIMPLE {
    to: {
        name: string;
        description: string;
        other_bank_routing_scheme: string;
        other_bank_routing_address: string;
        other_account_routing_scheme: string;
        other_account_routing_address: string;
        other_account_secondary_routing_scheme: string;
        other_account_secondary_routing_address: string;
        other_branch_routing_scheme: string;
        other_branch_routing_address: string;
    };
    value: AccountBalance;
    description: string;
    charge_policy: string;
    future_date: string;
}

export interface ReqTransactionRequestAttributeDefinition {
    name: string;
    category: string;
    type: string;
    description: string;
    alias: string;
    can_be_seen_on_views: string[];
    is_active: boolean;
}

export interface ReqSaveHistoricalTransactions {
    from: TransactionFromTo;
    to: TransactionFromTo;
    value: AccountBalance;
    description: string;
    posted: string; // ISO 8601 date string
    completed: string; // ISO 8601 date string
    type: string;
    charge_policy: string;
}