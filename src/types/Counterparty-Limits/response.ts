export interface ResCounterpartyLimit {
    counterparty_limit_id: string;
    bank_id: string;
    account_id: string;
    view_id: string;
    counterparty_id: string;
    currency: string;
    max_single_amount: string;
    max_monthly_amount: string;
    max_number_of_monthly_transactions: number;
    max_yearly_amount: string;
    max_number_of_yearly_transactions: number;
    max_total_amount: string;
    max_number_of_transactions: number;
}

interface LimitStatus {
    currency_status: string;
    max_monthly_amount_status: string;
    max_number_of_monthly_transactions_status: number;
    max_yearly_amount_status: string;
    max_number_of_yearly_transactions_status: number;
    max_total_amount_status: string;
    max_number_of_transactions_status: number;
}

export interface ResCounterpartyLimitStatus {
    counterparty_limit_id: string;
    bank_id: string;
    account_id: string;
    view_id: string;
    counterparty_id: string;
    currency: string;
    max_single_amount: string;
    max_monthly_amount: string;
    max_number_of_monthly_transactions: number;
    max_yearly_amount: string;
    max_number_of_yearly_transactions: number;
    max_total_amount: string;
    max_number_of_transactions: number;
    status: LimitStatus;
}