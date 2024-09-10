import { Test } from '@servicenow/sdk/core'
import 'https://developer.servicenow.com/app.do#/api/now/core/r_RecordProducer'

Test({
  $id: Now.ID['test_hr_request'],
  name: 'Test HR Request',
  description: 'Write an atf test that opens the record producer for HR Request, sets the priority variable to 1, and submits',
  active: true,
  failOnServerError: true,
}, (atf) => {
  atf.catalog.openRecordProducer({
    catalogItem: 'hr_request',
  })
  atf.catalog.setVariableValues({
    catalogItem: 'hr_request',
    variableValues: "priority=1" 
  })
  atf.catalog.submitRecordProducer({
    assert: 'form_submitted_to_server',
  })
})