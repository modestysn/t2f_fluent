import { Test } from '@servicenow/sdk/core'
import ' @servicenow/sdk-core/global'

Test({
$id: Now.ID['form_update_fluent_test'],
name: 'form update Fluent test',
description: 'opens a new task form, sets the priority field value to 1, submits it, then opens it in the "Service Operations Workspace"',
active: true,
failOnServerError: true,
}, (atf) => {
atf.form.openNewForm({
table: 'task',
formUI: 'standard_ui',
view: 'default view',
})
atf.form.setFieldValues({
table: 'task',
formUI: 'standard_ui',
fieldValues: {
priority: 1,
},
})
const outputOfSubmit = atf.form.submitForm({
assertType: "form_submitted_to_server",
formUI: "standard_ui",
})
atf.form.openExistingRecord({
table: "task",
recordId: outputOfSubmit.record_id,
formUI: "service_operations_workspace",
view: "default view",
selectedTabIndex: 0,
})
atf.server.log({
log: 'record opened'
})
})