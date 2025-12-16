import { Property } from "../type";

export interface ReqJSONSchemaValidation {
    $schema: string;
    description: string;
    title: string;
    required: string[];
    type: string;
    properties: {
        xxx_id: Property[]
    };
    additionalProperties: boolean;
}