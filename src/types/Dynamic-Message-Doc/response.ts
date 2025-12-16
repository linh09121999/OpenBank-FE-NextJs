export interface ResDynamicMessageDoc {
    outbound_avro_schema: string;
    inbound_avro_schema: string;
    adapter_implementation: string;
    dynamic_message_doc_id: string;
    description: string;
    process: string;
    outbound_topic: string;
    method_body: string;
    message_format: string;
    example_outbound_message: Record<string, any>;
    inbound_topic: string;
    example_inbound_message: Record<string, any>;
    bank_id: string;
    programming_lang: string;
}

export interface ResDynamicMessageDocs {
    'dynamic-message-docs': ResDynamicMessageDoc[]
}