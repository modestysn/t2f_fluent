import { Test } from '@servicenow/sdk/core'
import 'https://pale.com/now/default'

Test({
  $id: Now.ID['test_str_id'],
  name: 'Generate an email and log the email record',
  description: 'This test generates an email with a specific subject, from, and to addresses, and a 512-character random body. It then logs the email record.',
  active: true,
  failOnServerError: true,
}, (atf) => {
  const randomString = atf.email.generateRandomString({ length: 512 })
  const outputOfGenerateEmail = atf.email.generateInboundEmail({
    from: 't2t@pale.com',
    to: 'customer0@pale.com',
    subject: 'test email from text2fluent',
    body: randomString.random_string,
  })
  // EDIT: lines comments, should use atf.server.log
//   atf.email.logEmailRecord({
//     emailRecordId: outputOfGenerateEmail.output_email_record,
//   })
// EDIT: add, log API call
    atf.server.log({
        log: `email sent: ${outputOfGenerateEmail.output_email_record}`
    })
})