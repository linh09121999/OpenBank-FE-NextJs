import { RequestBody } from "../type";

export interface ReqDynamicResourceDoc {
    error_response_bodies: string;
    description: string;
    tags: string;
    request_verb: string;
    method_body: string;
    roles: string;
    example_request_body: RequestBody;
    request_url: string;
    bank_id: string;
    partial_function_name: string;
    summary: string;
    success_response_body: RequestBody;
}

export interface ReqDynamicResourceDocEndpointCode {
    request_verb: string;
    request_url: string;
    example_request_body: RequestBody;
    success_response_body: RequestBody;
}