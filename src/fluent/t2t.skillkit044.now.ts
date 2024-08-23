import { Test } from '@servicenow/sdk/core'
import '@servicenow/sdk-core/global'

Test({
  $id: Now.ID['test_str_id'],
  name: 'Verify laptop charger price',
  description: 'Opens the catalog item for a laptop charger and verifies that the price is 20 dollar',
  active: true,
  failOnServerError: true,
}, (atf) => {
  atf.server.searchForACatalogItem({
    search_in_portal: true,
    search_term: 'laptop charger',
    catalog: '',
    category: '',
    assert_item: '',
    assert_type: 'assert_item_present',
  });
//   }): { catalog_item: string; }; EDIT: remove return value

  atf.catalog.validatePriceAndRecurringPrice({
    price: '20',
    recurringPrice: '',
    frequency: '',
  });
//   }): void; EDIT: remove return value
});