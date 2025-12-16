import { AccountAttribute, Fee, License } from "../type";

export interface ResProduct {
    bank_id: string;
    product_code: string;
    parent_product_code: string;
    name: string;
    more_info_url: string;
    terms_and_conditions_url: string;
    description: string;
    meta: {
        license: License
    };
}

export interface ResProducts {
    products: ResProduct[]
}

export interface ResProductAttribute {
    bank_id: string;
    product_code: string;
    product_attribute_id: string;
    name: string;
    type: string;
    value: string;
    is_active: boolean;
}

export interface ResProductFee {
    bank_id: string;
    product_code: string;
    product_fee_id: string;
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

export interface ResProductFees {
    product_fees: ResProductFee[]
}

export interface ResProductAttributeDefinition {
    attribute_definition_id: string;
    bank_id: string;
    name: string;
    category: string;
    type: string;
    description: string;
    alias: string;
    can_be_seen_on_views: string[];
    is_active: boolean;
}

export interface ResProductAttributeDefinitions {
    attributes: ResProductAttributeDefinition[]
}

export interface ResBankProduct {
    bank_id: string;
    product_code: string;
    product_attribute_id: string;
    name: string;
    more_info_url: string;
    terms_and_conditions_url: string;
    description: string;
    meta: {
        license: License
    };
    attributes: AccountAttribute[];
    fees: Fee[];
}

export interface ResProductAttribute {
    bank_id: string;
    product_code: string;
    product_attribute_id: string;
    name: string;
    type: string;
    is_active: boolean;
}

export interface ResProductTree {
    bank_id: string;
    code: string;
    name: string;
    category: string;
    family: string;
    super_family: string;
    more_info_url: string;
    details: string;
    description: string;
    meta: {
        license: License
    };
    parent_product?: ResProductTree
}