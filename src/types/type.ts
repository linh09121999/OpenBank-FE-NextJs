export interface TimeOpenClose {
    opening_time: string;
    closing_time: string;
}

export interface AccountRouting {
    scheme: string;
    address: string;
}

export interface AccountBalance {
    currency: string;
    amount: string;
}

export interface AccountRules {
    scheme: string;
    value: string
}

export interface AccountAttribute {
    product_code: string;
    account_attribute_id: string;
    name: string;
    type: 'DATE_WITH_DAY' | 'STRING' | 'NUMBER' | 'BOOLEAN' | 'CURRENCY' | string;
    value: string;
    product_instance_code?: string;
}

export interface Owners {
    id: string;
    provider: string;
    display_name: string;
}

export interface Success {
    success: string
}

export interface Label {
    label: string
}

export interface Address {
    address: string
}

export interface Attribute {
    name: string;
    value: string;
}

export interface RequestHeader {
    name: string;
    values: string[];
}

export interface Revoked {
    revoked: string
}

export interface User {
    user_id: string;
    email: string;
    provider_id: string;
    provider: string;
    username: string;
}

export interface CustomerMinimal {
    bank_id: string;
    customer_id: string;
}

export interface Customer {
    bank_id: string;
    customer_id: string;
    customer_number: string;
    legal_name: string;
    mobile_phone_number: string;
    email: string;
    face_image: FaceImage;
    date_of_birth: string;
    relationship_status: string;
    dependants: number;
    dob_of_dependants: string[];
    credit_rating: CreditRating;
    credit_limit: AccountBalance;
    highest_education_attained: string;
    employment_status: string;
    kyc_status: boolean;
    last_ok_date: string;
    title?: string;
    branch_id?: string;
    name_suffix?: string;
}

export interface FaceImage {
    url: string;
    date: string;
}

export interface CreditRating {
    rating: string;
    source: string;
}

export interface Status {
    status: string
}

export interface Value {
    value: string
}

export interface ViewsAvailable {
    id: string;
    short_name: string;
    is_public: boolean;
}

export interface Operation {
    operation_id: string
}

export interface Requested {
    requested_date: string;
    reason_requested: string;
}

export interface UserID {
    user_id: string
}

export interface Answer {
    answer: string
}

export interface Entitlement {
    bank_id: string;
    role_name: string;
}

export interface AccountAccess {
    account_routing: AccountRouting;
    view_id: string;
}

export interface FromAccount {
    bank_routing: AccountRouting;
    account_routing: AccountRouting;
    branch_routing: AccountRouting;
}

export interface Scope {
    role_name: string;
    bank_id: string;
}

export interface HelperInfo {
    counterparty_ids: string[];
}

export interface AccountIdentifier {
    iban: string;
    bban: string;
    pan: string;
    maskedPan: string;
    msisdn: string;
    currency: string;
}

export interface Account {
    iban: string
}

export interface CertificateInfo {
    subject_domain_name: string;
    issuer_domain_name: string;
    not_before: string; // ISO 8601 date string
    not_after: string; // ISO 8601 date string
    roles_info: string;
}

export interface Enabled {
    enabled: boolean
}

export interface RateLimitUsage {
    calls_made: number;
    reset_in_seconds: number;
}

export interface Certificate {
    certificate: string
}

export interface LogoUrl {
    logo_url: string
}

export interface AppName {
    app_name: string
}

export interface RedirectUrl {
    redirect_url: string
}

export interface BespokeAttribute {
    key: string;
    value: string;
}

export interface CorporateLocation {
    latitude: number;
    longitude: number;
}

export interface LocationUser extends CorporateLocation {
    date: string; // ISO 8601 date string
    user: Owners;
}

export interface AccountHolder {
    name: string;
    is_alias: boolean;
}

export interface AccountMetadata {
    public_alias: string;
    private_alias: string;
    more_info: string;
    URL: string;
    image_URL: string;
    open_corporates_URL: string;
    corporate_location: Location;
    physical_location: Location;
}

export interface MoreInfo {
    more_info: string
}

export interface OpenCorporatesURL {
    open_corporates_URL: string
}

export interface ImageURL {
    image_URL: string
}

export interface Alias {
    alias: string
}

export interface URL {
    URL: string
}

export interface CustomerNumber {
    customer_number: string
}

export interface CustomerHandle {
    customer_number: string;
    type: string;
    handle: string;
    date_added: string; // ISO 8601 date string
    date_activated: string; // ISO 8601 date string
}

export interface LegalName {
    legal_name: string
}

export interface MobilePhoneNumber {
    mobile_phone_number: string
}

export interface RelationshipType {
    relationship_type: string
}

export interface BranchId {
    branch_id: string
}

export interface Email {
    email: string
}

export interface Creator {
    name: string;
    mobile_phone: string;
    email_address: string;
}

export interface Invitee {
    contact_details: Creator;
    status: string;
}

export interface Present {
    staff_user_id: string;
    customer_user_id: string;
}

export interface Keys {
    session_id: string;
    staff_token: string;
    customer_token: string;
}

export interface Query {
    query: {
        match_all: {};
    };
}

export interface ServiceRegulated {
    CY: string[];
}

export interface AttributeRegulated {
    attribute_type: string;
    name: string;
    value: string;
}

export interface Jwt {
    jwt: string
}

export interface JsonString {
    jsonString: string;
}

export interface AdapterImplementation {
    group: string;
    suggested_order: number;
}

export interface DependentEndpoint {
    name: string;
    version: string;
}

export interface ScannedAPIVersion {
    urlPrefix: string;
    apiStandard: string;
    apiShortVersion: string;
    API_VERSION: string;
}

export interface InfoVersion {
    title: string;
    version: string;
}

export interface Property {
    type: string;
    minLength?: number;
    maxLength?: number;
    example?: string[];
    format?: string;
}

export interface Host {
    host: string
}

export interface FooBar {
    description: string;
    required: string[];
    properties: {
        name: Property;
        number: Property
    }
}

export interface RequestBody {
    'my_user_id'?: string;
    name: string;
    age: number;
    hobby: string[];
    '_optional_fields_': string[]
}

export interface Code {
    code: string
}

export interface RequestMapping {
    entity: string;
    field: string;
    query: string;
}

export interface AlphanumericCode {
    alphanumeric_code: string
}

export interface ResponseBody {
    code: number;
    message: string;
}

export interface TopApi {
    count: number;
    Implemented_by_partial_function: string;
    implemented_in_version: string;
}

export interface TopConsumer {
    count: number;
    consumer_id: string;
    app_name: string;
    developer_email: string;
}

export interface License {
    id: string;
    name: string
}

export interface Fee {
    productFeeId: string;
    name: string;
    is_active: boolean;
    more_info: string;
    value: {
        currency: string;
        amount: string;
        frequency: string;
        type: string;
    };
}

export interface When {
    frequency: string;
    detail: string;
}

export interface LabelURL {
    label: string;
    URL: string
}

export interface Narrative {
    narrative: string
}