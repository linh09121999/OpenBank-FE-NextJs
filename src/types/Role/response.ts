export interface ResEntitlement {
    entitlement_id: string;
    role_name: string;
    bank_id: string;
}

interface UserWithRoles {
    entitlement_id: string;
    role_name: string;
    bank_id: string;
    user_id: string;
}

export interface ResUserWithRoles {
    list: UserWithRoles[];
}

interface UserEntitlements {
    list: ResEntitlement[];
}

interface User {
    user_id: string;
    email: string;
    provider_id: string;
    provider: string;
    username: string;
    entitlements: UserEntitlements;
}

export interface ResEntitlementRequest {
    entitlement_request_id: string;
    user: User;
    role_name: string;
    bank_id: string;
    created: string;
}

export interface ResEntitlementRequests {
    entitlement_requests: ResEntitlementRequest[]
}

interface ViewsList {
    bank_id: string;
    account_id: string;
    view_id: string;
}

export interface ResEntitlementsAndPermissions {
    user_id: string;
    email: string;
    provider_id: string;
    provider: string;
    username: string;
    entitlements: UserEntitlements;
    views: {
        list: ViewsList[]
    };
}

interface Role {
    role: string;
    requires_bank_id: string
}

export interface ResRoles {
    roles: Role[]
}