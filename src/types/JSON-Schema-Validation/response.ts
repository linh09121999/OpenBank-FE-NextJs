import { Property } from "../type";

export interface ResJSONSchemaValidation {
    operation_id: string;
    json_schema: {
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
}

export interface ResJSONSchemaValidations {
    json_schema_validations: ResJSONSchemaValidation[]
}