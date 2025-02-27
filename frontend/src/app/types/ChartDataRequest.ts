/**
 * Datart
 *
 * Copyright 2021
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {
  AggregateFieldActionType,
  SortActionType,
} from 'app/types/ChartConfig';
import { ChartDatasetPageInfo } from 'app/types/ChartDataSet';

export type ChartDataRequest = {
  viewId: string;
  aggregators: Array<{ column: string; sqlOperator: string }>;
  expired?: number;
  filters: ChartDataRequestFilter[];
  flush?: boolean;
  groups?: Array<{ column: string }>;
  functionColumns?: Array<{ alias: string; snippet: string }>;
  limit?: any;
  nativeQuery?: boolean;
  orders: Array<{
    column: string;
    operator: SortActionType;
    aggOperator?: AggregateFieldActionType;
  }>;
  pageInfo?: ChartDatasetPageInfo;
  columns?: string[];
  script?: boolean;
  keywords?: string[];
  cache?: boolean;
  cacheExpires?: number;
  concurrencyControl?: boolean;
  concurrencyControlMode?: string;
  params?: Record<string, string[]>;
  vizId?: string;
  vizName?: string;
  analytics?: Boolean;
};

export type ChartDataRequestFilter = {
  aggOperator?: AggregateFieldActionType | null;
  column: string;
  sqlOperator: string;
  values?: Array<{
    value: string;
    valueType: string;
  }>;
};

export const transformToViewConfig = (viewConfig?: string) => {
  const viewConfigMap = viewConfig ? JSON.parse(viewConfig) : {};
  const obj = {};
  if (viewConfig) {
    const fields = [
      'cache',
      'cacheExpires',
      'concurrencyControl',
      'concurrencyControlMode',
    ];
    fields.forEach(v => {
      obj[v] = viewConfigMap?.[v];
    });
  }
  return obj;
};

export default ChartDataRequest;
