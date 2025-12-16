import { License } from "../type";

export interface ReqProduct {
    parent_product_code: string;
    name: string;
    more_info_url: string;
    terms_and_conditions_url: string;
    description: string;
    meta: {
        license: License
    };
}

export interface ReqProductAttribute {
    name: string;
    type: string;
    value: string;
    is_active: boolean;
}

export interface ReqProductFee {
    name: string;
    is_active: boolean;
    more_info: string;
    value: {
        currency: string;
        amount: string;
        frequency: string;
        type: string;
    };
}

export interface ReqProductAttributeDefinition {
    name: string;
    category: string;
    type: string;
    description: string;
    alias: string;
    can_be_seen_on_views: string[];
    is_active: boolean;
}