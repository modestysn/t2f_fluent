import { Test } from '@servicenow/sdk/core'
import ' @servicenow/sdk-core/global'
Test({
$id: Now.ID['test_hr_request'],
name: 'Test HR Request',
description: 'Test HR Request record producer',
active: true,
failOnServerError: true,
}, (atf) => {
atf.catalog.openRecordProducer({
catalogItem: 'hr_request'
})
atf.form.fieldValueValidation({
table: 'hr_request',
conditions: 'business_impact=3',
formUI: 'standard_ui'
})
atf.catalog.submitRecordProducer({
assert: 'form_submitted_to_server'
})
})