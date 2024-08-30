import { Test } from '@servicenow/sdk/core'
import ' @servicenow/sdk-core/global'

Test({
$id: Now.ID['test_str_id'],
name: 'Verify incidents module visibility and navigation',
description: 'Verifies incidents module visibility and navigates to it',
active: true,
failOnServerError: true,
}, (atf) => {
atf.applicationNavigator.moduleVisibility({
navigator: 'polaris',
assertVisible: 'only_modules_visible',
visibleModules: ['sc_task'],
assertNotVisible: 'at_least_modules_not_visible', // EDIT: add prop
notVisibleModules: [''] // EDIT: add prop
});

atf.applicationNavigator.navigateToModule({
module: 'sc_task',
});
});