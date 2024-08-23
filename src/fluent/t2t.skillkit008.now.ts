import { Test } from '@servicenow/sdk/core'
import 'https://github.com/serivcenow/sn_devstudio_typescript_module/blob/master/src/index.ts'

Test({
  $id: Now.ID['test_str_id'],
  name: 'incident record test',
  description: '',
  active: true,
  failOnServerError: true,
}, (atf) => {
  atf.server.impersonate({
    user: 'admin',
  })

  atf.form.openExistingRecord({
    table: 'incident',
    formUI: 'standard_ui',
    view: 'default view',
    selectedTabIndex: 0,
    recordId: '' // EDIT: add
  })
// EDIT: lines comment. Should have been used atf.server.recordUpdate
//   atf.form.setFieldValues({
//     table: 'incident',
//     formUI: 'standard_ui',
//     fieldValues: {
//       short_description: 'test update field from text2fluent',
//     },
//   })

//   atf.form.submitForm({
//     assertType: 'form_submitted_to_server',
//     formUI: 'standard_ui',
//   })

// EDIT: line comments, should have been used atf.server.recordDelete
//   atf.server.deleteRecord({
//     table: 'incident',
//     recordId: '', // EDIT: atf.form.getFieldValue('incident', 'number'),
//   })

  atf.server.log({
    log: 'record deleted',
  })
})