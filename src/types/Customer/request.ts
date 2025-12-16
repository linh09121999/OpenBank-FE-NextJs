import { AccountBalance, CreditRating, FaceImage } from "../type";

export interface ReqAddress {
    line_1: string;
    line_2: string;
    line_3: string;
    city: string;
    county: string;
    state: string;
    postcode: string;
    country_code: string;
    tags: string[];
    status: string;
}

export interface ReqAgent {
    legal_name: string;
    mobile_phone_number: string;
    agent_number: string;
    currency: string;
}

export interface ReqTheIdentityData {
    legal_name: string;
    date_of_birth: string; // ISO 8601 date string
    title: string;
    name_suffix: string;
}

export interface ReqCustomer {
    legal_name: string;
    customer_number: string;
    mobile_phone_number: string;
    email: string;
    face_image: FaceImage;
    date_of_birth: string; // ISO 8601 date string
    relationship_status: string;
    dependants: number;
    dob_of_dependants: string[]; // ISO 8601 date strings
    credit_rating: CreditRating;
    credit_limit: AccountBalance;
    highest_education_attained: string;
    employment_status: string;
    kyc_status: boolean;
    last_ok_date: string; // ISO 8601 date string
    title: string;
    branch_id: string;
    name_suffix: string;
}

export interface ReqCustomerAccountLink {
    customer_id: string;
    bank_id: string;
    account_id: string;
    relationship_type: string;
}

export interface ReqCustomerAttribute {
    name: string;
    type: string;
    value: string;
}

export interface ReqCustomerSocialMediaHandle {
    customer_number: string;
    type: string;
    handle: string;
    date_added: string; // ISO 8601 date string
    date_activated: string;
}

export interface ReqTaxResidence {
    domain: string;
    tax_number: string;
}

export interface ReqUserCustomerLink {
    user_id: string;
    customer_id: string
}

export interface ReqCustomerAttributeDefinition {
    name: string;
    category: string;
    type: string;
    description: string;
    alias: string;
    can_be_seen_on_views: string[];
    is_active: boolean;
}

export interface ReqAgentStatus {
    is_pending_agent: boolean;
    is_confirmed_agent: boolean
}

export interface ReqTheCreditLimit {
    credit_limit: AccountBalance
}

export interface ReqTheCreditRatingAndSource {
    credit_rating: string
    credit_source: string
}

export interface ReqTheOtherData {
    face_image: FaceImage;
    relationship_status: string;
    dependants: number;
    highest_education_attained: string;
    employment_status: string;
}