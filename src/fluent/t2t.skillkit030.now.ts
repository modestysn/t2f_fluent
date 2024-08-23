import { Test } from '@servicenow/sdk/core'
import 'https://developer.servicenow.com/app.do#/api/now/core/r_TestFrameworkAPI'

Test({
  $id: Now.ID['test_str_id'],
  name: 'Test dashboard sharing',
  description: 'Test to share a dashboard and assert it is not shared',
  active: true,
  failOnServerError: true,
}, (atf) => {
  atf.server.impersonate({
    user: 'csm_agent',
  })

  atf.responsiveDashboard.responsiveDashboardSharing({
    dashboard: 'p1_itsm_dashboard',
    assertType: 'can_share_dashboard',
  })

  atf.responsiveDashboard.responsiveDashboardVisibility({
    dashboard: 'p1_itsm_dashboard',
    assertType: 'dashboard_is_not_visible',
  })

  atf.server.log({
    log: 'dashboard not shared',
  })
})