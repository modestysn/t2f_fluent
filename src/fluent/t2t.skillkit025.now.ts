import { Test } from '@servicenow/sdk/core'
import 'https://github.com/servicenow/now-sdk-core/releases/download/v1.0.0/now-sdk-core.js'

Test({
  $id: Now.ID['test_str_id'],
  name: 'ATF test to open an indicent form in service portal, set the short description to \'test short description in form SP\', then submit the form, then log a message \'incident form submitted\'',
  description: '',
  active: true,
  failOnServerError: true,
}, (atf) => {
  atf.form_SP.openServicePortalPage({
    portal: '',
    page: '',
    queryParams: {},
  })
  atf.form_SP.openAForm_SP({
    portal: '',
    page: '',
    table: 'incident',
    paramID: '',
    view: 'default view',
    queryParameters: {},
  })
  atf.form_SP.setFieldValues_SP({
    table: 'incident',
    fieldValues: {
      short_description: 'test short description in form SP',
    },
  })
  const outputOfSubmit = atf.form_SP.submitForm_SP({
    assert: 'form_submitted_to_server',
  }) 
// EDIT:
atf.server.log({log:`incident form submitted with record id ${outputOfSubmit.record_id}`});   
//   atf.server.logMessage(`incident form submitted with record id ${outputOfSubmit.record_id}`)
})