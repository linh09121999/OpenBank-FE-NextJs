import { AccountAttribute, AccountBalance, AccountRouting, AccountRules, Attribute, Owners } from "../type";

export interface View {
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

export interface ResAvailableFunds {
    answer: string;
    date: string;
    available_funds_request_id: string;
}


export interface ResAccount {
    account_id: string;
    user_id: string;
    label: string;
    product_code: string;
    balance: AccountBalance;
    branch_id: string;
    account_routings: AccountRouting[];
    account_attributes: AccountAttribute[];
}

export interface ResBankAccountBalance {
    bank_id: string;
    account_id: string;
    balance_id: string;
    balance_type: string;
    balance_amount: string;
}

export interface ResAccountAttributeDefinition {
    attribute_definition_id: string;
    bank_id: string;
    name: string;
    category: string;
    type: "STRING" | "INTEGER" | "DOUBLE" | "DATE_WITH_DAY" | "BOOLEAN";
    description: string;
    alias: string;
    can_be_seen_on_views: string[];
    is_active: boolean;
}

interface AccountAccess {
    bank_id: string;
    account_id: string;
    view_id: string;
}

export interface ResAccountAccessbyUSER_ID {
    accounts: AccountAccess[];
}

export interface ResAccountAttributeDefinition {
    attributes: ResAccountAttributeDefinition[]
}

interface Balance {
    type: string;
    currency: string;
    amount: string;
}

export interface ResAccountBalancesbyBANK_ID {
    bank_id: string;
    account_id: string;
    account_routings: AccountRouting[];
    label: string;
    balances: Balance[];
}

export interface ResAccountBalancesbyBANK_IDthroughtheVIEW_ID {
    accounts: ResAccountBalancesbyBANK_ID[]
}

interface Tag {
    id: string;
    value: string;
    date: string;
    user: Owners;
}

export interface ResAccountbyAccountRouting {
    id: string;
    label: string;
    number: string;
    owners: Owners[];
    product_code: string;
    balance: AccountBalance;
    views_available: View[];
    bank_id: string;
    account_routings: AccountRouting[];
    account_attributes: AccountAttribute[];
    tags: Tag[];
}

export interface ResAccountbyId_Core {
    id: string;
    bank_id: string;
    label: string;
    number: string;
    product_code: string;
    balance: AccountBalance;
    account_routings: AccountRouting[];
    views_basic: string[];
}

export interface ResAccountbyId_Full {
    id: string;
    label: string;
    number: string;
    owners: Owners[];
    product_code: string;
    balance: AccountBalance;
    views_available: View[];
    bank_id: string;
    account_routings: AccountRouting[];
    account_attributes: AccountAttribute[];
    tags: Tag[];
}

interface BankAccountHeld {
    id: string;
    label: string;
    bank_id: string;
    number: string;
    account_routings: AccountRouting[];
}

export interface ResAccountsHeld {
    accounts: BankAccountHeld[];
}

interface AccountsMinimalforaCustomer {
    bank_id: string;
    account_id: string;
    view_id: string;
}

export interface ResAccountsMinimalforaCustomer {
    accounts: AccountsMinimalforaCustomer[];
}

interface ViewBasic {
    id: string;
    short_name: string;
    description?: string;
    is_public: boolean;
}

interface AccountsatBank {
    id: string;
    label: string;
    bank_id: string;
    views_available: ViewBasic[];
}

export interface ResAccountsatBank {
    accounts: AccountsatBank[];
}

interface ID {
    id: string
}

export interface ResAccountsatBank_IDsonly {
    accounts: ID[]
}

interface AccountsatBank {
    id: string;
    label: string;
    bank_id: string;
    account_type: string;
    account_routings: AccountRouting[];
    views: ViewBasic[];
}

export interface ResAccountsatBank {
    accounts: AccountsatBank[]
}

export interface ResAccountsbyAccountRoutingRegex {
    accounts: ResAccountbyAccountRouting[]
}

export interface ResAgent {
    agent_id: string;
    bank_id: string;
    legal_name: string;
    mobile_phone_number: string;
    agent_number: string;
    currency: string;
    is_confirmed_agent: boolean;
    is_pending_agent: boolean;
}

interface AgentsatBank {
    agent_id: string;
    legal_name: string;
    agent_number: string;
}

export interface ResAgentsatBank {
    agents: AgentsatBank[]
}


export interface ResAllBankAccountBalances {
    balances: ResBankAccountBalance[];
}

interface Account {
    bank_id: string;
    account_id: string;
    account_type: string;
    account_routings: AccountRouting[];
    branch_routings: AccountRouting[];
}

interface Order {
    order_id: string;
    order_date: string;
    number_of_checkbooks: string;
    distribution_channel: string;
    status: string;
    first_check_number: string;
    shipping_code: string;
}

interface OrderEntry {
    order: Order;
}

export interface ResCheckbookOrders {
    account: Account;
    orders: OrderEntry[];
}

interface FastFirehoseAccountsatBank {
    id: string;
    label: string;
    number: string;
    owners: Owners[];
    product_code: string;
    balance: AccountBalance;
    account_routings: AccountRouting[];
    account_attributes: AccountAttribute[];
}

export interface ResFastFirehoseAccountsatBank {
    accounts: FastFirehoseAccountsatBank[]
}

interface FirehoseAccountsatBank {
    id: string;
    label: string;
    number: string;
    owners: Owners[];
    product_code: string;
    balance: AccountBalance;
    account_routings: AccountRouting[];
    account_rules: AccountRules[]
}

export interface ResFirehoseAccountsatBank {
    accounts: FirehoseAccountsatBank[]
}

export interface ResUpdateAccount {
    bank_id: string;
    account_id: string;
    label: string;
    type: string;
    branch_id: string;
    account_routings: AccountRouting[];
}

interface ValidateAndCheckIBAN {
    bank_routings: AccountRouting[];
    bank: string;
    branch: string;
    address: string;
    city: string;
    postcode: string;
    phone: string;
    country: string;
    attributes: Attribute[];
}

export interface ResValidateAndCheckIBAN {
    is_valid: boolean;
    details: ValidateAndCheckIBAN;
}