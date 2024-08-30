import { Test } from '@servicenow/sdk/core'
import ' @servicenow/sdk-core/global'

Test({
$id: Now.ID['test_str_id'],
name: '',
description: '',
active: true,
failOnServerError: true,
}, (atf) => {
atf.email.validateOutboundEmailGeneratedByFlow({
sourceFlow: '1234567890abcdef',
conditions: 'subject=email from flow 1234567890abcdef',
})
})