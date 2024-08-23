import { Test } from '@servicenow/sdk/core'
import 'https://cdn.jsdelivr.net/npm/@servicenow/sdk-core/global'

Test({
  $id: Now.ID['test_str_id'],
  name: 'Verify laptop charger price',
  description: 'Test to verify the price of a laptop charger catalog item',
  active: true,
  failOnServerError: true,
}, (atf) => {
// EDIT: should be openACatalogItem
//   const catalogItem = atf.catalog.openCatalogItem({
//     catalogItem: 'laptop charger',
//   })

  // EDIT: should be setVariableValues
//   atf.form.setValue({
//     fieldName: 'quantity',
//     value: '1',
//   })

  // Submit the form
  const submitOutput = atf.form.submitForm({
    assertType: 'form_submitted_to_server',
    formUI: 'standard_ui',
  })

  // Open the created record
  atf.form.openExistingRecord({
    table: submitOutput.table,
    recordId: submitOutput.record_id,
    formUI: 'standard_ui',
    view: 'default view',
    selectedTabIndex: 0,
  })

  // Validate the price
  atf.catalog.validatePriceAndRecurringPrice({
    price: '20',
    recurringPrice: '',
    frequency: '',
  })
})