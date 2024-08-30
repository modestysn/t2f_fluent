// ```typescript EDIT: commented out
import { Test } from '@servicenow/sdk/core'
import '@servicenow/sdk-core/global'

Test({
  $id: Now.ID['test_str_id'],
  name: '',
  description: '',
  active: true,
  failOnServerError: true,
}, (atf) => {
  atf.server.impersonate({
    user: 'csm_agent',
  })
// EDIT: lines comments
//   atf.form_SP.openForm({
//     table: 'x_1234567890.p1_itsm_report',
//     formUI: 'service_portal',
//     view: 'default view',
//     selectedTabIndex: 0,
//   })

//   atf.form_SP.assert({
//     assertType: 'form_invisible',
//   })

//   atf.dashboard_SP.openDashboard({
//     dashboard: 'p1_itsm_dashboard',
//     dashboardUI: 'service_portal',
//   })

//   atf.dashboard_SP.assert({
//     assertType: 'dashboard_not_shared',
//   })

  atf.server.log({
    log: 'dashboard not shared',
  })
})

// ``` EDIT: commented out

// Replace `test_str_id` with a unique string or number. Replace `x_1234567890` with your actual table prefix.