import { Test } from '@servicenow/sdk/core'
import ' @servicenow/sdk-core/global'

Test({
$id: Now.ID['test_str_id'],
name: 'ATF test to impersonate csm_agent, open a report p1_itsm_report, assert the report is invisible, then log a message report is not visible',
description: '',
active: true,
failOnServerError: true,
}, (atf) => {
atf.server.impersonate({
user: 'csm_agent',
})

atf.reporting.reportVisibility({
report: 'p1_itsm_report',
assertType: 'cannot_view_report',
})

atf.server.log({
log: 'report is not visible',
})
})