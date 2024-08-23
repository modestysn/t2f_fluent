import { Test } from '@servicenow/sdk/core'
import 'https://sdk.servicenow.com/latest/client_api.js'

Test({
  $id: Now.ID['test_str_id'],
  name: 'Open order guide for home office setup, navigate to step 2, validate monitor, and add to cart',
  description: 'This test opens the order guide for home office setup, navigates to step 2, validates that monitor is included, and adds it to the cart.',
  active: true,
  failOnServerError: true,
}, (atf) => {
  
  // const orderGuideRecord = atf.catalog_SP.openOrderGuide_SP({ EDIT: remove unused var
  atf.catalog_SP.openOrderGuide_SP({
    portal: '', // replace with the sys_id or Record
    page: '', // replace with the sys_id or Record
    orderGuide: '', // replace with the sys_id or Record
    queryParameters: {},
  })

  // Navigate to step 2
  atf.catalog_SP.navigatewithinOrderGuide_SP({
    guideStep: '2',
    assert: 'navigate_success',
  })

  // Validate that monitor is included
  atf.catalog_SP.validateOrderGuideItems_SP({
    items: ['monitor'], // replace with the sys_id or Record
  })

  // Add monitor to cart
  atf.catalog_SP.addOrderGuidetoShoppingCart_SP({
    assert: 'form_submission_cancelled_in_browser', // EDIT: removed 'form_submission_cancelled_in_browser' | 'form_submitted_to_server',
  })
})