import { Test } from '@servicenow/sdk/core'
import 'https://developer.servicenow.com/app.do#/api_doc/version/latest/appstore_kit/rest_api_client'

Test({
  $id: Now.ID['test_str_id'],
  name: 'Send a POST REST request to glide',
  description: 'Send a REST API request to glide instance with specified HTTP method, path, query parameters, request headers and body.',
  active: true,
  failOnServerError: true,
}, (atf) => {
  atf.rest.sendRestRequestInbound({
    basicAuthentication: '',
    method: 'post',
    path: '/api/now/table/incident/sysId',
    queryParameters: {},
    headers: {},
    body: JSON.stringify({ short_description: 'updated by table API' }),
  })
  atf.rest.assertStatusCode({
    operation: 'equals',
    statusCode: 200,
  })
  atf.rest.assertResponseTime({
    responseOperation: 'less_than',
    responseTime: 1000,
  })
})