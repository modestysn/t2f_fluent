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
    path: '/api/now/fluent/scaffold',
    queryParameters: { new: 'true' },
    headers: {}, // EDIT: add
    body: '' // EDIT: add
  })

  atf.rest.assertStatusCode({
    operation: 'equals',
    statusCode: 200,
  })

  atf.rest.assertResponseJSONPayloadIsValid({})
})