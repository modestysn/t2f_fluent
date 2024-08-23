import { Test } from '@servicenow/sdk/core'
import 'https://cdn.jsdelivr.net/npm/@servicenow/sdk-core/global'

Test({
  $id: Now.ID['test_str_id'],
  name: 'ATF test to open an indicent form in service portal, set the short description to \'test short description in form SP\', then submit the form. Open the submmited form again in the same portal, validate the \'Report\' declaration action is visible',
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

  atf.form_SP.clickUIAction_SP({
    table: 'incident',
    uiAction: '',
    assert: 'form_submitted_to_server',
  })

// EDIT: should be: atf.form_SP.openAForm_SP  
//   atf.form_SP.openExistingRecord({
//     table: 'incident',
//     recordId: '',
//     formUI: 'service_operations_workspace',
//     view: 'default view',
//     selectedTabIndex: 0,
//   })

  atf.form.declarativeActionVisibility({
    table: 'incident',
    formUI: 'service_operations_workspace',
    visible: ['Report'], // EDIT: add []
    notVisible: [], // EDIT: add prop and []
  })
})