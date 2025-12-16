export interface ResDirectDebit {
    direct_debit_id: string;
    bank_id: string;
    account_id: string;
    customer_id: string;
    user_id: string;
    counterparty_id: string;
    date_signed: string; // ISO 8601 date string
    date_starts: string; // ISO 8601 date string
    date_expires: string; // ISO 8601 date string
    date_cancelled: string; // ISO 8601 date string
    active: boolean;
}