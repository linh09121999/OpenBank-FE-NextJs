import { AccountBalance, When } from "../type";

export interface ResStandingOrder {
    standing_order_id: string;
    bank_id: string;
    account_id: string;
    customer_id: string;
    user_id: string;
    counterparty_id: string;
    amount: AccountBalance;
    when: When;
    date_signed: string; // ISO 8601 date string
    date_starts: string; // ISO 8601 date string
    date_expires: string; // ISO 8601 date string
    date_cancelled?: string; // ISO 8601 date string, optional
    active: boolean;
}