import { Test } from '@servicenow/sdk/core'
import '@servicenow/sdk-core/global'

Test({
  $id: Now.ID['test_str_id'],
  name: 'ATF test to open a report',
  description: 'assert the report is visible, then log a message',
  active: true,
  failOnServerError: true,
}, (atf) => {
  atf.reporting.reportVisibility({
    report: 'p1_incident_report',
    assertType: 'can_view_report',
  })
  // EDIT: should be atf.server.log
  // atf.log({ log: 'report opened' })
})