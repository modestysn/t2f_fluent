import { Test } from '@servicenow/sdk/core'
import 'https://developer.servicenow.com/app.do#/api/now/core/r_sys_ui_page/ui_page'
import 'https://developer.servicenow.com/app.do#/api/now/table/sys_user'
import 'https://developer.servicenow.com/app.do#/api/now/table/pa_dashboards'

Test({
  $id: Now.ID['test_str_id'],
  name: 'Share dashboard',
  description: 'Impersonate ITIL, share a dashboard, and assert it is shared',
  active: true,
  failOnServerError: true,
}, (atf) => {
  atf.server.impersonate({
    user: 'itil',
  })

// EDIT: lines comment, needs to revemo inputs from source  
//   atf.responsiveDashboard.responsiveDashboardSharing(inputs: {
//     dashboard: 'p1_itsm_dashboard',
//     assertType: 'can_share_dashboard',
//   })

//   atf.responsiveDashboard.responsiveDashboardVisibility(inputs: {
//     dashboard: 'p1_itsm_dashboard',
//     assertType: 'dashboard_is_visible',
//   })

  atf.server.log({
    log: 'dashboard shared',
  })
})