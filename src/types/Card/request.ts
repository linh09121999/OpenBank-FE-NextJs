import { Requested } from "../type";
import { AccountCard } from "./response";

export interface ReqCard {
    card_number: string;
    card_type: string;
    name_on_card: string;
    issue_number: string;
    serial_number: string;
    valid_from_date: string;
    expires_date: string;
    enabled: boolean;
    technology: string;
    networks: string[];
    allows: string[];
    account_id: string;
    replacement: Requested;
    pin_reset: Requested[];
    collected: string;
    posted: string;
    customer_id: string;
    brand: string;
}

export interface ReqCardAttribute {
    name: string;
    type: string;
    value: string;
}

export interface ReqCardAttributeDefinition {
    name: string;
    category: string;
    type: string;
    description: string;
    alias: string;
    can_be_seen_on_views: string[];
    is_active: boolean;
}

export interface ReqUpdateCard {
    card_id: string;
    bank_id: string;
    card_number: string;
    card_type: string;
    name_on_card: string;
    issue_number: string;
    serial_number: string;
    valid_from_date: string; // ISO 8601 date string
    expires_date: string; // ISO 8601 date string
    enabled: boolean;
    cancelled: boolean;
    on_hot_list: boolean;
    technology: string;
    networks: string[];
    allows: string[];
    account: AccountCard;
    replacement: Requested;
    pin_reset: Requested[];
    collected: string; // ISO 8601 date string
    posted: string; // ISO 8601 date string
    customer_id: string;
}