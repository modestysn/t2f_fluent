import { Test } from '@servicenow/sdk/core'
import '**@servicenow/sdk-core/global**'

Test({
$id: Now.ID['test_str_id'],
name: '',
description: '',
active: true,
failOnServerError: true,
}, (atf) => {
atf.server.impersonate({
user: 'itil',
})
atf.responsiveDashboard.responsiveDashboardSharing({
dashboard: 'p1_itsm_dashboard',
assertType: 'can_share_dashboard',
})
atf.server.log({
log: 'dashboard shared',
})
})