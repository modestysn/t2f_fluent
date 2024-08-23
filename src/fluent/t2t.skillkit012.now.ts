import { Test } from '@servicenow/sdk/core'
import 'https://github.com/sergey-chernev/servicenow-sdk-core/blob/main/src/global.ts'

Test({
  $id: Now.ID['test_str_id'],
  name: '',
  description: '',
  active: true,
  failOnServerError: true,
}, (atf) => {
  atf.rest.sendRestRequestInbound({
    basicAuthentication: '',
    method: 'get',
    path: '/api/now/table/incident/sysId',
    queryParameters: {},
    headers: {},
    body: '',
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