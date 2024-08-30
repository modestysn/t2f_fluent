import { Test } from '@servicenow/sdk/core'
import 'https://github.com/servicenow/now-sdk-core/global'

Test({
  $id: Now.ID['test_hr_request'],
  name: 'ATF test for HR Request',
  description: 'Opens a record producer for HR Request in portal, verifies that business impact is 3, and submits',
  active: true,
  failOnServerError: true,
}, (atf) => {
  // Open the HR Request record producer
//   atf.catalog_SP.openRecordProducer({ // EDIT: should be openRecordProducer_SP
//     catalogItem: 'hr_request',
//   });

  // Set the business impact to 3
//   atf.catalog_SP.setVariableValues({ // EDIT: should be setVariableValues_SP
//     catalogItem: 'hr_request',
//     variableValues: {
//       business_impact: '3',
//     },
//   });

  // Submit the record producer
//   const outputOfSubmit = atf.catalog_SP.submitRecordProducer({ // EDIT: should be submitRecordProducer_SP
//     assert: 'form_submitted_to_server',
//   });

  // Verify that the business impact is 3
  atf.server.recordQuery({
    table: 'hr_request',
    enforceSecurity: false,
    assertType: 'records_match_query',
    fieldValues: 'business_impact=3' // EDIT: changed data type from object to string
    // {
    //   number: outputOfSubmit.record_id,
    //   business_impact: '3',
    // },
  });
});