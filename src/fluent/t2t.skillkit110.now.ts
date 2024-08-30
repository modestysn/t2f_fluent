import { Test } from '@servicenow/sdk/core'
import 'https://github.com/sergey-chernev/now-sdk/tree/main/packages/sdk-core'

Test({
  $id: Now.ID['test_str_id'],
  name: 'Checkout empty shopping cart and replay request',
  description: 'Checkout empty shopping cart and replay request',
  active: true,
  failOnServerError: true,
}, (atf) => {
  const cartItemId = atf.catalog.addItemToShoppingCart({
    assert: 'form_submitted_to_server',
  }).cart_item_id

  atf.server.checkoutShoppingCart({
    assert: 'empty_cart', 
    requestedFor: 'system admin', // EDIT: add prop
    deliveryAddress: '123 main st, San Diego, CA 92122', // EDIT: add prop
    specialInstructions: '' // EDIT: add prop
  })

  atf.server.replayRequestItem({
    request_item: cartItemId,
  }).req_item

  atf.server.log({
    log: 'empty cart is checked out and replayed',
  })
})