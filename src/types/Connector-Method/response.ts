export interface ResConnectorMethod {
    connector_method_id: string;
    method_name: string;
    method_body: string;
    programming_lang: string;
}

export interface ResAllConnectorMethods {
    connectors_methods: ResConnectorMethod[]
}