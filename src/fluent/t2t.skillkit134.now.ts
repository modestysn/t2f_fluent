import { Test } from '@servicenow/sdk/core'
import 'https://cdn.jsdelivr.net/npm/@servicenow/sdk-core/global'

Test({
  $id: Now.ID['test_str_id'],
  name: 'Test laptop refresh catalog item',
  description: 'This test opens the laptop refresh catalog item, sets the quantity to 2, and adds it to the cart',
  active: true,
  failOnServerError: true,
}, (atf) => {
  const catalogItem = 'laptop refresh'
  atf.catalog.openACatalogItem({ catalogItem })
  atf.catalog.setCatalogItemQuantity({ quantity: 2 })
  atf.catalog.addItemToShoppingCart({ assert: 'form_submitted_to_server' })
})