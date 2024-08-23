import { Test } from '@servicenow/sdk/core'
import 'https://sdk.servicenow.com/latest/client_api.js'

Test({
  $id: Now.ID['test_str_id'],
  name: 'Open order guide for home office setup and submit',
  description: 'This test opens the order guide for home office setup, navigates to the "describe needs" step, checks if the table is included, and submits the form.',
  active: true,
  failOnServerError: true,
}, (atf) => {
  // EDIT: remove unused var
  // const orderGuideRecord = atf.catalog_SP.openOrderGuide_SP({
  atf.catalog_SP.openOrderGuide_SP({
    portal: '', // replace with the actual portal
    page: '', // replace with the actual page
    orderGuide: '', // replace with the actual order guide
    queryParameters: {} ,// EDIT: add prop
  })

  // Navigate to the "describe needs" step
  atf.catalog_SP.navigatewithinOrderGuide_SP({
    guideStep: '2',
    assert: 'navigate_success',
  })

  // Validate that the table is included
  atf.catalog_SP.validateOrderGuideItems_SP({
    items: ['your_table_name'], // replace with the actual table name
  })

  // Submit the form
  const submitResult = atf.form.submitForm({
    assertType: 'form_submitted_to_server',
    formUI: 'standard_ui',
  })

  // Open the created record
  atf.form.openExistingRecord({
    table: submitResult.table,
    recordId: submitResult.record_id,
    formUI: 'service_operations_workspace',
    view: 'default view',
    selectedTabIndex: 0,
  })
})