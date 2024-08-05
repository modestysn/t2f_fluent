import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    cs0: {
                        table: 'sys_script_client'
                        id: '80f3edb023cf430ba91523263121711d'
                    }
                    br0: {
                        table: 'sys_script'
                        id: '4aba80d3b66c4ab4ad2c0c6a5307643b'
                    }
                    sys_atf_step__1: {
                        table: 'sys_atf_step'
                        id: '1b34ab6b619e43d48d6df8bdd2f03dea'
                    }
                    sys_atf_step__2: {
                        table: 'sys_atf_step'
                        id: '49d87a19c7c2485c8b4766a62216fdbc'
                    }
                    sys_atf_step__3: {
                        table: 'sys_atf_step'
                        id: '6f14d0c203134b5898eca74c13491d22'
                    }
                    '': {
                        table: 'sys_atf_test'
                        id: '267a8d260cc74887b2efab10514ab0ef'
                    }
                    sys_atf_step_validate_text_field_1: {
                        table: 'sys_atf_step'
                        id: '4d5deb81f157422b895d35a9909aad78'
                    }
                    sys_atf_step_validate_text_field_2: {
                        table: 'sys_atf_step'
                        id: '30bca52739ec4e0f9b3db1b13dfa115a'
                    }
                    sys_atf_step_validate_text_field_3: {
                        table: 'sys_atf_step'
                        id: 'b66b427a3d82443e9f90ba7668ff3e8d'
                    }
                    sys_atf_step_validate_text_field_4: {
                        table: 'sys_atf_step'
                        id: '8b18e4ed15fc46aba54bcc24388803bc'
                    }
                    sys_atf_step_validate_text_field_5: {
                        table: 'sys_atf_step'
                        id: '0222ed8477b247f097a64e84ceb9558c'
                    }
                    validate_text_field: {
                        table: 'sys_atf_test'
                        id: 'a08b90e3ddbd4a36a3cd3a0a6cc52d80'
                    }
                    sys_variable_value__1_586e2c4253e0220002c6435723dc3415: {
                        table: 'sys_variable_value'
                        id: 'd48854a391dd4c459da254178afb83db'
                    }
                    sys_variable_value__2_b124164e53a0220002c6435723dc34c5: {
                        table: 'sys_variable_value'
                        id: '1d31e8ff68654d31b501f7992e15cf64'
                    }
                    sys_variable_value__2_17d732a9c7a333005e5c45b881c26007: {
                        table: 'sys_variable_value'
                        id: '2afd8cc9e82d40a89d8a29793bf4f04b'
                    }
                    sys_variable_value__2_74d6e7a0a3023110571967d1361e616b: {
                        table: 'sys_variable_value'
                        id: 'f4adb927a57440f6944aa88ae8d9a6b3'
                    }
                    sys_variable_value__2_ad351a4e53a0220002c6435723dc34f0: {
                        table: 'sys_variable_value'
                        id: '36fd918adb1e4f33a3786c374c4e568d'
                    }
                    sys_variable_value__2_6e55da4e53a0220002c6435723dc34a0: {
                        table: 'sys_variable_value'
                        id: '88e306662416408d923f9347b822a7b9'
                    }
                    sys_variable_value__2_c2eb56e853422110248dddeeff7b1261: {
                        table: 'sys_variable_value'
                        id: '71d5d495012140a4b7d972dac11a85e1'
                    }
                    sys_variable_value__3_a0e13cc35320220002c6435723dc3467: {
                        table: 'sys_variable_value'
                        id: '5a5cc6ad990d44f1987fc996ee257d3f'
                    }
                    sys_variable_value__3_c83b5337e7633300e12127d8d2f6a98b: {
                        table: 'sys_variable_value'
                        id: '147eea5d93534102b4357f73f66c820a'
                    }
                    sys_variable_value__3_4aa838f25320220002c6435723dc34e1: {
                        table: 'sys_variable_value'
                        id: '8501c3f831d744d3a47d13a153833ce4'
                    }
                    sys_variable_value_validate_text_field_1_6f2a59a4e7133300b5646ea8c2f6a975: {
                        table: 'sys_variable_value'
                        id: 'bfbbdf2193ec458bb3fb099eb0d86f25'
                    }
                    sys_variable_value_validate_text_field_1_bb84ed825320220002c6435723dc3400: {
                        table: 'sys_variable_value'
                        id: '468f0d8cbaca43aa801cd8799f23684e'
                    }
                    sys_variable_value_validate_text_field_1_27d4e1c25320220002c6435723dc3486: {
                        table: 'sys_variable_value'
                        id: '37cbf506d640457a8ddfe3dbaadb54fb'
                    }
                    sys_variable_value_validate_text_field_2_946f3c1a0f23330072e6452bc4767eda: {
                        table: 'sys_variable_value'
                        id: 'c3eb01878590432d9c77008c687b9195'
                    }
                    sys_variable_value_validate_text_field_2_424ca6465320220002c6435723dc34b5: {
                        table: 'sys_variable_value'
                        id: 'd46cd47b6848405e8bdcf12e0a2111d3'
                    }
                    sys_variable_value_validate_text_field_2_b3dba2465320220002c6435723dc34f0: {
                        table: 'sys_variable_value'
                        id: '239c4a3215af44889770a1f9ba0e343b'
                    }
                    sys_variable_value_validate_text_field_3_ae8b91c9ffa333008d3f5d9ad53bf1ba: {
                        table: 'sys_variable_value'
                        id: 'a74af287c7eb421a95b490588572c0a5'
                    }
                    sys_variable_value_validate_text_field_3_c796d40497302200abe4bb7503ac4ad8: {
                        table: 'sys_variable_value'
                        id: '61aef1bd2f5743198e93b09ac734e18b'
                    }
                    sys_variable_value_validate_text_field_4_b124164e53a0220002c6435723dc34c5: {
                        table: 'sys_variable_value'
                        id: '3988f828cfaa4325a2dafe90d9a5752a'
                    }
                    sys_variable_value_validate_text_field_4_17d732a9c7a333005e5c45b881c26007: {
                        table: 'sys_variable_value'
                        id: 'b0cfedf8562443e7bf78143bfe188237'
                    }
                    sys_variable_value_validate_text_field_4_74d6e7a0a3023110571967d1361e616b: {
                        table: 'sys_variable_value'
                        id: 'd264b1c8a75f48118059b2d4e767586f'
                    }
                    sys_variable_value_validate_text_field_4_ad351a4e53a0220002c6435723dc34f0: {
                        table: 'sys_variable_value'
                        id: '1841fa30f6e547aca83396304be39a28'
                    }
                    sys_element_mapping_validate_text_field_4_ad351a4e53a0220002c6435723dc34f0: {
                        table: 'sys_element_mapping'
                        id: '77a0d6f8723940ea9a1b137d3e11e6e3'
                    }
                    sys_variable_value_validate_text_field_4_6e55da4e53a0220002c6435723dc34a0: {
                        table: 'sys_variable_value'
                        id: '044b66272258420d8e6aa1e5e11e2a07'
                    }
                    sys_variable_value_validate_text_field_4_c2eb56e853422110248dddeeff7b1261: {
                        table: 'sys_variable_value'
                        id: '549ef6cfefb542b0a701ff6ac41ef065'
                    }
                    sys_variable_value_validate_text_field_5_a0e13cc35320220002c6435723dc3467: {
                        table: 'sys_variable_value'
                        id: 'aa9a2a92df4d4367816dd58664d0b55f'
                    }
                    sys_variable_value_validate_text_field_5_c83b5337e7633300e12127d8d2f6a98b: {
                        table: 'sys_variable_value'
                        id: '7c63797c886048b6b5cf8076e302f2cd'
                    }
                    sys_variable_value_validate_text_field_5_4aa838f25320220002c6435723dc34e1: {
                        table: 'sys_variable_value'
                        id: '44ec45540b5046a58cc340c28bcad308'
                    }
                }
                deleted: {
                    sys_variable_value: [
                        'ba6a34389c71405f98f9fbd889c796a4',
                        '0abe36b5a7434238b6b67f1a62bdbf25',
                        'b96387584f88468da6b2fe76c764f791',
                        '82264827270a4968be5f3356674c8bdc',
                        '1c27b56c9b194ab882ba4e4ee7210d48',
                        'c48adda04bff4266ae2f5844edcfdedb',
                        'b574dfd560024337b739a2dcafdad13e',
                        'b42cf782bc09442ebbfa66d2a6734701',
                        '827ff8d6bb244aa2ae08eec88b8349a1',
                        '89f465c94ed440f59ad5f3a3000ef3eb',
                        '1741c9e2f8e640fbabf3dbe14a71d780',
                        '97fea9ac07f249e7b7d9890a5e892eeb',
                        '9f833deaa28c4c3c897aaddde05642da',
                        '3f0a5a4619a842f0b9b0c81b879aa6c5',
                        '4e96938bd391430d9080cbb7e8f058df',
                        '263f9b43706e4b9f9b79c7a410429e34',
                        '1bebe156fb77462bb1703b9979a6c1d6',
                        '06f1d64a95774181bf998a0f8b997851',
                        '97bba093fc664195aa05c16f484fd567',
                        'b2d14e3627d84374b9d856ab3c8f6012',
                        'dfb1a73cddac4c029739f470d7d01db5',
                        'c0a1a3863aa24a7aaa21b4e5fbf17fe1',
                        'a79559788d054e59ace11e740cfa8e05',
                        'ea72a0a5167b4c638abb4560ea4dd033',
                        '08d1144445ba4b728099012305f05e51',
                        'a219821a7bd141c6bfe14d133b6e607c',
                        'aca224e5094848a9bb15609122165c3c',
                    ]
                    sys_element_mapping: ['51cde3264e9a408d9527644626428ffb']
                }
            }
        }
    }
}
