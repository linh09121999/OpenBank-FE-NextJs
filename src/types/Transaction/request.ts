export interface ReqTransactionAttribute {
    name: string;
    type: string;
    value: string;
}

export interface ReqTransactionAttributeDefinition {
    name: string;
    category: string;
    type: string;
    description: string;
    alias: string;
    can_be_seen_on_views: string[];
    is_active: boolean;
}