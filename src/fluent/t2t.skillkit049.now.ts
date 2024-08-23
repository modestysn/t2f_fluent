import { Test } from '@servicenow/sdk/core'
import 'https://sdk.servicenow.com/latest/client_api.js'

Test({
  $id: Now.ID['test_str_id'],
  name: 'Open order guide for home office setup, navigate to step 2, validate monitor item, and submit',
  description: 'This test opens the order guide for home office setup, navigates to step 2, validates that the monitor item is included, and submits the form.',
  active: true,
  failOnServerError: true,
}, (atf) => {
  // Open the order guide
//   const orderGuideRecord = atf.catalog_SP.openOrderGuide_SP({ EDIT: remove unused var
  atf.catalog_SP.openOrderGuide_SP({
    portal: '', // replace with the sys_id or name of the portal
    page: '', // replace with the sys_id or name of the page
    orderGuide: '', // replace with the sys_id or name of the order guide,
    queryParameters: {}, // EDIT: add prop
  })

  // Navigate to step 2
  atf.catalog_SP.navigatewithinOrderGuide_SP({
    guideStep: '2',
    assert: 'navigate_success',
  })

  // Validate that the monitor item is included
  atf.catalog_SP.validateOrderGuideItems_SP({
    items: ['monitor'], // replace with the sys_id or name of the monitor item
  })

  // Submit the form
  // const submitResult = atf.form.submitForm({ EDIT: remove unused var
  atf.form.submitForm({
    assertType: 'form_submitted_to_server',
    formUI: '', // replace with the form UI (e.g. 'standard_ui', 'service_operations_workspace', etc.)
  })
})