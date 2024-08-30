import { Test } from '@servicenow/sdk/core'
import ' @servicenow/sdk-core/global'

Test({
$id: Now.ID['test_str_id'],
name: 'ATF test, impersonate admin, create a new incident record, then update the record short description to \'test update field from text2fluent\', validate the record for its short description, then delete the record, then log a message \'record deleted\'',
description: '',
active: true,
failOnServerError: true,
}, (atf) => {
// impersonate admin
atf.server.impersonate({
user: 'admin',
})

// create a new incident record
const outputOfCreate = atf.server.recordInsert({
table: 'incident',
assertType: 'record_successfully_inserted',
enforceSecurity: false,
fieldValues: {
short_description: 'test update field from text2fluent',
},
})

// update the record short description
atf.server.recordUpdate({
table: 'incident',
recordId: outputOfCreate.record_id,
assertType: 'record_successfully_updated',
enforceSecurity: false,
fieldValues: {
short_description: 'test update field from text2fluent',
},
})

// validate the record for its short description
atf.server.recordValidation({
table: 'incident',
recordId: outputOfCreate.record_id,
enforceSecurity: false,
assertType: 'record_validated',
fieldValues: 'test update field from text2fluent', // EDIT: check source: is it really string?
// fieldValues: { // EDIT: lines comments
// short_description: 'test update field from text2fluent',
// },
})

// delete the record
atf.server.recordDelete({
table: 'incident',
recordId: outputOfCreate.record_id,
enforceSecurity: false,
assertType: 'record_successfully_deleted',
})

// log a message
atf.server.log({
log: 'record deleted',
})
})