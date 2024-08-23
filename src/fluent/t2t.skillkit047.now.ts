import { Test } from '@servicenow/sdk/core'
import 'https://github.com/servicenow/now-sdk-core/releases/download/v1.0.0/now-sdk-core.js'

Test({
  $id: 'test_hr_request',
  name: 'ATF Test - HR Request',
  description: 'Opens a record producer for HR Request in portal, verifies that business impact is 3, and submits',
  active: true,
  failOnServerError: true,
}, (atf) => {
  // Open the HR Request record producer
  atf.catalog.openRecordProducer({
    catalogItem: 'hr_request',
  })

  // Set the business impact to 3
  atf.form.setFieldValues({
    table: 'hr_request',
    formUI: 'service_operations_workspace',
    fieldValues: {
      business_impact: '3',
    },
  })

  // Submit the record producer
  const outputOfSubmit = atf.catalog.submitRecordProducer({
    assert: 'form_submitted_to_server',
  })

  // Open the created HR Request record
  atf.form.openExistingRecord({
    table: 'hr_request',
    recordId: outputOfSubmit.record_id,
    formUI: 'service_operations_workspace',
    view: 'default view',
    selectedTabIndex: 0,
  })
})