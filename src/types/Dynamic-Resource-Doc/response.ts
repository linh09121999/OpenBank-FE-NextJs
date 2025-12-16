import { RequestBody } from "../type";

export interface ResDynamicResourceDoc {
    error_response_bodies: string;
    description: string;
    tags: string;
    dynamic_resource_doc_id: string;
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

export interface ResDynamicResourceDocs {
    "dynamic-resource-docs": ResDynamicResourceDoc[]
}