import { Test } from '@servicenow/sdk/core'
import 'https://github.com/servicenow/now-sdk-core/global'

Test({
  $id: Now.ID['test_str_id'],
  name: 'Verify HR Request business impact',
  description: 'This test opens a record producer for HR Request, verifies that business impact is 3, and submits',
  active: true,
  failOnServerError: true,
}, (atf) => {
  atf.catalog.openRecordProducer({
    catalogItem: 'hr_request',
  })

  atf.form.setFieldValues({
    table: 'sc_req_item',
    formUI: 'standard_ui',
    fieldValues: {
      'business_impact': '3',
    },
  })

  atf.form.submitForm({
    assertType: 'form_submitted_to_server',
    formUI: 'standard_ui',
  })
})