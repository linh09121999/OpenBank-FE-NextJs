export interface ReqAccountWebhook {
    account_id: string;
    trigger_name: string;
    url: string;
    http_method: string;
    http_protocol: string;
    is_active: string;
}

export interface ReqAccountNotificationWebhook {
    url: string;
    http_method: string;
    http_protocol: string;
}

export interface ReqEnable_DisableAnAccountWebhook {
    account_webhook_id: string; // UUID
    is_active: string;
}