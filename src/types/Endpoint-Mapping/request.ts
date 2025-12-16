import { RequestMapping } from "../type";

export interface ReqEndpointMapping {
    operation_id: string;
    request_mapping: Record<string, any>;
    response_mapping: {
        name: RequestMapping;
        balance: RequestMapping
    };
}