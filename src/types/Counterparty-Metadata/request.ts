import { CorporateLocation } from "../type";

export interface ReqCorporateLocationToCounterparty {
    corporate_location: CorporateLocation
}

export interface ReqPhysicalLocationToOtherBankAccount{
    physical_location: CorporateLocation
}