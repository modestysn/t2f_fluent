import { Test } from '@servicenow/sdk/core'
import 'https://github.com/serivcenow/now-sdk-core/global'

Test({
  $id: Now.ID['test_str_id'],
  name: 'Checkout empty shopping cart and replay request',
  description: 'Checkout an empty shopping cart, replay the request, then log a message',
  active: true,
  failOnServerError: true,
}, (atf) => {
  const outputOfCheckout = atf.server.checkoutShoppingCart({
    assert: 'empty_cart',
    requestedFor: 'admin', // EDIT: add
    specialInstructions: '', // EDIT: add
    deliveryAddress: '', // EDIT: add
  })

  atf.server.replayRequestItem({
    request_item: outputOfCheckout.request_id,
  })

  atf.server.log({
    log: 'empty cart is checked out and replayed',
  })
})