import { AccountBalance, CorporateLocation, License } from "../type";

interface Meta {
    license: License;
}

interface Address {
    line_1: string;
    line_2: string;
    line_3: string;
    city: string;
    county: string;
    state: string;
    post_code: string;
    country_code: string;
}


interface OperatingHours {
    hours: string;
}

// Bank related interfaces
interface Bank {
    id: string;
    short_name: string;
    full_name: string;
    logo: string;
    website: string;
}

interface User {
    email: string;
    password: string;
    user_name: string;
}

interface Account {
    id: string;
    bank: string;
    label: string;
    number: string;
    type: string;
    balance: AccountBalance;
    IBAN: string;
    owners: string[];
    generate_public_view: boolean;
    generate_accountants_view: boolean;
    generate_auditors_view: boolean;
}

// Transaction related interfaces
interface AccountReference {
    id: string;
    bank: string;
}

interface Counterparty {
    name?: string;
    account_number?: string;
}

interface TransactionDetails {
    type: string;
    description: string;
    posted: string;
    completed: string;
    new_balance: string;
    value: string;
}

interface Transaction {
    id: string;
    this_account: AccountReference;
    counterparty?: Counterparty;
    details: TransactionDetails;
}

// Branch and ATM interfaces
interface Branch {
    id: string;
    bank_id: string;
    name: string;
    address: Address;
    location: CorporateLocation;
    meta: Meta;
    lobby?: OperatingHours;
    driveUp?: OperatingHours;
}

interface ATM {
    id: string;
    bank_id: string;
    name: string;
    address: Address;
    location: CorporateLocation;
    meta: Meta;
}

// Product interface
interface Product {
    bank_id: string;
    code: string;
    name: string;
    category: string;
    family: string;
    super_family: string;
    more_info_url: string;
    meta: Meta;
}

// CRM interface
interface Customer {
    name: string;
    number: string;
}

interface CRM_Event {
    id: string;
    bank_id: string;
    customer: Customer;
    category: string;
    detail: string;
    channel: string;
    actual_date: string;
}

// Main data structure
export interface ReqSandbox {
    banks: Bank[];
    users: User[];
    accounts: Account[];
    transactions: Transaction[];
    branches: Branch[];
    atms: ATM[];
    products: Product[];
    crm_events: CRM_Event[];
}