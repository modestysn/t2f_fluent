import { Test } from '@servicenow/sdk/core'
import ' @servicenow/sdk-core/global'

Test({
$id: Now.ID['test_str_id'],
name: '',
description: '',
active: true,
failOnServerError: true,
}, (atf) => {
// const outputOfEmail = EDIT: unused variables
atf.email.generateInboundEmail({
from: 't2t@pale.org',
to: 'no-reply@pale.org',
subject: 'email from text2fluent',
body: 'this is a test email from text2fluent'
})
atf.email.validateOutboundEmail({
conditions: 'subject=email from text2fluent'
})
})