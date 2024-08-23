import { Test } from '@servicenow/sdk/core'
import 'https://cdn.jsdelivr.net/npm/@servicenow/sdk-core/global'

Test({
  $id: 'test_str_id',
  name: '',
  description: '',
  active: true,
  failOnServerError: true,
}, (atf) => {
  atf.form_SP.openServicePortalPage({
    portal: 'customer_portal',
    page: '',
    queryParams: {},
  })

  atf.form_SP.openAForm_SP({
    portal: 'customer_portal',
    page: '',
    table: 'problem',
    paramID: 'abcdef1234567890',
    view: 'default view',
    queryParameters: {},
  })

  // EDIT: comiles, but should be atf.form_SP.setFieldValues_SP
  atf.form.setFieldValues({
    table: 'problem',
    formUI: 'service_operations_workspace',
    fieldValues: {
      'short_description': 't2t short description of problem',
    },
  })

// EDIT: lines comment, should be atf.form_SP.fieldStateValidation_SP  
//   atf.form.fieldStateValidation({
//     table: 'problem',
//     formUI: 'service_operations_workspace',
//     visible: ['Update'],
//     notVisible: ['Submit'],
//   })
})