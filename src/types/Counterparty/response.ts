import { AccountHolder, AccountMetadata, AccountRouting, BespokeAttribute, Location } from "../type";

interface CounterpartyMetadata {
    public_alias: string;
    more_info: string;
    url: string;
    image_url: string;
    open_corporates_url: string;
    corporate_location: Location;
    physical_location: Location;
    private_alias: string;
}

export interface ResCounterparty_Explicit {
    name: string;
    description: string;
    currency: string;
    created_by_user_id: string;
    this_bank_id: string;
    this_account_id: string;
    this_view_id: string;
    counterparty_id: string;
    other_bank_routing_scheme: string;
    other_bank_routing_address: string;
    other_branch_routing_scheme: string;
    other_branch_routing_address: string;
    other_account_routing_scheme: string;
    other_account_routing_address: string;
    other_account_secondary_routing_scheme: string;
    other_account_secondary_routing_address: string;
    is_beneficiary: boolean;
    bespoke: BespokeAttribute[];
    metadata: CounterpartyMetadata;
}

interface Counterparties_Explicit {
    name: string;
    description: string;
    currency: string;
    created_by_user_id: string;
    this_bank_id: string;
    this_account_id: string;
    this_view_id: string;
    counterparty_id: string;
    other_bank_routing_scheme: string;
    other_bank_routing_address: string;
    other_branch_routing_scheme: string;
    other_branch_routing_address: string;
    other_account_routing_scheme: string;
    other_account_routing_address: string;
    other_account_secondary_routing_scheme: string;
    other_account_secondary_routing_address: string;
    is_beneficiary: boolean;
    bespoke: BespokeAttribute[];
}

export interface ResCounterparties_Explicit {
    counterparties: Counterparties_Explicit[];
}

export interface ResOtherAccountById {
    id: string;
    holder: AccountHolder;
    bank_routing: AccountRouting;
    account_routings: AccountRouting[];
    metadata: AccountMetadata;
}

export interface ResOtherAccountsOfOneAccount {
    other_accounts: ResOtherAccountById[]
}