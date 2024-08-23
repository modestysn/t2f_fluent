import { Test } from '@servicenow/sdk/core'
import 'https://developer.servicenow.com/app.do#/api_doc/version/newyork/api/types/Test'

Test({
  $id: 'test_1',
  name: 'Validate price and recurring price of a Catalog Item',
  description: 'Validate price and recurring price of a Catalog Item',
  active: true,
  failOnServerError: true,
}, (atf) => {
  atf.server.impersonate({
    user: 'admin',
  })
  atf.server.searchForACatalogItem({
    search_in_portal: false,
    search_term: 'laptop refresh',
    catalog: 'catalog_id',
    category: 'category_id',
    assert_item: 'item_id',
    assert_type: 'assert_item_present',
  })
  atf.catalog.validatePriceAndRecurringPrice({
    price: '1000',
    recurringPrice: '200',
    frequency: 'monthly',
  })
})