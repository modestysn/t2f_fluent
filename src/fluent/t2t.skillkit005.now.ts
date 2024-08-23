import { Test } from '@servicenow/sdk/core'
import 'https://github.com/servicenow/now-sdk-core/releases/download/v1.0.0/now-sdk-core.js'

Test({
  $id: Now.ID['test_str_id'],
  name: 'ensure Submit button is visible',
  description: '',
  active: true,
  failOnServerError: true,
}, (atf) => {
  atf.form.openNewForm({
    table: 'incident',
    formUI: 'standard_ui',
    view: '' // EDIT: added 
  })

  atf.form.uiActionVisibility({
    table: 'incident',
    formUI: 'standard_ui',
    visible: ['9e1e1e1e1e1e1e1e001e1e1e1e1e1e1e'], // Submit button sys_id // EDIT: []
    notVisible: ['9e1e1e1e1e1e1e1e001e1e1e1e1e1e1e'], // Update button sys_id // EDIT: []
  })

  atf.form.clickADeclarativeAction({
    table: 'incident',
    formUI: 'standard_ui',
    declarativeAction: '9e1e1e1e1e1e1e1e001e1e1e1e1e1e1e', // Reset declarative action sys_id
    assertType: 'form_submitted_to_server',
  })
})