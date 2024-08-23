import { Test } from '@servicenow/sdk/core'
import 'https://developer.servicenow.com/app.do#/api/now/core/r_sys_ui_action'
import 'https://developer.servicenow.com/app.do#/api/now/table/sys_app_module'

Test({
  $id: Now.ID['test_str_id'],
  name: 'Verify incidents module is visible and navigate to it',
  description: 'Verifies that the incidents module is visible and then navigates to it',
  active: true,
  failOnServerError: true,
}, (atf) => {
  atf.applicationNavigator.moduleVisibility({
    navigator: 'ui16',
    visibleModules: ['8f61a8a8db83016700a1a30a8218004e'], // sys_id of incidents module
    assertVisible: 'only_modules_visible',
    notVisibleModules: [''], // EDIT: add missing prop
    assertNotVisible: 'only_modules_not_visible', // EDIT: add missing prop
  })
  atf.applicationNavigator.navigateToModule({
    module: '8f61a8a8db83016700a1a30a8218004e', // sys_id of incidents module
  })
})