import { AttributeRegulated, CertificateInfo, ServiceRegulated, User } from "../type";

export interface ResRegulatedEntity {
    entity_id: string;
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

export interface ResRegulatedEntityAttribute {
    regulated_entity_id: string;
    regulated_entity_attribute_id: string;
    name: string;
    attribute_type: string;
    value: string;
    is_active: boolean;
}

export interface ResAConsumer_Dynamic {
    consumer_id: string;
    consumer_key: string;
    app_name: string;
    app_type: string;
    description: string;
    developer_email: string;
    company: string;
    redirect_url: string;
    certificate_pem: string;
    certificate_info: CertificateInfo;
    created_by_user: User;
    enabled: boolean;
    created: string; // ISO 8601 date string
    logo_url: string;
}

export interface ResAllRegulatedEntityAttributes {
    attributes: ResRegulatedEntityAttribute[]
}

export interface ResRegulatedEntities {
    entities: ResRegulatedEntity[]
}