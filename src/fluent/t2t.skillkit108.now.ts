import { Test } from '@servicenow/sdk/core'
import ' @servicenow/sdk-core/global'

Test({
$id: Now.ID['incident_record_test'],
name: 'incident record test',
description: 'impersonate admin, create a new incident record, then update the record short description to \'test update field from text2fluent\', delete the record, then log a message \'record deleted\'',
active: true,
failOnServerError: true,
}, (atf) => {
// impersonate admin
atf.server.impersonate({
user: 'admin',
})

// create a new incident record
atf.server.recordInsert({
table: 'incident',
assertType: 'record_successfully_inserted',
enforceSecurity: false,
fieldValues: {
short_description: 'test record',
},
})

// update the record short description
const outputOfInsert = atf.server.recordInsert({
table: 'incident',
assertType: 'record_successfully_inserted',
enforceSecurity: false,
fieldValues: {
short_description: 'test update field from text2fluent',
},
})

// delete the record
atf.server.recordDelete({
table: 'incident',
recordId: outputOfInsert.record_id,
enforceSecurity: false,
assertType: 'record_successfully_deleted',
})

// log a message
atf.server.log({
log: 'record deleted',
})
})