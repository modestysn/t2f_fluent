import { Test } from '@servicenow/sdk/core'
import 'https://github.com/servicenow/now-sdk-core/global'

Test({
  $id: Now.ID['test_str_id'],
  name: 'Search for iPad in Hardware category',
  description: 'Search for iPad in Hardware category and assert the item is present',
  active: true,
  failOnServerError: true,
}, (atf) => {
  const catalogItem = atf.server.searchForACatalogItem({
    search_in_portal: false,
    search_term: 'iPad',
    catalog: 'catalog_sys_id',
    category: 'category_sys_id',
    assert_item: 'ipad_sys_id',
    assert_type: 'assert_item_present',
  })

  atf.catalog.openACatalogItem({
    catalogItem: catalogItem.catalog_item,
  })

// EDIT: lines comments
//   atf.log({
//     log: `Found iPad catalog item: ${catalogItem.catalog_item}`,
//   })
})