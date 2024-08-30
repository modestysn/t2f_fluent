import { Test } from '@servicenow/sdk/core'
import ' @servicenow/sdk-core/global'

Test({
$id: Now.ID['test_str_id'], // replace with actual test id
name: 'Check user administration application visibility and fluent module invisibility', // replace with actual test name
description: 'This test checks that the user administration application is visible and the fluent module is not visible', // replace with actual test description
active: true,
failOnServerError: true,
}, (atf) => {
atf.applicationNavigator.moduleVisibility({ // all props are mandatory
navigator: 'polaris', // 'ui15' | 'polaris' | 'ui16'
assertVisible: 'only_modules_visible', // 'at_least_modules_visible' | 'only_modules_visible'
visibleModules: ['user_administration'], // sys_ids of the visible modules
assertNotVisible: 'only_modules_not_visible', // 'only_modules_not_visible' | 'at_least_modules_not_visible'
notVisibleModules: ['fluent'] // array of string sys_ids of the non-visible modules
})
})