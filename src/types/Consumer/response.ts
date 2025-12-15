import { CertificateInfo, RateLimitUsage, User } from "../type";

export interface ResAConsumer {
    consumer_id: string;
    consumer_key: string;
    app_name: string;
    app_type: string;
    description: string;
    developer_email: string;
    company: string;
    redirect_url: string;
    certificate_pem: string;
    certificate_info: CertificateInfo;
    created_by_user: User;
    enabled: boolean;
    created: string; // ISO 8601 date string
    logo_url: string;
}

export interface ResConsumer {
    consumer_id: string;
    app_name: string;
    app_type: string;
    description: string;
    developer_email: string;
    redirect_url: string;
    created_by_user_id: string;
    created_by_user: User;
    enabled: boolean;
    created: string;
}

export interface ResConsumers {
    consumers: ResAConsumer[]
}

export interface ResConsumers_LoggedInUser {
    consumers: ResConsumer[]
}

interface RateLimitState {
    per_second: RateLimitUsage;
    per_minute: RateLimitUsage;
    per_hour: RateLimitUsage;
    per_day: RateLimitUsage;
    per_week: RateLimitUsage;
    per_month: RateLimitUsage;
}

export interface ResRateLimitsForAConsumer {
    per_second_call_limit: string;
    per_minute_call_limit: string;
    per_hour_call_limit: string;
    per_day_call_limit: string;
    per_week_call_limit: string;
    per_month_call_limit: string;
    current_state: RateLimitState;
}

export interface ResSetRateLimits_CallLimitsPerConsumer {
    from_date: string; // ISO 8601 date string
    to_date: string; // ISO 8601 date string
    per_second_call_limit: string;
    per_minute_call_limit: string;
    per_hour_call_limit: string;
    per_day_call_limit: string;
    per_week_call_limit: string;
    per_month_call_limit: string;
}
