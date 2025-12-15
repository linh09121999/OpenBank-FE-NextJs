import { AccountRouting, TimeOpenClose } from "../type";

export interface ReqBranch {
    id: string;
    bank_id: string;
    name: string;
    address: {
        line_1: string;
        line_2: string;
        line_3: string;
        city: string;
        county: string;
        state: string;
        postcode: string;
        country_code: string;
    };
    location: {
        latitude: number;
        longitude: number;
    };
    meta: {
        license: {
            id: string;
            name: string;
        };
    };
    lobby: {
        monday: TimeOpenClose[];
        tuesday: TimeOpenClose[];
        wednesday: TimeOpenClose[];
        thursday: TimeOpenClose[];
        friday: TimeOpenClose[];
        saturday: TimeOpenClose[];
        sunday: TimeOpenClose[];
    };
    drive_up: {
        monday: TimeOpenClose;
        tuesday: TimeOpenClose;
        wednesday: TimeOpenClose;
        thursday: TimeOpenClose;
        friday: TimeOpenClose;
        saturday: TimeOpenClose;
        sunday: TimeOpenClose;
    };
    branch_routing: AccountRouting;
    is_accessible: string;
    accessibleFeatures: string;
    branch_type: string;
    more_info: string;
    phone_number: string;
}