export interface ReqConsumer {
    app_name: string;
    app_type: string;
    description: string;
    developer_email: string;
    company: string;
    redirect_url: string;
    enabled: boolean;
    client_certificate: string;
    logo_url: string;
}

export interface ReqSetRateLimits_CallLimitsPerConsumer {
    from_date: string; // ISO 8601 date string
    to_date: string; // ISO 8601 date string
    per_second_call_limit: string;
    per_minute_call_limit: string;
    per_hour_call_limit: string;
    per_day_call_limit: string;
    per_week_call_limit: string;
    per_month_call_limit: string;
}