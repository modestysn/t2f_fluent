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
    basicAuthentication: '',
    method: 'get',
    path: '/api/now/table/incident',
    queryParameters: { param_sysid: '123456789' },
    headers: {},
    body: '',
  })

  atf.rest.assertStatusCode({
    operation: 'equals',
    statusCode: 200,
  })

  atf.rest.assertResponseJSONPayloadIsValid({})

  atf.rest.assertJsonResponsePayloadElement({
    elementName: 'result',
    operation: 'equals',
    elementValue: 'success',
  })

  atf.rest.assertResponseTime({
    responseOperation: 'less_than',
    responseTime: 1000,
  })
})