import { AdapterImplementation, DependentEndpoint, JsonString, ScannedAPIVersion } from "../type";

// export interface ResBankLevelDynamicResourceDocs {
//     regulated_entity_id: string;
//     regulated_entity_attribute_id: string;
//     name: string;
//     attribute_type: string;
//     value: string;
//     is_active: boolean;
// }

interface GlossaryItem {
    title: string;
    description: {
        markdown: string;
        html: string;
    }
}

export interface ResGlossary {
    glossary_items: GlossaryItem[];
}

interface RequiredFieldInfo {
    [key: string]: string[];
}

interface MessageDoc {
    process: string;
    message_format: string;
    outbound_topic: string;
    inbound_topic: string;
    description: string;
    example_outbound_message: JsonString;
    example_inbound_message: JsonString;
    outboundAvroSchema: JsonString;
    inboundAvroSchema: JsonString;
    adapter_implementation: AdapterImplementation;
    dependent_endpoints: DependentEndpoint[];
    requiredFieldInfo: RequiredFieldInfo
}

export interface ResMessageDoc {
    message_docs: MessageDoc[];
}

export interface ResScannedAPIVersions {
    scanned_api_versions: ScannedAPIVersion[];
}