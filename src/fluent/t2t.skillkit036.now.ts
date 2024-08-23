import { Test } from '@servicenow/sdk/core'
import 'https://developer.servicenow.com/app.do#/api/now/core/r_TestFrameworkAPI'

Test({
  $id: Now.ID['test_str_id'],
  name: 'Test laptop refresh catalog item',
  description: 'This test opens the laptop refresh catalog item, sets the quantity to 2, and adds it to the cart',
  active: true,
  failOnServerError: true,
}, (atf) => {
  atf.catalog.openACatalogItem({
    catalogItem: 'laptop refresh'
  })
  atf.catalog.setCatalogItemQuantity({
    quantity: 2
  })
  atf.catalog.addItemToShoppingCart({
    assert: 'form_submitted_to_server'
  })
})