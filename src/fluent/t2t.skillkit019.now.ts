import { Test } from '@servicenow/sdk/core'
import 'https://developer.servicenow.com/app.do#/api_doc/version/latest/index.html'

Test({
  $id: Now.ID['test_str_id'],
  name: 'Send and validate email',
  description: 'This test sends an email and validates it with a condition',
  active: true,
  failOnServerError: true,
}, (atf) => {
  const emailBody = 'this is a test email from text2fluent'
  const emailSubject = 'email from text2fluent'
  const emailFrom = 't2t@pale.org'
  const emailTo = 'no-reply@pale.org'

  atf.email.generateInboundEmail({
    from: emailFrom,
    to: emailTo,
    subject: emailSubject,
    body: emailBody,
  })

  atf.email.validateOutboundEmailGeneratedByNotification({
    sourceNotification: '',
    conditions: `subject=${emailSubject}`,
  })
})