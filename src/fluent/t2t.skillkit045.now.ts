import { Test } from '@servicenow/sdk/core'
import 'https://developer.servicenow.com/app.do#/api_doc/version/latest/index.html'

Test({
  $id: Now.ID['test_str_id'],
  name: 'Validate price variable is read only for laptop refresh',
  description: 'This test opens laptop refresh in catalog in service portal and validates that price variable is read only',
  active: true,
  failOnServerError: true,
}, (atf) => {
  atf.server.impersonate({
    user: 'admin',
  });

  const catalogItem = atf.server.searchForACatalogItem({
    search_in_portal: true,
    search_term: 'laptop refresh',
    catalog: 'catalog_id',
    category: 'category_id',
    assert_item: 'laptop_refresh_id',
    assert_type: 'assert_item_present',
  });

  atf.catalog_SP.openCatalogItem_SP({
    portal: 'sp_portal_id',
    page: 'sp_page_id',
    catItem: catalogItem.catalog_item,
    queryParameters: {}, // EDIT: add prop
  });

  atf.catalog_SP.validatePriceAndRecurringPrice_SP({
    price: '',
    recurringPrice: '',
    frequency: '' //EDIT: add prop
  });
});