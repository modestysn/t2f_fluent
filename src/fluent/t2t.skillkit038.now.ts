import { Test } from '@servicenow/sdk/core'
import 'https://developer.servicenow.com/app.do#/api_doc/version/newyork/api/types/Test'

Test({
  $id: Now.ID['test_str_id'],
  name: 'Validate price variable is read only for laptop refresh',
  description: 'This test opens laptop refresh in the catalog and validates that the price variable is read only',
  active: true,
  failOnServerError: true,
}, (atf) => {
  atf.server.searchForACatalogItem({
    search_in_portal: true,
    search_term: 'laptop refresh',
    catalog: 'catalog_id', // replace with actual catalog ID
    category: 'category_id', // replace with actual category ID
    assert_item: '', // will be set in the next step
    assert_type: 'assert_item_present',
  }).catalog_item

  atf.catalog.validateVariableValues({
    catalogItem: '${catalog_item}',
    catalogConditions: '',
  })

  atf.catalog.variableStateValidation({
    catalog_item: '${catalog_item}',
    visible: [],
    not_visible: [],
    read_only: ['price'],
    not_read_only: [],
    mandatory: [],
    not_mandatory: [],
  })
})