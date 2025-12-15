import { BespokeAttribute } from "../type";

export interface ReqCounterparty_Explicit {
    name: string;
    description: string;
    currency: string;
    other_account_routing_scheme: string;
    other_account_routing_address: string;
    other_account_secondary_routing_scheme: string;
    other_account_secondary_routing_address: string;
    other_bank_routing_scheme: string;
    other_bank_routing_address: string;
    other_branch_routing_scheme: string;
    other_branch_routing_address: string;
    is_beneficiary: boolean;
    bespoke: BespokeAttribute[];
}