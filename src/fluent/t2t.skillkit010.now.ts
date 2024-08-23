import { Test } from '@servicenow/sdk/core'
import '@servicenow/sdk-core/global'

Test({
  $id: Now.ID['test_str_id'],
  name: 'ATF test, impersonate admin, create a new incident record, then update the record short description to \'test update field from text2fluent\', validate the record for its short description, then delete the record, then log a message \'record deleted\'',
  description: '',
  active: true,
  failOnServerError: true,
}, (atf) => {
  atf.server.impersonate({
    user: 'admin',
  })

  // EDIT: not work even builds OK
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

  atf.form.setFieldValues({
    table: 'incident',
    formUI: 'standard_ui',
    fieldValues: {
      short_description: 'test update field from text2fluent',
    },
  })

  atf.form.fieldValueValidation({
    table: 'incident',
    formUI: 'standard_ui',
    conditions: 'short_description==test update field from text2fluent',
  })

  atf.form.submitForm({
    assertType: 'form_submitted_to_server',
    formUI: 'standard_ui',
  })

// EDIT: hullucinate, should be recordDelete
//   atf.server.deleteRecord({
//     table: 'incident',
//     recordId: outputOfSubmit.record_id,
//   })

  atf.server.log({
    log: 'record deleted',
  })
})