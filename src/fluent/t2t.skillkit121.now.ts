import { Test } from '@servicenow/sdk/core'
import 'https://github.com/sergey-chernev/now-sdk/tree/main/packages/sdk-core'

Test({
  $id: Now.ID['test_str_id'],
  name: '',
  description: '',
  active: true,
  failOnServerError: true,
}, (atf) => {
  atf.form_SP.openServicePortalPage({
    portal: 'employee_portal',
    page: '',
    queryParams: {
      table: 'task',
      sys_id: 'abcdef1234567890'
    }
  })
  atf.form_SP.setFieldValues_SP({
    table: 'task',
    fieldValues: {
      'short_description': 'test short description'
    }
  })
  atf.server.log({
    log: 'form opened in SP'
  })
})