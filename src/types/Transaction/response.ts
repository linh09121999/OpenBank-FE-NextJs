import { AccountBalance, AccountHolder, AccountRouting, LocationUser, Owners } from "../type";

export interface ResTransactionAttribute {
    transaction_attribute_id: string
    name: string;
    type: string;
    value: string;
}

export interface ResTransactionAttributes {
    transaction_attributes: ResTransactionAttribute[]
}

export interface ResTransactionAttributeDefinition {
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

export interface ResTransactionAttributeDefinitions {
    attributes: ResTransactionAttributeDefinition[]
}

interface Transaction {
    bank_id: string;
    account_id: string;
    transaction_id: string;
}

interface TransactionRequest {
    bank_id: string;
    account_id: string;
    transaction_request_id: string;
}

export interface ResBalancingTransaction {
    transaction_request: TransactionRequest;
    debit_transaction: Transaction;
    credit_transaction: Transaction;
}

interface ValueDate {
    id: string;
    value: string;
    date: string;
    user: Owners;
}

interface Image {
    id: string;
    label: string;
    URL: string;
    date: string;
    user: Owners;
}

// Account related interfaces
interface BankAccount {
    id: string;
    bank_routing: AccountRouting;
    account_routings: AccountRouting[];
    holders: AccountHolder[];
}

interface OtherAccountMetadata {
    public_alias: string;
    private_alias: string;
    more_info: string;
    URL: string;
    image_URL: string;
    open_corporates_URL: string;
    corporate_location: LocationUser;
    physical_location: LocationUser;
}

interface OtherAccount {
    id: string;
    holder: AccountHolder;
    bank_routing: AccountRouting;
    account_routings: AccountRouting[];
    metadata: OtherAccountMetadata;
}

interface TransactionDetails {
    type: string;
    description: string;
    posted: string;
    completed: string;
    new_balance: AccountBalance;
    value: AccountBalance;
}

interface TransactionMetadata {
    narrative: string;
    comments: ValueDate[];
    tags: ValueDate[];
    images: Image[];
    where: LocationUser;
}

export interface FirehoseTransactions {
    id: string;
    this_account: BankAccount;
    other_account: OtherAccount;
    details: TransactionDetails;
    metadata: TransactionMetadata;
    transaction_attributes: ResTransactionAttribute[];
}

export interface ResFirehoseTransactions {
    transactions: FirehoseTransactions[]
}

interface BankInfo {
    national_identifier: string;
    name: string;
}

interface AccountMetadata {
    public_alias: string;
    private_alias: string;
    more_info: string;
    URL: string;
    image_URL: string;
    open_corporates_URL: string;
    corporate_location: LocationUser;
    physical_location: LocationUser;
}

export interface ResOtherAccountOfTransaction {
    id: string;
    holder: AccountHolder;
    number: string;
    kind: string;
    IBAN: string;
    swift_bic: string;
    bank: BankInfo;
    metadata: AccountMetadata;
}