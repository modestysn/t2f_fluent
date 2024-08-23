import { Test } from '@servicenow/sdk/core'
import '@servicenow/sdk-core/global'

Test({
  $id: 'test_str_id', // replace with a unique string or number
  name: 'ATF test to open the landing page of the service portal',
  description: 'then open a form with table incident with sys_id 1234567890abcdef, then log a message form opened in SP',
  active: true,
  failOnServerError: true,
}, (atf) => {
  atf.form_SP.openServicePortalPage({
    portal: '', // string | Record<'sp_portal'>
    page: '', // string | Record<'sp_page'>
    queryParams: {}, // object, query parameters, example: { name: ...}
  })

  atf.form_SP.openAForm_SP({
    portal: '', // string | Record<'sp_portal'>
    page: '', // string | Record<'sp_page'>
    table: 'incident', // string
    paramID: '1234567890abcdef', // string
    view: 'default view', // 'default view' | 'Metrics' | 'Mobile' | 'Self Service'
    queryParameters: {}, // { ['name': 'string']: 'string' | 'number' | 'boolean' | 'Record' | 'TableName' }
  })

  atf.server.log({
    log: 'form opened in SP',
  })
})