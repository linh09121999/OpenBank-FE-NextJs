import { BespokeAttribute } from "../type";

export interface ReqMethodRouting {
    is_bank_id_exact_match: boolean;
    method_name: string;
    connector_name: string;
    bank_id_pattern: string;
    parameters: BespokeAttribute[];
}