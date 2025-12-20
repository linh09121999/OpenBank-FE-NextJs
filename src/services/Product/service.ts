import { AxiosResponse } from "axios"
import api from "../apiOpenBankProject"

export const CreateProduct = (bank_id: string, product_code: string): Promise<AxiosResponse> => {
    return api.put(`/obp/v5.0.0/banks/${bank_id}/products/${product_code}`)
}

export const CreateProductAttribute = (bank_id: string, product_code: string): Promise<AxiosResponse> => {
    return api.post(`/obp/v4.0.0/banks/${bank_id}/products/${product_code}/attribute`)
}

export const CreateProductFee = (bank_id: string, product_code: string): Promise<AxiosResponse> => {
    return api.post(`/obp/v4.0.0/banks/${bank_id}/products/${product_code}/fee`)
}

export const Create_UpdateProductAttributeDefinition = (bank_id: string): Promise<AxiosResponse> => {
    return api.put(`/obp/v4.0.0/banks/${bank_id}/attribute-definitions/product`)
}

export const DeleteProductAttribute = (bank_id: string, product_code: string, product_attribute_id: string): Promise<AxiosResponse> => {
    return api.delete(`/obp/v4.0.0/banks/${bank_id}/products/${product_code}/attributes/${product_attribute_id}`)
}

export const DeleteProductAttributeDefinition = (bank_id: string, attribute_definition_id: string): Promise<AxiosResponse> => {
    return api.delete(`/obp/v4.0.0/banks/${bank_id}/attribute-definitions/${attribute_definition_id}/product`)
}

export const DeleteProductCascade = (bank_id: string, product_code: string): Promise<AxiosResponse> => {
    return api.delete(`/obp/v4.0.0/management/cascading/banks/${bank_id}/products/${product_code}`)
}

export const DeleteProductFee = (bank_id: string, product_code: string, product_fee_id: string): Promise<AxiosResponse> => {
    return api.delete(`/obp/v4.0.0/banks/${bank_id}/products/${product_code}/fees/${product_fee_id}`)
}

export const GetBankProduct = (bank_id: string, product_code: string): Promise<AxiosResponse> => {
    return api.get(`/obp/v4.0.0/banks/${bank_id}/products/${product_code}`)
}

export const GetProductAttribute = (bank_id: string, product_code: string, product_attribute_id: string): Promise<AxiosResponse> => {
    return api.get(`/obp/v4.0.0/banks/${bank_id}/products/${product_code}/attributes/${product_attribute_id}`)
}

export const GetProductAttributeDefinition = (bank_id: string): Promise<AxiosResponse> => {
    return api.get(`/obp/v4.0.0/banks/${bank_id}/attribute-definitions/product`)
}

export const GetProductFee = (bank_id: string, product_code: string, product_fee_id: string): Promise<AxiosResponse> => {
    return api.get(`/obp/v4.0.0/banks/${bank_id}/products/${product_code}/fees/${product_fee_id}`)
}

export const GetProductFees = (bank_id: string, product_code: string): Promise<AxiosResponse> => {
    return api.get(`/obp/v4.0.0/banks/${bank_id}/products/${product_code}/fees`)
}

export const GetProductTree = (bank_id: string, product_code: string): Promise<AxiosResponse> => {
    return api.get(`/obp/v4.0.0/banks/${bank_id}/product-tree/${product_code}`)
}

export const GetProducts = (bank_id: string): Promise<AxiosResponse> => {
    return api.get(`/obp/v4.0.0/banks/${bank_id}/products`)
}

export const UpdateProductAttribute = (bank_id: string, product_code: string, product_attribute_id: string): Promise<AxiosResponse> => {
    return api.put(`/obp/v4.0.0/banks/${bank_id}/products/${product_code}/attributes/${product_attribute_id}`)
}

export const UpdateProductFee = (bank_id: string, product_code: string, product_fee_id: string): Promise<AxiosResponse> => {
    return api.put(`/obp/v4.0.0/banks/${bank_id}/products/${product_code}/fees/${product_fee_id}`)
}