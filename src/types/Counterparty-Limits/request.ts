export interface ReqCounterpartyLimit {
    currency: string;
    max_single_amount: string;
    max_monthly_amount: string;
    max_number_of_monthly_transactions: number;
    max_yearly_amount: string;
    max_number_of_yearly_transactions: number;
    max_total_amount: string;
    max_number_of_transactions: number;
}