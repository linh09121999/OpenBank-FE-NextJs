import { AxiosResponse } from "axios"
import api from "../apiOpenBankProject"

export const GetAggregateMetrics = (): Promise<AxiosResponse> => {
    return api.get(`/obp/v5.1.0/management/aggregate-metrics`)
}

export const GetConnectorMetrics = (): Promise<AxiosResponse> => {
    return api.get(`/obp/v4.0.0/management/connector/metrics`)
}

export const GetMetrics = (): Promise<AxiosResponse> => {
    return api.get(`/obp/v5.1.0/management/metrics`)
}

export const GetMetricsAtBank = (bank_id: string): Promise<AxiosResponse> => {
    return api.get(`/obp/v5.0.0/management/metrics/banks/${bank_id}`)
}

export const GetTopAPIs = (): Promise<AxiosResponse> => {
    return api.get(`/obp/v4.0.0/management/metrics/top-apis`)
}

export const GetTopConsumers = (): Promise<AxiosResponse> => {
    return api.get(`/obp/v4.0.0/management/metrics/top-consumers`)
}

export const SearchAPIMetricsViaElasticsearch = (): Promise<AxiosResponse> => {
    return api.get(`/obp/v4.0.0/search/metrics`)
}