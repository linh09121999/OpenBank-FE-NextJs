import { AccountBalance, AccountMinimal, Attribute, MobilePhoneNumber, ToSimple, TransactionFromTo, TransactionRequestTypeAccount, TransactionRequestTypeBank } from "../type";

interface ToTransferToPhone {
    value: AccountBalance;
    description: string;
    message: string;
    from: MobilePhoneNumber;
    to: MobilePhoneNumber;
}

interface ToTransferToATM {
    value: AccountBalance;
    description: string;
    message: string;
    from: MobilePhoneNumber;
    to: {
        legal_name: string;
        date_of_birth: string;
        mobile_phone_number: string;
        kyc_document: {
            type: string;
            number: string;
        };
    };
}

interface ToTransferToAccount {
    value: AccountBalance;
    description: string;
    transfer_type: string;
    future_date: string;
    to: {
        name: string;
        bank_code: string;
        branch_number: string;
        account: {
            number: string;
            iban: string;
        };
    };
}

interface ToSEPACreditTransfer {
    debtorAccount: {
        iban: string;
    };
    instructedAmount: AccountBalance;
    creditorAccount: {
        iban: string;
    };
    creditorName: string;
}

interface TransactionRequestChallengeDetails {
    to_sandbox_tan?: AccountMinimal;
    to_sepa?: {
        iban: string;
    };
    to_counterparty?: {
        counterparty_id: string
    };
    to_simple?: ToSimple;
    to_transfer_to_phone?: ToTransferToPhone;
    to_transfer_to_atm?: ToTransferToATM;
    to_transfer_to_account?: ToTransferToAccount;
    to_sepa_credit_transfers?: ToSEPACreditTransfer;
    to_agent?: {
        bank_id: string;
        agent_number: string;
    };
    value: AccountBalance;
    description: string;
}

export interface ResTransactionRequestChallenge {
    id: string;
    type: string;
    from: AccountMinimal;
    details: TransactionRequestChallengeDetails;
    transaction_ids: string[];
    status: string;
    start_date: string;
    end_date: string;
    challenge?: {
        id: string;
        allowed_attempts: number;
        challenge_type: string;
    };
    charge?: {
        summary: string;
        value: AccountBalance;
    };
}

export interface ResTransactionRequestChallenges {
    transaction_requests_with_charges: ResTransactionRequestChallenge[]
}

export interface ResHistoricalTransactions {
    transaction_id: string;
    from: TransactionFromTo;
    to: TransactionFromTo;
    value: AccountBalance;
    description: string;
    posted: string; // ISO 8601 date string
    completed: string; // ISO 8601 date string
    transaction_request_type: string;
    charge_policy: string;
}

export interface ResTransactionRequest {
    transaction_request_id: string;
    transaction_request_type: string;
    from: AccountMinimal;
    details: TransactionRequestChallengeDetails;
    transaction_ids: string[];
    status: string;
    start_date: string;
    end_date: string;
    challenge?: {
        id: string;
        user_id: string;
        allowed_attempts: number;
        challenge_type: string;
        link: string;
    };
    charge?: {
        summary: string;
        value: AccountBalance;
    };
    attributes?: Attribute[];
}

export interface ResTransactionRequestAttribute {
    transaction_request_attribute_id: string;
    name: string;
    type: string;
    value: string;
}

export interface ResTransactionRequestAttributes {
    transaction_request_attributes: ResTransactionRequestAttributes[]
}

export interface ResTransactionRequestAttributeDefinition {
    attribute_definition_id: string;
    bank_id: string;
    name: string;
    category: string;
    type: string;
    description: string;
    alias: string;
    can_be_seen_on_views: string[];
    is_active: boolean;
}

export interface ResTransactionRequestTypeBanks {
    transaction_request_types: TransactionRequestTypeBank[]
}

export interface ResTransactionRequestTypeAccounts {
    transaction_request_types: TransactionRequestTypeAccount[]
}

export interface ResSaveHistoricalTransactions {
    transaction_id: string;
    from: TransactionFromTo;
    to: TransactionFromTo;
    value: AccountBalance;
    description: string;
    posted: string; // ISO 8601 date string
    completed: string; // ISO 8601 date string
    transaction_request_type: string;
    charge_policy: string;
}