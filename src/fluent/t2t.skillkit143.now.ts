import { Test } from '@servicenow/sdk/core'
import '**@servicenow/sdk-core/global**'

Test({
  $id: Now.ID['test_str_id'],
  name: 'Verify laptop charger price in service portal',
  description: 'This test opens the catalog item for a laptop charger in service portal and verifies that the price is 20 dollar',
  active: true,
  failOnServerError: true,
}, (atf) => {
  atf.catalog_SP.openCatalogItem_SP({
    portal: '', // string of sys_id | Record<'sp_portal'>
    page: '', // string of sys_id | Record<'sp_page'>
    catItem: '', // string of sys_id | Record<'sc_cat_item'>
    queryParameters: {} // object, query parameter name and value pairs, example: { field1: 'value1', field2: 'value2' }
  });

  atf.catalog_SP.validatePriceAndRecurringPrice_SP({
    price: '20', // string | number
    recurringPrice: '', // string | number
    frequency: '' // '' | 'weekly' | 'quarterly' | 'weekly2' | 'semiannual' | 'monthly' | 'yearly' | 'daily' | 'monthly2'
  });
});