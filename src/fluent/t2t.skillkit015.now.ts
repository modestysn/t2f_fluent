import { Test } from '@servicenow/sdk/core'
import 'https://developer.servicenow.com/app.do#/api_doc/version/latest/appstore_kit/html/api_reference_appstore_kit_atf_test_api.html'

Test({
  $id: Now.ID['test_str_id'],
  name: 'Test name',
  description: 'Test description',
  active: true,
  failOnServerError: true,
}, (atf) => {
  atf.rest.sendRestRequestInbound({
    basicAuthentication: '',
    method: 'get',
    path: '/api/now/fluent/scaffold',
    queryParameters: { new: 'true' },
    headers: {}, // EDIT: add
    body: '' // EDIT add
  })

  atf.rest.assertResponseJSONPayloadIsValid({})

  atf.rest.assertJsonResponsePayloadElement({
    elementName: 'result',
    operation: 'equals',
    elementValue: 'success',
  })

  atf.rest.assertStatusCode({
    operation: 'equals',
    statusCode: 200,
  })
})