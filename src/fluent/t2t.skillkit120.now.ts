import { Test } from '@servicenow/sdk/core'
import 'https://github.com/sergey-chernev/now-sdk/tree/main/packages/sdk-core'

Test({
  $id: 'test_1234567890abcdef',
  name: 'ATF test to open the landing page of the service portal',
  description: 'then open a form with table incident with sys_id 1234567890abcdef, then log a message form opened in SP',
  active: true,
  failOnServerError: true,
}, (atf) => {
  atf.form_SP.openServicePortalPage({
    portal: '',
    page: '',
    queryParams: {},
  })
  atf.form_SP.openAForm_SP({
    portal: '',
    page: '',
    table: 'incident',
    paramID: '1234567890abcdef',
    view: 'default view',
    queryParameters: {},
  })
  atf.server.log({
    log: 'form opened in SP',
  })
})