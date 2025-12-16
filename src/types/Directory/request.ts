import { AttributeRegulated, ServiceRegulated } from "../type";

export interface ReqRegulatedEntity {
    certificate_authority_ca_owner_id: string;
    entity_certificate_public_key: string;
    entity_name: string;
    entity_code: string;
    entity_type: string;
    entity_address: string;
    entity_town_city: string;
    entity_post_code: string;
    entity_country: string;
    entity_web_site: string;
    services: ServiceRegulated[];
    attributes: AttributeRegulated[];
}

export interface ReqRegulatedEntityAttribute extends AttributeRegulated {
    is_active: boolean
}