import { Test } from '@servicenow/sdk/core'
import '@servicenow/sdk-core/global'

Test({
  $id: Now.ID['test_str_id'],
  name: 'Send a GET REST request to glide',
  description: 'Send a GET REST request to glide, path \'/api/now/table/incident\', query params has param_sysid=123456789, assert the response JSON payload is valid, validate the response JSON payload element \'result\' is \'success\', and status is OK, also assert the response time is less than 1000ms',
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

  atf.rest.assertStatusCodeName({
    responseOperation: 'is',
    codeName: 'OK',
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