import { Test } from '@servicenow/sdk/core'
import 'https://developer.servicenow.com/app.do#/api/now/core/r_Fluent_Test_API'

Test({
  $id: Now.ID['test_hr_request'],
  name: 'Test HR Request',
  description: 'Test opening record producer, setting priority, and submitting',
  active: true,
  failOnServerError: true,
}, (atf) => {
  atf.form_SP.openServicePortalPage({
    portal: 'hr_portal',
    page: 'hr_request_page',
    queryParams: {
      catalog: 'hr_request_catalog'
    }
  })

  atf.form_SP.openAForm_SP({
    portal: 'hr_portal',
    page: 'hr_request_page',
    table: 'hr_request',
    paramID: '',
    view: 'default view',
    queryParameters: {}
  })

  atf.form_SP.setFieldValues_SP({
    table: 'hr_request',
    fieldValues: {
      priority: '1'
    }
  })

  atf.form_SP.submitForm_SP({
    assert: 'form_submitted_to_server'
  })
})