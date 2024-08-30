import { Test } from '@servicenow/sdk/core'
import 'https://github.com/sergey-chernev/now-sdk/tree/main/packages/sdk-core'

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
    queryParams: {
      name: 'test short description in form SP'
    }
  })
  atf.form_SP.openAForm_SP({
    portal: '',
    page: '',
    table: 'incident',
    paramID: '',
    view: 'default view',
    queryParameters: {} // EDIT: add prop
  })
  atf.form_SP.setFieldValues_SP({
    table: 'incident',
    fieldValues: {
      short_description: 'test short description in form SP'
    }
  })
  atf.form_SP.submitForm_SP({
    assert: 'form_submitted_to_server'
  })
  atf.server.log({
    log: 'incident form submitted'
  })
})