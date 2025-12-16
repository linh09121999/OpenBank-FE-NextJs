import { AlphanumericCode } from "../type";

export interface ResFx {
    bank_id: string;
    from_currency_code: string;
    to_currency_code: string;
    conversion_value: number;
    inverse_conversion_value: number;
    effective_date: string;
}

export interface ResCurrencies{
    currencies: AlphanumericCode[]
}