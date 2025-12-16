import { AccountAttribute, License } from "../type";

interface ProductCollection {
    collection_code: string;
    product_code: string;
    items: CollectionItem[];
}

interface CollectionItem {
    member_product_code: string
}

export interface ResPutProductCollection {
    product_collection: ProductCollection[]
}

interface GetProductCollection {
    bank_id: string;
    code: string;
    parent_product_code: string;
    name: string;
    category: string;
    family: string;
    super_family: string;
    more_info_url: string;
    details: string;
    description: string;
    meta: {
        license: License
    };
    product_attributes: AccountAttribute[]
}

export interface ResGetProductCollection {
    collection_code: string;
    products: GetProductCollection[]
}