import { Test } from '@servicenow/sdk/core'
import ' @servicenow/sdk-core/global'

Test({
$id: Now.ID['test_str_id'],
name: 'ATF test for incident form',
description: 'opens a new incident form, set the category field value to Hardware, then submit the form, and validate the category field value',
active: true,
failOnServerError: true
}, (atf) => {
atf.form.openNewForm({
table: 'incident',
formUI: 'standard_ui',
view: '' // EDIT
})
atf.form.setFieldValues({
table: 'incident',
formUI: 'standard_ui',
fieldValues: {
category: 'Hardware'
}
})
atf.form.submitForm({
assertType: 'form_submitted_to_server',
formUI: 'standard_ui'
})
atf.form.fieldValueValidation({
table: 'incident',
conditions: 'category=Hardware',
formUI: 'standard_ui'
})
})