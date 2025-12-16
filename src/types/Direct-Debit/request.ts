export interface ReqDirectDebit {
    customer_id: string;
    user_id: string;
    counterparty_id: string;
    date_signed: string; // ISO 8601 date string
    date_starts: string; // ISO 8601 date string
    date_expires: string;
}