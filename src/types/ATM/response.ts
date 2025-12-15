import { TimeOpenClose } from "../type";

export interface ResATMAttribute {
    bank_id: string;
    atm_id: string;
    atm_attribute_id: string;
    name: string;
    type: string;
    value: string;
    is_active: boolean;
}

interface Address {
    line_1: string;
    line_2: string;
    line_3: string;
    city: string;
    county: string;
    state: string;
    postcode: string;
    country_code: string;
}

interface Location {
    latitude: number;
    longitude: number;
}

interface Meta {
    license: {
        id: string;
        name: string;
    };
}

export interface ResATM {
    id: string;
    bank_id: string;
    name: string;
    address: Address;
    location: Location;
    meta: Meta;
    monday: TimeOpenClose;
    tuesday: TimeOpenClose;
    wednesday: TimeOpenClose;
    thursday: TimeOpenClose;
    friday: TimeOpenClose;
    saturday: TimeOpenClose;
    sunday: TimeOpenClose;
    is_accessible: string;
    located_at: string;
    more_info: string;
    has_deposit_capability: string;
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
    attributes: ResATMAttribute[];
}

export interface ResGetATMAttributes {
    atm_attributes: ResATMAttribute[];
}

export interface ResATMS {
    atms: ResATM[]
}

export interface ResATMAccessibilityFeatures {
    atm_id: string;
    accessibility_features: string[]
}

export interface ResATMLocationCategories {
    atm_id: string;
    location_categories: string[]
}

export interface ResATMNotes {
    atm_id: string;
    notes: string[]
}

export interface ResATMServices {
    atm_id: string;
    services: string[]
}

export interface ResATMSupportedCurrencies {
    atm_id: string;
    supported_currencies: string[]
}

export interface ResATMSupportedLanguages {
    atm_id: string;
    supported_languages: string[]
}