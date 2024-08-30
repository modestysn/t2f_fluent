import { Test } from '@servicenow/sdk/core'
import '**@servicenow/sdk-core/global**'

Test({
  $id: Now.ID['test_str_id'],
  name: '',
  description: '',
  active: true,
  failOnServerError: true,
}, (atf) => {
  atf.reporting.reportVisibility({
    report: 'p1_incident_report',
    assertType: 'can_view_report',
  })
  atf.server.log({ log: 'report opened' })
})