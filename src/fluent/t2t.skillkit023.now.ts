import { Test } from '@servicenow/sdk/core'
import 'https://sdk.servicenow.com/latest/index.js'

Test({
  $id: 'test_str_id',
  name: '',
  description: '',
  active: true,
  failOnServerError: true,
}, (atf) => {
  atf.form_SP.openServicePortalPage({
    portal: 'employee_portal',
    page: '',
    queryParams: {},
  })
  atf.form_SP.openAForm_SP({
    portal: 'employee_portal',
    page: '',
    table: 'task',
    paramID: 'abcdef1234567890',
    view: 'default view',
    queryParameters: {}, 
  })
// EDIT: comiles, but should be atf.form_SP.setFieldValues_SP
  atf.form.setFieldValues({
    table: 'task',
    formUI: 'service_operations_workspace',
    fieldValues: {
      'short_description': 'test short description',
    },
  })
// EDIT: line comments, API should be: atf.form_SP.clickUIAction_SP
//   atf.form.clickUIAction_SP({
//     table: 'task',
//     uiAction: '',
//     assert: 'form_submitted_to_server',
//   })

// EDIT: line comment, should be atf.server.log
//   atf.log('form opened in SP')
})