import { RequestMapping } from "../type";

export interface ResEndpointMapping {
    operation_id: string;
    request_mapping: Record<string, any>;
    response_mapping: {
        name: RequestMapping;
        balance: RequestMapping
    };
    endpoint_mapping_id: string
}

export interface ResEndpointMappings {
    'endpoint-mappings': ResEndpointMapping[]
}