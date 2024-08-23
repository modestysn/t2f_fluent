import { Test } from '@servicenow/sdk/core'
import 'https://github.com/sergey-chernev/servicenow-sdk-core/blob/main/src/global.ts'

Test({
  $id: 'test_1234567890abcdef',
  name: 'Test email from notification',
  description: 'Test email is sent from a notification with specific subject',
  active: true,
  failOnServerError: true,
}, (atf) => {
  atf.email.validateOutboundEmailGeneratedByNotification({
    sourceNotification: '1234567890abcdef',
    conditions: 'subject=email from notification 1234567890abcdef',
  })
})