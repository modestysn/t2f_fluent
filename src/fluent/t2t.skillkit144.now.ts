import { Test } from '@servicenow/sdk/core'
import '**@servicenow/sdk-core/global**'

Test({
  $id: Now.ID['test_str_id'],
  name: 'Validate price variable is read only',
  description: 'Opens laptop refresh in catalog in service portal and validates that price variable is read only',
  active: true,
  failOnServerError: true,
}, (atf) => {
  atf.catalog_SP.openCatalogItem_SP({
    portal: '', // string of sys_id | Record<'sp_portal'>
    page: '', // string of sys_id | Record<'sp_page'>
    catItem: '', // string of sys_id | Record<'sc_cat_item'>
    queryParameters: {} // EDIT: add prop
  });

  atf.catalog_SP.validatePriceAndRecurringPrice_SP({
    price: '', // string | number
    recurringPrice: '', // string | number
    frequency: '', // '' | 'weekly' | 'quarterly' | 'weekly2' | 'semiannual' | 'monthly' | 'yearly' | 'daily' | 'monthly2'
  });
});