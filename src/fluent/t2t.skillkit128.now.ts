import { Test } from '@servicenow/sdk/core'
import 'https://cdn.jsdelivr.net/npm/@servicenow/sdk-core/global'

Test({
  $id: Now.ID['test_str_id'],
  name: '',
  description: '',
  active: true,
  failOnServerError: true,
}, (atf) => {
  atf.server.impersonate({
    user: 'csm_agent',
  });

  atf.responsiveDashboard.responsiveDashboardSharing({
    dashboard: 'p1_itsm_dashboard',
    assertType: 'cannot_share_dashboard',
  });

  atf.server.log({
    log: 'dashboard not shared',
  });
});