export interface LevelEndPointTag {
    bank_id: string;
    endpoint_tag_id: string;
    operation_id: string;
    tag_name: string;
}

interface Property {
    property: string;
    value: string;
}

export interface APIConfig {
    akka: {
        ports: Property[];
        log_level: string;
        remote_data_secret_matched: boolean;
    };
    elastic_search: {
        metrics: Property[];
        warehouse: Property[];
    };
    cache: Array<{
        function_name: string;
        ttl_in_seconds: number;
    }>;
    scopes: {
        require_scopes_for_all_roles: boolean;
        require_scopes_for_listed_roles: string[];
    };
}

export interface APIInfo {
    version: string;
    version_status: string;
    git_commit: string;
    connector: string;
    hostname: string;
    local_identity_provider: string;
    hosted_by: {
        organisation: string;
        email: string;
        phone: string;
        organisation_website: string;
    };
    hosted_at: {
        organisation: string;
        organisation_website: string;
    };
    energy_source: {
        organisation: string;
        organisation_website: string;
    };
    resource_docs_requires_role: boolean;
}

interface Accounts {
    bank_id: string;
    account_id: string;
    view_id: string;
}

export interface APITags {
    accounts: Accounts[];
}

interface BackendMessages {
    source: string;
    status: string;
    errorCode: string;
    text: string;
    duration: string;
}

export interface AdapterInfo {
    name: string;
    version: string;
    git_commit: string;
    date: string;
    total_duration: string;
    backend_messages: BackendMessages[];
}

export interface AdapterInfoForABank {
    name: string;
    version: string;
    git_commit: string;
    date: string;
}

export interface ConnectorStatus {
    connector_version: string;
    git_commit: string;
    duration_time: string;
}

export interface JSONWebKey {
    kty: string;
    e: string;
    use: string;
    kid: string;
    n: string;
}

interface JwksUri {
    jwks_uri: string;
}

export interface URIs {
    jwks_uris: JwksUri[]
}

export interface MapperDatabaseInfo {
    name: string;
    version: string;
    git_commit: string;
    date: string;
}

export interface RateLimitingInfo {
    enabled: boolean;
    technology: string;
    service_available: boolean;
    is_active: boolean;
}

export interface SuggestedSessionTimeout {
    timeout_in_seconds: string
}

export interface TheCallContextOfACurrentCall {
    jwks_uris: JwksUri[]
}

export interface WaitingForGodot {
    sleep_in_milliseconds: number
}