import { BespokeAttribute } from "../type";

export interface ResMethodRouting {
    is_bank_id_exact_match: boolean;
    method_name: string;
    connector_name: string;
    method_routing_id: string;
    bank_id_pattern: string;
    parameters: BespokeAttribute[];
}

export interface ResMethodRoutings {
    method_routings: ResMethodRouting[]
}