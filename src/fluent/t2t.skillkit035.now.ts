import { Test } from '@servicenow/sdk/core'
import 'https://developer.servicenow.com/app.do#/api/now/core/r_RecordProducer'

Test({
  $id: Now.ID['test_hr_request'],
  name: 'Test HR Request',
  description: 'Test HR Request record producer',
  active: true,
  failOnServerError: true,
}, (atf) => {
  atf.catalog.openRecordProducer({
    catalogItem: 'hr_request',
  })
  atf.catalog.setVariableValues({
    catalogItem: 'hr_request',
    variableValues: "edit" // EDIT: changed type to string
  })
  atf.catalog.submitRecordProducer({
    assert: 'form_submitted_to_server',
  })
})