import { Test } from '@servicenow/sdk/core'
import 'https://github.com/sergey-chernev/servicenow-sdk-core/blob/main/src/global.ts'
Test({
  $id: Now.ID['test_str_id'],
  name: 'test an email is sent from a notification whose id is 1234567890abcdef, with condition subject=email from notification 1234567890abcdef',
  description: '',
  active: true,
  failOnServerError: true,
}, (atf) => {
  atf.email.validateOutboundEmailGeneratedByNotification({
    sourceNotification: '1234567890abcdef',
    conditions: 'subject=email from notification 1234567890abcdef',
  })
})