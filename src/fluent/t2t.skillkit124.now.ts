import { Test } from '@servicenow/sdk/core'
import 'https://github.com/sergey-chernev/now-sdk/tree/main/packages/sdk-core'

Test({
  $id: Now.ID['test_str_id'],
  name: 'ATF test to open an indicent form in service portal, set the short description to \'test short description in form SP\', then submit the form. Open the submmitted form again in the same portal, validate the \'Report\' declaration action is visible',
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
      'short_description': 'test short description in form SP',
    },
  })
  atf.form_SP.clickUIAction_SP({
    table: 'incident',
    uiAction: '',
    assert: 'form_submitted_to_server',
  })
//   atf.form_SP.openExistingRecord({ // EDIT: lines comments
//     table: 'incident',
//     recordId: '',
//     formUI: 'service_operations_workspace',
//     view: 'default view',
//     selectedTabIndex: 0,
//   })
  atf.form_SP.uiActionVisibilityValidation_SP({
    table: 'incident',
    visible: ['Report'],
    notVisible: [],
  })
})