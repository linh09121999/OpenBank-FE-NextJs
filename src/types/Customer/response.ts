import { AccountAttribute, AccountBalance, AccountRouting, CreditRating, Customer, CustomerHandle, FaceImage } from "../type";

export interface ResAddress {
    customer_address_id: string;
    customer_id: string;
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
    insert_date: string;
}

export interface ResCustomerAddresses {
    addresses: ResAddress[]
}

export interface ResAgent {
    agent_id: string;
    bank_id: string;
    legal_name: string;
    mobile_phone_number: string;
    agent_number: string;
    currency: string;
    is_confirmed_agent: boolean;
    is_pending_agent: boolean;
}

export interface ResCustomerAccountLink {
    customer_account_link_id: string;
    customer_id: string;
    bank_id: string;
    account_id: string;
    relationship_type: string;
}

export interface ResCustomerAccountLinks {
    links: ResCustomerAccountLink[]
}

export interface ResCustomerAttribute {
    customer_attribute_id: string;
    name: string;
    type: string;
    value: string;
}

export interface ResCustomerAttributes {
    customer_attributes: ResCustomerAttribute[]
}

export interface ResTaxResidence {
    domain: string;
    tax_number: string;
    tax_residence_id: string;
}

export interface ResUserCustomerLink {
    user_customer_link_id: string;
    customer_id: string;
    user_id: string;
    date_inserted: string; // ISO 8601 date string
    is_active: boolean;
}

export interface ResCustomerAttributeDefinition {
    attribute_definition_id: string;
    bank_id: string;
    name: string;
    category: string;
    type: string;
    description: string;
    alias: string;
    can_be_seen_on_views: string[];
    is_active: boolean;
}


export interface ResCustomerAttributeDefinitions {
    attributes: ResCustomerAttributeDefinition[]
}


interface CRMEvent {
    id: string;
    bank_id: string;
    customer_name: string;
    customer_number: string;
    category: string;
    detail: string;
    channel: string;
    scheduled_date: string; // ISO 8601 date string
    actual_date: string; // ISO 8601 date string
    result: string;
}

export interface ResCRMEvents {
    crm_events: CRMEvent[];
}

interface UserAttribute {
    user_attribute_id: string;
    name: string;
    type: string;
    value: string;
    insert_date: string; // ISO 8601 date string
}

interface UserWithAttributes {
    user_id: string;
    email: string;
    provider_id: string;
    provider: string;
    username: string;
    user_attributes: UserAttribute[];
}

export interface ResCorrelatedUserInfoByCustomer {
    customer: Customer;
    users: UserWithAttributes[];
}

export interface ResCorrelatedEntitiesForTheCurrentUser {
    correlated_entities: ResCorrelatedUserInfoByCustomer[];
}

interface CustomerAccount {
    account_id: string;
    label: string;
    product_code: string;
    balance: AccountBalance;
    branch_id: string;
    account_routings: AccountRouting[];
    account_attributes: AccountAttribute[];
}

export interface ResCustomerOverview {
    bank_id: string;
    customer_id: string;
    customer_number: string;
    legal_name: string;
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
    customer_attributes: ResCustomerAttribute[];
    accounts: CustomerAccount[];
}

export interface ResCustomerOverviewFlat {
    bank_id: string;
    customer_id: string;
    customer_number: string;
    legal_name: string;
    mobile_phone_number: string;
    email: string;
    date_of_birth: string; // ISO 8601 date string
    title: string;
    branch_id: string;
    name_suffix: string;
    customer_attributes: ResCustomerAttribute[];
    accounts: CustomerAccount[];
}

export interface ResCustomerSocialMediaHandles {
    checks: CustomerHandle[];
}

export interface ResCustomerBy {
    bank_id: string;
    customer_id: string;
    customer_number: string;
    legal_name: string;
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
    customer_attributes: ResCustomerAttribute[];
}