import { Test } from '@servicenow/sdk/core'
import '**@servicenow/sdk-core/global**'

Test({
$id: Now.ID['test_str_id'],
name: 'ensure Submit button is visible',
description: '',
active: true,
failOnServerError: true,
}, (atf) => {
// Open new incident form
atf.form.openNewForm({
table: 'incident',
formUI: 'standard_ui',
view: 'default view',
})

// Check Submit button is visible
atf.form.uiActionVisibility({
table: 'incident',
formUI: 'standard_ui',
visible: ['8f6c8e1a0a0a0a0a0a0a0a0a0a0a0a0a'], // sys_id of Submit button
notVisible: ['8f6c8e1a0a0a0a0a0a0a0a0a0a0a0a0b'], // sys_id of Update button
})

// Click declarative action Reset
atf.form.clickADeclarativeAction({
table: 'incident',
formUI: 'standard_ui',
declarativeAction: '8f6c8e1a0a0a0a0a0a0a0a0a0a0a0a0c', // sys_id of Reset declarative action
assertType: 'form_submitted_to_server',
})
})