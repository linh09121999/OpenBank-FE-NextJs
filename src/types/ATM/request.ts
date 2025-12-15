import { TimeOpenClose } from "../type";

export interface ReqATM {
    id: string;
    bank_id: string;
    name: string;
    address: {
        line_1: string;
        line_2: string;
        line_3: string;
        city: string;
        county: string;
        state: string;
        postcode: string;
        country_code: string;
    };
    location: {
        latitude: number;
        longitude: number;
    };
    meta: {
        license: {
            id: string;
            name: string;
        };
    };
    monday: TimeOpenClose;
    tuesday: TimeOpenClose;
    wednesday: TimeOpenClose;
    thursday: TimeOpenClose;
    friday: TimeOpenClose;
    saturday: TimeOpenClose;
    sunday: TimeOpenClose;
    is_accessible: string; // often sent as string "true"/"false" in OBP
    located_at: string;
    more_info: string;
    has_deposit_capability: string; // often sent as string "true"/"false"
    supported_languages: string[];
    services: string[];
    accessibility_features: string[];
    supported_currencies: string[];
    notes: string[];
    location_categories: string[];
    minimum_withdrawal: string;
    branch_identification: string;
    site_identification: string;
    site_name: string;
    cash_withdrawal_national_fee: string;
    cash_withdrawal_international_fee: string;
    balance_inquiry_fee: string;
    atm_type: string;
    phone: string;
}

export interface ReqATMAttribute {
    name: string;
    type: "STRING" | "INTEGER" | "DOUBLE" | "DATE";
    value: string;
    is_active: boolean;
}

export interface ReqATMAccessibilityFeatures {
    accessibility_features: string[]
}

export interface ReqATMLocationCategories {
    location_categories: string[]
}

export interface ReqATMNotes {
    notes: string[]
}

export interface ReqATMServices {
    services: string[]
}

export interface ReqATMSupportedCurrencies {
    supported_currencies: string[]
}

export interface ReqATMSupportedLanguages {
    supported_languages: string[]
}