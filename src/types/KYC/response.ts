export interface ResKYCCheck {
    bank_id: string;
    customer_id: string;
    id: string;
    customer_number: string;
    date: string; // ISO 8601 date string
    how: string;
    staff_user_id: string;
    staff_name: string;
    satisfied: boolean;
    comments: string;
}

export interface ResKYCChecks {
    checks: ResKYCCheck[]
}

export interface ResKYCDocument {
    bank_id: string;
    customer_id: string;
    id: string;
    customer_number: string;
    type: string;
    number: string;
    issue_date: string; // ISO 8601 date string
    issue_place: string;
    expiry_date: string;
}

export interface ResKYCDocuments {
    documents: ResKYCDocument[]
}

export interface ResKYCMedia {
    bank_id: string;
    customer_id: string;
    id: string;
    customer_number: string;
    type: string;
    url: string;
    date: string; // ISO 8601 date string
    relates_to_kyc_document_id: string;
    relates_to_kyc_check_id: string;
}

export interface ResKYCMedias {
    medias: ResKYCMedia[]
}

export interface ResKYCStatus {
    customer_id: string;
    customer_number: string;
    ok: boolean;
    date: string;
}

export interface ResKYCStatusAll {
    statuses: ResKYCStatus[]
}