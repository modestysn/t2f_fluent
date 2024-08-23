import { Test } from '@servicenow/sdk/core'
import 'https://github.com/servicenow/now-sdk-core/global'

Test({
  $id: Now.ID['test_str_id'],
  name: 'ATF test for laptop refresh in catalog',
  description: 'Opens laptop refresh in catalog and checks that price is not editable',
  active: true,
  failOnServerError: true,
}, (atf) => {
  atf.server.impersonate({
    user: 'admin',
  })

  atf.server.searchForACatalogItem({
    search_in_portal: true,
    search_term: 'laptop refresh',
    catalog: 'catalog_id',
    category: 'category_id',
    assert_item: 'laptop_refresh_item_id',
    assert_type: 'assert_item_present',
  })

  atf.form.openExistingRecord({
    table: 'sc_cat_item',
    recordId: 'laptop_refresh_item_id',
    formUI: 'service_operations_workspace',
    view: 'default view',
    selectedTabIndex: 0,
  })

  atf.form.uiActionVisibility({
    table: 'sc_cat_item',
    formUI: 'service_operations_workspace',
    visible: ['price_ui_action_id'], // EDIT: add []
    notVisible: ['edit_price_ui_action_id'], // EDIT: add []
  })
})