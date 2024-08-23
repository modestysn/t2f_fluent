import { Test } from '@servicenow/sdk/core'
import 'https://developer.servicenow.com/app.do#/api/now/core/r_FluentTest'

Test({
  $id: Now.ID['test_str_id'],
  name: 'Test open catalog item, set quantity, and submit order',
  description: 'This test opens the catalog item "mouse", sets the quantity to 2, and then submits the order',
  active: true,
  failOnServerError: true,
}, (atf) => {
  atf.catalog.openACatalogItem({
    catalogItem: 'mouse',
  })

  atf.catalog.setCatalogItemQuantity({
    quantity: 2,
  })

  const outputOfSubmit = atf.catalog.addItemToShoppingCart({
    assert: 'form_submitted_to_server',
  })

  atf.form.openExistingRecord({
    table: 'sc_req_item',
    recordId: outputOfSubmit.cart_item_id,
    formUI: 'standard_ui',
    view: 'default view',
    selectedTabIndex: 0,
  })

  atf.form.submitForm({
    assertType: 'form_submitted_to_server',
    formUI: 'standard_ui',
  })
})