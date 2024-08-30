import { Test } from '@servicenow/sdk/core'
import ' @servicenow/sdk-core/global'

Test({
$id: Now.ID['test_str_id'],
name: '',
description: '',
active: true,
failOnServerError: true,
}, (atf) => {
atf.rest.sendRestRequestInbound({
basicAuthentication: '', // string of sys_id | Record<'sys_auth_profile_basic'>
method: 'get', // 'get' | 'post' | 'put' | 'delete' | 'patch'
path: '/api/now/fluent/scaffold', // string, ex. '/api/now/table/incident'
queryParameters: { new: 'true' }, // object, query parameter name and value pairs, example: { field1: 'value1', field2: 'value2' }
headers: {}, // object, header name and value pairs, example: { field1: 'value1', field2: 'value2' }
body: '', // string, ex. JSON.stringify({field1: 'value1', field2: 'value2'}) if `method` is not 'get'
})
atf.rest.assertStatusCode({
operation: 'equals', // 'equals' | 'not_equals' | 'less_than' | 'greater_than' | 'less_than_equals' |'greater_than_equals'
statusCode: 200, // number
})
atf.rest.assertResponseJSONPayloadIsValid({}) // input object with no properties
})