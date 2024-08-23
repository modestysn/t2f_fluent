import { Test } from '@servicenow/sdk/core'
import 'https://cdn.jsdelivr.net/npm/@servicenow/sdk-core/global'

Test({
  $id: Now.ID['test_str_id'],
  name: 'Test name',
  description: 'Test description',
  active: true,
  failOnServerError: true,
}, (atf) => {
  atf.server.impersonate({
    user: 'csm_agent',
  })

// EDIT: lines comment, needs to remove inputs from source  
//   atf.reporting.reportVisibility(inputs: {
//     report: 'p1_itsm_report',
//     assertType: 'cannot_view_report',
//   })

//   atf.responsiveDashboard.responsiveDashboardSharing(inputs: {
//     dashboard: 'p1_itsm_dashboard',
//     assertType: '',
//   })

//   atf.responsiveDashboard.responsiveDashboardVisibility(inputs: {
//     dashboard: 'p1_itsm_dashboard',
//     assertType: 'dashboard_is_not_visible',
//   })

  atf.server.log({
    log: 'dashboard not shared',
  })
})