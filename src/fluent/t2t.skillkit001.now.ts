import { Test } from '@servicenow/sdk/core'
import 'https://developer.servicenow.com/app.do#/api/now/core/r_FluentTest'

Test({
  $id: Now.ID['test_str_id'],
  name: 'an ATF test for validating text field',
  description: 'open a new incident form, fill in short description field with \'test description from text2fluent\', submit the form, then validate the short description field value',
  active: true,
  failOnServerError: true,
}, (atf) => {
  atf.form.openNewForm({
    table: 'incident',
    formUI: 'standard_ui',
    view: 'default view',
  })
  atf.form.setFieldValues({
    table: 'incident',
    formUI: 'standard_ui',
    fieldValues: {
      short_description: 'test description from text2fluent',
    },
  })
  atf.form.submitForm({
    assertType: 'form_submitted_to_server',
    formUI: 'standard_ui',
  })
  atf.form.fieldValueValidation({
    table: 'incident',
    conditions: 'short_description = test description from text2fluent',
    formUI: 'standard_ui',
  })
})