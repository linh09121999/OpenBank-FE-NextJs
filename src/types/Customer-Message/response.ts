interface CustomerMessages {
    id: string;
    date: string; // ISO 8601 date string
    transport?: string;
    message: string;
    from_department: string;
    from_person: string;
}

export interface ResCustomerMessages {
  messages: CustomerMessages[];
}