import { Test } from '@servicenow/sdk/core'
import '**@servicenow/sdk-core/global**'

Test({
  $id: Now.ID['test_str_id'],
  name: '',
  description: '',
  active: true,
  failOnServerError: true,
}, (atf) => {
  // const outputOfOpenOrderGuide = // EDIT: unused var
  atf.catalog_SP.openOrderGuide_SP({
    portal: '', // string of sys_id | Record<'sp_portal'>
    page: '', // string of sys_id | Record<'sp_page'>
    orderGuide: '', // string of sys_id | Record<'sc_cat_item_guide'>
    queryParameters: {} // object, query parameter name and value pairs, example: { field1: 'value1', field2: 'value2' }
  });

  atf.catalog_SP.navigatewithinOrderGuide_SP({
    guideStep: '2', // '1' | '2' | '3'
    assert: 'navigate_success' // 'navigate_success' | 'navigate_failure'
  });

  atf.catalog_SP.validateOrderGuideItems_SP({
    items: ['monitor'] // (string | Record<'sc_cat_item'>)[]
  });

  atf.catalog_SP.reviewOrderGuideSummary_SP({
    items: ['monitor'], // (string | Record<'sc_cat_item'>)[]
    price: '' // string | number
  });

  atf.catalog_SP.reviewIteminOrderGuide_SP({
    item: '', // string of sys_id | Record<'sc_cat_item'>
    included: true // boolean
  });

  atf.catalog_SP.addOrderGuidetoShoppingCart_SP({
    assert: 'form_submitted_to_server' // 'form_submission_cancelled_in_browser' | 'form_submitted_to_server'
  });
});