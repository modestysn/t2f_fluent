import { Test } from '@servicenow/sdk/core'
import 'https://sdk.servicenow.com/latest/client_api.js'

Test({
  $id: Now.ID['test_str_id'],
  name: 'Test incident form submission',
  description: 'This test opens a new incident form, sets the category field value to "Hardware", submits the form, and validates the category field value.',
  active: true,
  failOnServerError: true,
}, (atf) => {
  atf.form.openNewForm({
    table: 'incident',
    formUI: 'standard_ui',
    view: 'default view',
  })

  atf.form.setFieldValues({
    table: 'incident',
    formUI: 'standard_ui',
    fieldValues: {
      category: 'Hardware',
    },
  })

  const outputOfSubmit = atf.form.submitForm({
    assertType: 'form_submitted_to_server',
    formUI: 'standard_ui',
  })

  atf.form.openExistingRecord({
    table: 'incident',
    recordId: outputOfSubmit.record_id,
    formUI: 'standard_ui',
    view: 'default view',
    selectedTabIndex: 0,
  })

  atf.form.fieldValueValidation({
    table: 'incident',
    conditions: 'category=Hardware',
    formUI: 'standard_ui',
  })
})