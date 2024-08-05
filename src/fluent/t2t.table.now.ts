import '@servicenow/sdk-core/global'
import { Table, StringColumn } from '@servicenow/sdk/core'

export const sn_t2f_fluent_t2t_kbd = Table({
    name: 'sn_t2f_fluent_t2t_kbd',
    label: 'Text2Test Fluent Knowledge Base Document',
    extends: 'task',
    schema: {
        topic: StringColumn({ label: 'Topic', maxLength: 40 }),
        reference: StringColumn({ label: 'Reference', maxLength: 1024 }),
        name: StringColumn({ label: 'Name', mandatory: true, maxLength: 40 }),
        content: StringColumn({ label: 'Content', mandatory: true, maxLength: 4096 }),
        category: StringColumn({ label: 'Category', mandatory: true, maxLength: 40 }),
    },
    display: 'name',
    allow_client_scripts: true,
    allow_new_fields: true,
    allow_ui_actions: true,
    allow_web_service_access: true,
    extensible: true,
})
