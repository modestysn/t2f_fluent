import { Test } from '@servicenow/sdk/core'
import 'https://github.com/sergey-chernev/servicenow-sdk-ts/blob/main/src/atf.ts'

Test({
  $id: Now.ID['test_str_id'],
  name: 'reply to an email with subject "test email from text2fluent", from "t2t@pale.com", to "caller@fan.com", body is 768 long random text, target a record in "incident" table',
  description: '',
  active: true,
  failOnServerError: true,
}, (atf) => {
  const output_email_record = atf.email.generateInboundEmail({
    from: 't2t@pale.com',
    to: 'caller@fan.com',
    subject: 'test email from text2fluent',
    body: '768 long random text',
  })
  // const output_reply_email_record = EDIT: unused variables
  atf.email.generateInboundReplyEmail({
    targetRecord: output_email_record.output_email_record,
    subject: 'Re: test email from text2fluent',
    body: '768 long random text',
    targetTable: 'incident',
    from: 'caller@fan.com',
    to: 't2t@pale.com',
  })
})