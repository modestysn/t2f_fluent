import { Test } from '@servicenow/sdk/core'
import 'https://developer.servicenow.com/app.do#/api_doc/version/latest/index.html'

Test({
  $id: Now.ID['test_str_id'],
  name: 'ATF test for laptop refresh in catalog in service portal',
  description: 'This test opens laptop refresh in catalog in service portal and checks that price is not editable',
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
    price: '', // string | number;
    recurringPrice: '', // string | number
    frequency: '' // '' | 'weekly' | 'quarterly' | 'weekly2' | 'semiannual' | 'monthly' | 'yearly' | 'daily' | 'monthly2'
  });
});