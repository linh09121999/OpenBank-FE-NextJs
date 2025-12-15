import { Requested } from "../type";

interface View {
    id: string;
    short_name: string;
    description: string;
    is_public: boolean;
    alias: string;
    hide_metadata_if_alias_used: boolean;
    can_add_comment: boolean;
    can_add_corporate_location: boolean;
    can_add_image: boolean;
    can_add_image_url: boolean;
    can_add_more_info: boolean;
    can_add_open_corporates_url: boolean;
    can_add_physical_location: boolean;
    can_add_private_alias: boolean;
    can_add_public_alias: boolean;
    can_add_tag: boolean;
    can_add_url: boolean;
    can_add_where_tag: boolean;
    can_delete_comment: boolean;
    can_delete_corporate_location: boolean;
    can_delete_image: boolean;
    can_delete_physical_location: boolean;
    can_delete_tag: boolean;
    can_delete_where_tag: boolean;
    can_edit_owner_comment: boolean;
    can_see_bank_account_balance: boolean;
    can_see_bank_account_bank_name: boolean;
    can_see_bank_account_currency: boolean;
    can_see_bank_account_iban: boolean;
    can_see_bank_account_label: boolean;
    can_see_bank_account_national_identifier: boolean;
    can_see_bank_account_number: boolean;
    can_see_bank_account_owners: boolean;
    can_see_bank_account_swift_bic: boolean;
    can_see_bank_account_type: boolean;
    can_see_comments: boolean;
    can_see_corporate_location: boolean;
    can_see_image_url: boolean;
    can_see_images: boolean;
    can_see_more_info: boolean;
    can_see_open_corporates_url: boolean;
    can_see_other_account_bank_name: boolean;
    can_see_other_account_iban: boolean;
    can_see_other_account_kind: boolean;
    can_see_other_account_metadata: boolean;
    can_see_other_account_national_identifier: boolean;
    can_see_other_account_number: boolean;
    can_see_other_account_swift_bic: boolean;
    can_see_owner_comment: boolean;
    can_see_physical_location: boolean;
    can_see_private_alias: boolean;
    can_see_public_alias: boolean;
    can_see_tags: boolean;
    can_see_transaction_amount: boolean;
    can_see_transaction_balance: boolean;
    can_see_transaction_currency: boolean;
    can_see_transaction_description: boolean;
    can_see_transaction_finish_date: boolean;
    can_see_transaction_metadata: boolean;
    can_see_transaction_other_bank_account: boolean;
    can_see_transaction_start_date: boolean;
    can_see_transaction_this_bank_account: boolean;
    can_see_transaction_type: boolean;
    can_see_url: boolean;
    can_see_where_tag: boolean;
}

export interface AccountCard {
    id: string;
    label: string;
    views_available: View[];
    bank_id: string;
}

export interface ResCard {
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
    cvv: string;
    brand: string;
}

export interface ResCardAttribute {
    name: string;
    card_id: string;
    attribute_type: string;
    bank_id: {
        value: string;
    };
    value: string;
    card_attribute_id: string;
}

export interface CardAttributeDefinition {
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

export interface ResCardAttributeDefinition {
    attributes: CardAttributeDefinition[]
}

export interface ResCardById {
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
    card_attributes: ResCardAttribute[];
}

interface CardsForTheSpecifiedBank {
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

export interface ResCardsForTheSpecifiedBank {
    cards: CardsForTheSpecifiedBank[]
}

interface CardsForTheCurrentUse {
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
    posted: string;
}

export interface ResCardsForTheCurrentUse {
    cards: CardsForTheCurrentUse[]
}

interface StatusOfCreditCardOrder {
    card_type: string;
    card_description: string;
    use_type: string
}

export interface ResStatusOfCreditCardOrder {
    cards: StatusOfCreditCardOrder[]
}