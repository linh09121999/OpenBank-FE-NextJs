export interface ReqKYCCheck {
    customer_number: string;
    date: string; // ISO 8601 date string
    how: string;
    staff_user_id: string;
    staff_name: string;
    satisfied: boolean;
    comments: string;
}

export interface ReqKYCDocument {
    customer_number: string;
    type: string;
    number: string;
    issue_date: string; // ISO 8601 date string
    issue_place: string;
    expiry_date: string;
}

export interface ReqKYCMedia {
    customer_number: string;
    type: string;
    url: string;
    date: string; // ISO 8601 date string
    relates_to_kyc_document_id: string;
    relates_to_kyc_check_id: string;
}

export interface ReqKYCStatus {
    customer_number: string;
    ok: boolean;
    date: string;
}