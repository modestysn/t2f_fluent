import { Test } from '@servicenow/sdk/core'
import 'https://github.com/sergey-chernev/servicenow-sdk-core/blob/main/src/global.ts'

Test({
  $id: Now.ID['test_str_id'],
  name: '',
  description: '',
  active: true,
  failOnServerError: true,
}, (atf) => {
  atf.email.validateOutboundEmailGeneratedByFlow({
    sourceFlow: '1234567890abcdef',
    conditions: 'subject=email from flow 1234567890abcdef',
  })
})