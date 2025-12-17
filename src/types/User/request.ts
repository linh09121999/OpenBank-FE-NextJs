export interface ReqUser {
    email: string;
    username: string;
    password: string;
    first_name: string;
    last_name: string;
}

export interface ReqPasswordResetUrl {
    username: string;
    email: string;
    user_id: string;
}