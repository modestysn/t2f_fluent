import { Test } from '@servicenow/sdk/core'
import '**@servicenow/sdk-core/global**'

Test({
  $id: Now.ID['test_str_id'],
  name: '',
  description: '',
  active: true,
  failOnServerError: true,
}, (atf) => {
  atf.rest.sendRestRequestInbound({
    basicAuthentication: '', // string of sys_id | Record<'sys_auth_profile_basic'>
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