export interface ResApiCollection {
    api_collection_id: string;
    user_id: string;
    api_collection_name: string;
    is_sharable: boolean;
    description: string;
}

export interface ResMyApiCollectionEndpoint {
    api_collection_endpoint_id: string;
    api_collection_id: string;
    operation_id: string;
}

export interface ResAPICollections {
    api_collections: ResApiCollection[]
}

export interface ResApiCollectionEndpoints {
    api_collection_endpoints: ResMyApiCollectionEndpoint[]
}