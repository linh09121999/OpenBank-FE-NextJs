import { AccountIdentifier, AccountRouting, FromAccount, HelperInfo, RequestHeader, Scope } from "../type";

export interface ResConsent {
    consent_id: string;
    jwt: string;
    status: string;
}

interface AccountAccess {
    bank_id: string;
    account_id: string;
    view_id: string;
    helper_info: {
        counterparty_ids: string[]
    };
}

export interface ResConsentByCONSENT {
    consent_id: string;
    jwt: string;
    status: string;
    consent_request_id: string;
    account_access: AccountAccess
}

interface ConsentPayload {
    everything: boolean;
    account_access: AccountAccess[];
    phone_number: string;
    valid_from: string; // ISO 8601 date string
    time_to_live: number; // seconds
}

export interface ResConsentRequest {
    consent_request_id: string;
    payload: ConsentPayload;
    consumer_id: string;
}

interface TransactionLimit {
    currency: string;
    max_single_amount: number;
    max_monthly_amount: number;
    max_number_of_monthly_transactions: number;
    max_yearly_amount: number;
    max_number_of_yearly_transactions: number;
}

export interface ToAccount {
    bank_routing: AccountRouting;
    account_routing: AccountRouting;
    branch_routing: AccountRouting;
    limit: TransactionLimit;
}

export interface ResConsentRequestVRP {
    consent_request_id: string;
    payload: {
        from_account: FromAccount;
        to_account: ToAccount;
        valid_from: string;
        time_to_live: number;
    }
    consumer_id: string;
}

export interface ResConsentByConsentIdViaUser {
    consent_id: string;
    jwt: string;
    status: string;
    consent_request_id: string;
    scopes: Scope[];
    consumer_id: string;
}

export interface ResConsentRequest {
    consent_request_id: string;
    payload: {
        everything: boolean;
        account_access: AccountAccess[];
        phone_number: string;
        valid_from: string; // ISO 8601 date string
        time_to_live: number;
    };
    consumer_id: string;
}

interface View {
    bank_id: string;
    account_id: string;
    view_id: string;
    helper_info: HelperInfo;
}

interface Access {
    accounts: AccountIdentifier[];
    balances: AccountIdentifier[];
    transactions: AccountIdentifier[];
    availableAccounts: string;
}

interface JWTPayload {
    createdByUserId: string;
    sub: string;
    iss: string;
    aud: string;
    jti: string;
    iat: number;
    nbf: number;
    exp: number;
    request_headers: RequestHeader[];
    name: string;
    email: string;
    entitlements: Scope[];
    views: View[];
    access: Access;
}

interface Consents {
    consent_reference_id: string;
    consumer_id: string;
    created_by_user_id: string;
    provider: string;
    provider_id: string;
    status: string;
    last_action_date: string;
    last_usage_date: string;
    jwt_payload: JWTPayload;
    api_standard: string;
    api_version: string;
    note: string;
}

export interface ResConsents {
    number_of_rows: number;
    consents: Consents[];
}

interface MyConsents {
    consent_reference_id: string;
    consent_id: string;
    consumer_id: string;
    created_by_user_id: string;
    status: string;
    last_action_date: string;
    last_usage_date: string; // ISO 8601 date string
    jwt: string;
    jwt_payload: JWTPayload;
    api_standard: string;
    api_version: string;
}

export interface ResMyConsents {
    consents: MyConsents[]
}

interface MyConsentsInfo {
    consent_id: string;
    consumer_id: string;
    created_by_user_id: string;
    last_action_date: string;
    last_usage_date: string; // ISO 8601 date string
    status: string;
    api_standard: string;
    api_version: string;
}

export interface ResMyConsentsInfo {
    consents: MyConsentsInfo[];
}

export interface ResProvideClientCertificateInfoOfACurrentCall {
    subject_domain_name: string;
    issuer_domain_name: string;
    not_before: string; // ISO 8601 date string
    not_after: string; // ISO 8601 date string
    roles_info: string;
}
