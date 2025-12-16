import { ResponseBody, TopApi, TopConsumer } from "../type";

export interface ResAggregateMetrics {
    count: number;
    average_response_time: number;
    minimum_response_time: number;
    maximum_response_time: number
}

interface ConnectorMetrics {
    connector_name: string;   // Example: "mapper"
    function_name: string;    // Example: "getBanks"
    correlation_id: string;   // Example: "12345"
    date: string;             // ISO 8601 date-time string, e.g., "1100-01-01T00:00:00Z"
    duration: number;         // Duration in milliseconds (integer)
}

export interface ResConnectorMetrics {
    metrics: ConnectorMetrics[];
}

interface Metric {
  user_id: string;
  url: string;
  date: string; // ISO string
  user_name: string;
  app_name: string;
  developer_email: string;
  implemented_by_partial_function: string;
  implemented_in_version: string;
  consumer_id: string;
  verb: string;
  correlation_id: string;
  duration: number;
  source_ip?: string;
  target_ip?: string;
  response_body?: ResponseBody;
}

export interface ResMetrics {
  metrics: Metric[];
}

export interface ResTopApis {
  top_apis: TopApi[];
}

export interface ResTopConsumers {
  top_consumers: TopConsumer[];
}