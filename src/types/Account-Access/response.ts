export interface ResAccountAccess {
    id: string;
    short_name: string;
    description: string;
    metadata_view: string;
    is_public: boolean;
    is_system: boolean;
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
    can_add_counterparty: boolean;
    can_delete_corporate_location: boolean;
    can_delete_image: boolean;
    can_delete_physical_location: boolean;
    can_delete_tag: boolean;
    can_delete_where_tag: boolean;
    can_edit_owner_comment: boolean;

    can_see_bank_account_balance: boolean;
    can_query_available_funds: boolean;
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

    can_see_bank_routing_scheme: boolean;
    can_see_bank_routing_address: boolean;
    can_see_bank_account_routing_scheme: boolean;
    can_see_bank_account_routing_address: boolean;
    can_see_other_bank_routing_scheme: boolean;
    can_see_other_bank_routing_address: boolean;
    can_see_other_account_routing_scheme: boolean;
    can_see_other_account_routing_address: boolean;

    can_add_transaction_request_to_own_account: boolean;
    can_add_transaction_request_to_any_account: boolean;
    can_see_bank_account_credit_limit: boolean;
    can_create_direct_debit: boolean;
    can_create_standing_order: boolean;
}
