import { InfoVersion, Property } from "../type";

export interface ReqDynamicEndpoint {
    swagger: string;
    info: InfoVersion;
    definitions: {
        AccountName: {
            type: string;
            properties: {
                name: Property;
                balance: Property
            }
        }
    }
    paths: {
        '/accounts': {
            post: {
                operationId: string;
                produces: string[];
                responses: {
                    '200': {
                        description: string;
                        schema: {
                            '$ref': string
                        }
                    }
                }
                consumes: string[];
                description: string;
                summary: string
            }
        }
        "/accounts/{account_id}": {
            get: {
                operationId: string,
                produces: string[],
                responses: {
                    "200": {
                        description: string,
                        schema: {
                            "$ref": string
                        }
                    }
                },
                consumes: string[],
                description: string,
                summary: string
            }
        }
    }
    host: string;
    schemes: string[];
}