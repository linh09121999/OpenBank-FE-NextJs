import { Customer, User } from "../type";

export interface AccountApplication {
    account_application_id: string;
    product_code: string;
    user: User;
    customer: Customer;
    date_of_application: string;
    status: string;
}

export interface ResAccountApplications {
    account_applications: AccountApplication[]
}