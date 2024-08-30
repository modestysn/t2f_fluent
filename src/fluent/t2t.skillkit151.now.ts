import { Test } from '@servicenow/sdk/core'
import 'https://developer.servicenow.com/app.do#/api_doc/version/latest/appstore_kit/catalog_api/catalog_api_group'

Test({
  $id: Now.ID['test_str_id'],
  name: 'Verify HR Request Order Guide',
  description: 'This test opens the order guide for HR Requests, navigates to the last step, and verifies that items contains chair, desk, and monitor, and that price is 50 dollar',
  active: true,
  failOnServerError: true,
}, (atf) => {
  // Open the order guide for HR Requests
  // const orderGuide = // EDIT: unused var
  atf.catalog_SP.openOrderGuide_SP({
    portal: '', // Replace with the sys_id or Record of the Service Portal
    page: '', // Replace with the sys_id or Record of the Service Portal page
    orderGuide: '', // Replace with the sys_id or Record of the HR Request Order Guide
    queryParameters: {} // EDIT: add prop
  })

  // Navigate to the last step
  atf.catalog_SP.navigatewithinOrderGuide_SP({
    guideStep: '3',
    assert: 'navigate_success',
  })

  // Validate items included in the Order Guide
  atf.catalog_SP.validateOrderGuideItems_SP({
    items: ['chair', 'desk', 'monitor'],
  })

  // Review Order Guide Summary in Service Portal
  atf.catalog_SP.reviewOrderGuideSummary_SP({
    items: ['chair', 'desk', 'monitor'],
    price: '50',
  })
})