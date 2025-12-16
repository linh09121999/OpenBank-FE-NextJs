export interface ReqEntitlement {
    bank_id: string;
    role_name: string
}

interface UserRole {
    bank_id: string;
    role_name: string;
}

export interface ReqUserWithRoles {
    username: string;
    provider: string;
    roles: UserRole[];
}