export interface ResAccountWebhook {
    account_webhook_id: string; // UUID
    bank_id: string; // Format like "gh.29.uk"
    account_id: string; // UUID
    trigger_name: string;
    url: string;
    http_method: string;
    http_protocol: string;
    created_by_user_id: string; // UUID
    is_active: boolean;
}

export interface ResAccountWebhooks {
    web_hooks: ResAccountWebhook[]
}

export interface ResAccountNotificationWebhook {
    webhook_id: string; // UUID
    bank_id?: string; // Format like "gh.29.uk"
    trigger_name: string;
    url: string;
    http_method: string;
    http_protocol: string;
    created_by_user_id: string;
}