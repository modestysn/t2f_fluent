import { Test } from '@servicenow/sdk/core'
import '@servicenow/sdk-core/global'

Test({
  $id: Now.ID['test_str_id'],
  name: '',
  description: '',
  active: true,
  failOnServerError: true,
}, (atf) => {
  const outputOfGenerateEmail = atf.email.generateInboundEmail({
    from: 't2t@pale.com',
    to: 'customer0@pale.com',
    subject: 'test email from text2fluent',
    body: '512 long random text',
  })
  // atf.server.log({ log: 'email record:' + outputOfGenerateEmail.output_email_record}); // EDIT: should allow string contat 
  atf.server.log({ log: `email record: ${outputOfGenerateEmail.output_email_record}`}); // EDIT: why not  
})