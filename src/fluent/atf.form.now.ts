import { Test } from '@servicenow/sdk-core/atf'

Test({
    name: 'Open an Existing Record',
    description: 'Opens an existing record using the test step "open existing record" and then asserts some values to make sure it actually opened the record it expects tos',
    active: true,
    failOnServerError: false,
    $id: "",
}, (atf) => {
    atf.server.impersonate({
        user: 'd8f57f140b20220050192f15d6673a98'
    })

    atf.form.openExistingRecord({
        formUI: 'standard_ui',
        view: '',
        recordId: 'd8f57f140b20220050192f15d6673a98',
        table: 'sys_user',
        selectedTabIndex: 0
    })

    atf.form.fieldValueValidation({
        table: 'sys_user',
        conditions: 'first_name=ATF^last_name=User^user_name=ATF.User^EQ',
        formUI: 'standard_ui'
    })
}) 