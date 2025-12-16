import { AccountBalance, When } from "../type";

export interface ReqStandingOrder {
    customer_id: string;
    user_id: string;
    counterparty_id: string;
    amount: AccountBalance;
    when: When;
    date_signed: string; // ISO 8601 date string
    date_starts: string; // ISO 8601 date string
    date_expires: string;
}