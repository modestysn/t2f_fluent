import { Test } from '@servicenow/sdk/core'
import 'https://developer.servicenow.com/app.do#/api/now/core/api/Test'

Test({
  $id: Now.ID['test_str_id'],
  name: 'Test HR Request Record Producer',
  description: 'Test HR Request Record Producer',
  active: true,
  failOnServerError: true,
}, (atf) => {
//   atf.form_SP.openRecordProducer({ // EDIT: uses wrong APIs
//     catalogItem: 'hr request',
//   })
  atf.form_SP.setFieldValues_SP({
    table: 'sc_req_item',
    fieldValues: {
      priority: '1',
    },
  })
  atf.form_SP.submitForm_SP({
    assert: 'form_submitted_to_server',
  })
})