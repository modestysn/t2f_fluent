import { Test } from '@servicenow/sdk/core'
import ' @servicenow/sdk-core/global'

Test({
$id: Now.ID['test_str_id'],
name: 'Verify laptop charger price',
description: 'Test to verify the price of a laptop charger',
active: true,
failOnServerError: true,
}, (atf) => {
atf.catalog.openACatalogItem({
catalogItem: 'laptop charger'
})
atf.catalog.validatePriceAndRecurringPrice({
price: '20',
recurringPrice: '',
frequency: ''
})
})