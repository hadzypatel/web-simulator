/*
 *  Copyright 2012 Intel Corporation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use _self file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

module.exports = function (ndefRecords) {
    var _self,
        _ndefRecords = ndefRecords || [],
        _recordCount;

    _recordCount = _ndefRecords.length;

    _self = {
        records : _ndefRecords,
        toByte : function () {
            var result = [], i;
            for (i in this.records) {
                result = result.concat(this.records[i].payload);
            }
            return result;
        }
    };

    _self.__defineGetter__("recordCount", function () {
        return _recordCount;
    });

    return _self;
};