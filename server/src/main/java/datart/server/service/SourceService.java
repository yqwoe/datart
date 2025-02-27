/*
 * Datart
 * <p>
 * Copyright 2021
 * <p>
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * <p>
 * http://www.apache.org/licenses/LICENSE-2.0
 * <p>
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package datart.server.service;

import datart.core.data.provider.SchemaInfo;
import datart.core.entity.Source;
import datart.core.mappers.ext.SourceMapperExt;

import java.util.List;

public interface SourceService extends BaseCRUDService<Source, SourceMapperExt> {

    List<Source> listSources(String orgId,boolean active);

    SchemaInfo getSourceSchemaInfo(String sourceId);

    SchemaInfo syncSourceSchema(String sourceId) throws Exception;

}
