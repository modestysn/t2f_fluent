import { Test } from '@servicenow/sdk/core'
import 'https://cdn.jsdelivr.net/npm/@servicenow/sdk-core/global'

Test({
  $id: Now.ID['test_str_id'],
  name: 'ATF test for validating reference field',
  description: 'open a new incident form, set caller field to \'abel.tuter\', submit it, then opens it in the \'cmdb workspace\'',
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
      caller_id: 'abel.tuter',
    },
  })
  atf.form.submitForm({
    assertType: 'form_submitted_to_server',
    formUI: 'standard_ui',
  })
// EDIT: line comments
//   atf.form.openExistingRecord({
//     table: 'incident',
//     recordId: atf.server.getLastCreatedRecordId(),
//     formUI: 'cmdb_workspace',
//     view: 'default view',
//     selectedTabIndex: 0,
//   })
})