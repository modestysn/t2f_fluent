import { Test } from '@servicenow/sdk/core'
import '**@servicenow/sdk-core/global**'

Test({
  $id: Now.ID['test_str_id'],
  name: '',
  description: '',
  active: true,
  failOnServerError: true,
}, (atf) => {
  // Open an order guide in portal
  // const outputOfOpenOrderGuide = // EDIT: unused var
  atf.catalog_SP.openOrderGuide_SP({
    portal: '', // string of sys_id | Record<'sp_portal'>
    page: '', // string of sis_id | Record<'sp_page'>
    orderGuide: '', // string of sys_id | Record<'sc_cat_item_guide'>
    queryParameters: {} // object, query parameter name and value pairs, example: { field1: 'value1', field2: 'value2' }
  });

  // Navigate to "describe needs" step
  atf.catalog_SP.navigatewithinOrderGuide_SP({
    guideStep: '2', // '1' | '2' | '3'
    assert: 'navigate_success' // 'navigate_success' | 'navigate_failure'
  });

  // Validate that table is included
  atf.catalog_SP.validateOrderGuideItems_SP({
    items: [''] // (string | Record<'sc_cat_item'>)[]
  });

  // Submit the order guide
  const outputOfSubmit = atf.catalog_SP.submitOrderGuide_SP({
    assert: 'form_submitted_to_server' // 'form_submission_cancelled_in_browser' | 'form_submitted_to_server'
  });

  // Open the created record
  atf.form.openExistingRecord({
    table: outputOfSubmit.table, // table name
    recordId: outputOfSubmit.record_id, // sys_id of the record
    formUI: 'service_operations_workspace', // 'standard_ui' | 'service_operations_workspace' | 'asset_workspace' | 'cmdb_workspace'
    view: 'default view', // 'default view' | 'Metrics' | 'Mobile' | 'Self Service'
    selectedTabIndex: 0
  });
});