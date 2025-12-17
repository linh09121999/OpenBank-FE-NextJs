export interface ResUserAuthContextUpdate {
    user_auth_context_update_id: string;
    user_id: string;
    key: string;
    value: string;
    status: string;
    consumer_id: string;
}

export interface ResPersonalUserAttribute {
    user_attribute_id: string;
    name: string;
    type: string;
    value: string;
    is_personal?: boolean;
    insert_date: string;
}

export interface ResPersonalUserAttributes {
    user_attributes: ResPersonalUserAttribute[]
}

interface Entitlement {
    entitlement_id: string;
    role_name: string;
    bank_id: string;
}

interface UserEntitlements {
    list: Entitlement[];
}

export interface ResUser {
    user_id: string;
    email: string;
    provider_id: string;
    provider: string;
    username: string;
    entitlements: UserEntitlements;
}

export interface ResUserAuthContext {
    user_auth_context_id: string;
    user_id: string;
    key: string;
    value: string;
    time_stamp: string; // ISO 8601 date string
    consumer_id: string;
}

export interface ResUserAuthContextUpdateRequest {
    user_auth_context_update_id: string;
    user_id: string;
    key: string;
    value: string;
    status: string;
    consumer_id: string;
}

interface View {
    bank_id: string;
    account_id: string;
    view_id: string;
}

export interface ResUser_Current {
    user_id: string;
    email: string;
    provider_id: string;
    provider: string;
    username: string;
    entitlements: {
        list: Entitlement[];
    };
    views: {
        list: View[];
    };
}

export interface ResUserLockStatus {
    username: string;
    bad_attempts_since_last_success_or_reset: number;
    last_failure_date: string;
}

interface Agreement {
    type: string;
    text: string;
}

export interface ResUserByUSERNAME {
    user_id: string;
    email: string;
    provider_id: string;
    provider: string;
    username: string;
    entitlements: {
        list: Entitlement[];
    };
    views: {
        list: View[];
    };
    agreements: Agreement[];
    is_deleted: boolean;
    last_marketing_agreement_signed_date: string; // ISO 8601 date-time string
    is_locked: boolean;
}

export interface ResUserWithAttributes {
    user_id: string;
    email: string;
    provider_id: string;
    provider: string;
    username: string;
    user_attributes: ResPersonalUserAttribute[];
}

export interface ResUsersByEmailAddress {
    users: ResUserByUSERNAME[]
}

export interface ResLockTheUser {
    user_id: string;
    type_of_lock: string;
    last_lock_date: string;
}

export interface ResUnlockTheUser {
    username: string;
    bad_attempts_since_last_success_or_reset: number;
    last_failure_date: string;
}