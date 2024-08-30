import { Test } from '@servicenow/sdk/core'
import 'globals'

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