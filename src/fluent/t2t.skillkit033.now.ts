import { Test } from '@servicenow/sdk/core'
import 'https://cdn.jsdelivr.net/npm/@servicenow/sdk-core/global'

Test({
  $id: Now.ID['test_str_id'],
  name: 'Check user administration application visibility and fluent module invisibility',
  description: 'This test checks that the user administration application is visible and that the fluent module is not visible',
  active: true,
  failOnServerError: true,
}, (atf) => {
  atf.applicationNavigator.navigateToModule({
    module: 'sys_app.user_admin'
  })

  atf.form.uiActionVisibility({
    table: 'sys_app',
    formUI: 'standard_ui',
    visible: ['sys_app.user_admin'], // EDIT: add []
    notVisible: [] // EDIT: add prop
  })

  atf.form.uiActionVisibility({
    table: 'sys_app',
    formUI: 'standard_ui',
    notVisible: ['sys_app.fluent'], // add []
    visible: [], // EDIT: add prop
  })
})