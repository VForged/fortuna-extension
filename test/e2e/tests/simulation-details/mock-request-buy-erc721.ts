import {
  MockRequestResponse,
  SENDER_ADDRESS_MOCK,
  SENDER_ADDRESS_NO_0X_MOCK,
} from './types';

export const BUY_ERC721_TRANSACTION_MOCK = {
  data: '0xfbee349d00000000000000000000000000000000000000000000000000000000000000c00000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000001ccc7b6351d59f42bbb85f1fcc89cd4ac31c69cfa0681c900c46ddb7ad3f3c690f1006752ecedda5ee83902884f78ae85a3a1996bc56dc30f6aba0004ddc87699f00000000000000000000000000000000000000000000000000000000000003000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000ff900d7067a24874264ced8198cc87ebd7c1c53d0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000006669f99b0000000000000000000000000000000024081bbd5ce9458a998286f53a873a41000000000000000000000000eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee000000000000000000000000000000000000000000000000002e01f4d5d760000000000000000000000000000000000000000000000000000000000000000160000000000000000000000000ef9c21e3ba31a74910fc7e7cb3fc814ad842ad6e00000000000000000000000000000000000000000000000000000000000002cf000000000000000000000000000000000000000000000000000000000000022000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000020000000000000000000000000e9ba8fa0222fc76e8bcaa13e4258f749bb92af320000000000000000000000000000000000000000000000000003baf82d03a0000000000000000000000000000000000000000000000000000000000000000060000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
  from: SENDER_ADDRESS_MOCK,
  maxFeePerGas: '0x0',
  maxPriorityFeePerGas: '0x0',
  to: '0xdef1c0ded9bec7f1a1670819833240f027b25eff',
  value: '0x31bced02db0000',
};

export const BUY_ERC721_REQUEST_1_MOCK: MockRequestResponse = {
  request: {
    id: '0',
    jsonrpc: '2.0',
    method: 'infura_simulateTransactions',
    params: [
      {
        transactions: [BUY_ERC721_TRANSACTION_MOCK],
        withCallTrace: true,
        withLogs: true,
      },
    ],
  },
  response: {
    jsonrpc: '2.0',
    result: {
      transactions: [
        {
          return: '0x',
          status: '0x1',
          gasUsed: '0x2a000',
          gasLimit: '0x2d2a6',
          fees: [
            {
              maxFeePerGas: '0x0',
              maxPriorityFeePerGas: '0x0',
              balanceNeeded: '0x31bced02db0000',
              currentBalance: '0x3374df8f3ee8d4c',
              error: '',
            },
          ],
          stateDiff: {
            post: {
              [SENDER_ADDRESS_MOCK]: {
                balance: '0x305910bf1138d4c',
                nonce: '0x3bd',
              },
              '0xdef1c0ded9bec7f1a1670819833240f027b25eff': {
                storage: {
                  '0xeccd0aa0b0cae8a0393c4fcec180bedb48844984d6ea85756283f2a84cf37e42':
                    '0x0000000000000000000000000000000000000000000000020000000000000000',
                },
              },
              '0xe9ba8fa0222fc76e8bcaa13e4258f749bb92af32': {
                balance: '0x171e213c2748203',
              },
              '0xef9c21e3ba31a74910fc7e7cb3fc814ad842ad6e': {
                storage: {
                  '0x3440dd3ee3ca5de61d4ee92cfe26c447934bd6b8480a62ce27fbb9ed18f73cd4':
                    '0x0000000000000000000000000000000000000000000000000000000000001077',
                  '0x65534a61afb536dbc0061b7dbeb0f72092486077fcdfc4d28d70b226ed847a88':
                    '0x0000000000000000000000000000000000000000000000000000000000000003',
                  '0x7147429d9c36092cffc563112aac67146541c751f01a33e802076e13916cced1': `0x000000000000000000000000${SENDER_ADDRESS_NO_0X_MOCK}`,
                  '0xa3dd05d36cfa40690563b0b3f6b1b0603d431d1c3573682cff963d848b558c67':
                    '0x0000000000000000000000000000000000000000000000000000000000000002',
                  '0xe7bc4be1d73122b60587e3436277f212112d1ea05407d1ba62e996ce0e1ec828':
                    '0x0000000000000000000000000000000000000000000000000000000000000001',
                  '0xea81aa3597df52a22f198dc4d5802c492ddd6c108c03ad22e53ba5bbb9666352':
                    '0x00000000000000000000000000000000000000000000000000000000000002cf',
                },
              },
              '0xff900d7067a24874264ced8198cc87ebd7c1c53d': {
                balance: '0x4c8ba807b58e46',
              },
            },
            pre: {
              [SENDER_ADDRESS_MOCK]: {
                balance: '0x3374df8f3ee8d4c',
                nonce: '0x3bc',
              },
              '0xdef1c0ded9bec7f1a1670819833240f027b25eff': {
                balance: '0x130e736d76ea3d',
                nonce: '0x4',
              },
              '0xe9ba8fa0222fc76e8bcaa13e4258f749bb92af32': {
                balance: '0x16e271b9570e203',
                nonce: '0x41',
              },
              '0xef9c21e3ba31a74910fc7e7cb3fc814ad842ad6e': {
                balance: '0x0',
                nonce: '0x1',
                storage: {
                  '0x3440dd3ee3ca5de61d4ee92cfe26c447934bd6b8480a62ce27fbb9ed18f73cd4':
                    '0x00000000000000000000000000000000000000000000000000000000000002cf',
                  '0x6210cdd80d7ed64c147610e636f3f5346cfa1e04fd82b95c61224b5d32099a6f':
                    '0x0000000000000000000000000000000000000000000000000000000000001077',
                  '0x65534a61afb536dbc0061b7dbeb0f72092486077fcdfc4d28d70b226ed847a88':
                    '0x0000000000000000000000000000000000000000000000000000000000000004',
                  '0x7147429d9c36092cffc563112aac67146541c751f01a33e802076e13916cced1':
                    '0x000000000000000000000000ff900d7067a24874264ced8198cc87ebd7c1c53d',
                  '0x9cbc963b226fe1134324ceb97d43b5ed9e3a4de61c920f075df835dd1d138cef':
                    '0x0000000000000000000000000000000000000000000000000000000000000002',
                  '0xa3dd05d36cfa40690563b0b3f6b1b0603d431d1c3573682cff963d848b558c67':
                    '0x0000000000000000000000000000000000000000000000000000000000000003',
                },
              },
              '0xff900d7067a24874264ced8198cc87ebd7c1c53d': {
                balance: '0x1e89b331de2e46',
                nonce: '0x1c',
              },
            },
          },
          callTrace: {
            from: SENDER_ADDRESS_MOCK,
            to: '0xdef1c0ded9bec7f1a1670819833240f027b25eff',
            type: 'CALL',
            gas: '0x1dcd6500',
            gasUsed: '0x2a000',
            value: '0x31bced02db0000',
            input:
              '0xfbee349d00000000000000000000000000000000000000000000000000000000000000c00000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000001ccc7b6351d59f42bbb85f1fcc89cd4ac31c69cfa0681c900c46ddb7ad3f3c690f1006752ecedda5ee83902884f78ae85a3a1996bc56dc30f6aba0004ddc87699f00000000000000000000000000000000000000000000000000000000000003000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000ff900d7067a24874264ced8198cc87ebd7c1c53d0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000006669f99b0000000000000000000000000000000024081bbd5ce9458a998286f53a873a41000000000000000000000000eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee000000000000000000000000000000000000000000000000002e01f4d5d760000000000000000000000000000000000000000000000000000000000000000160000000000000000000000000ef9c21e3ba31a74910fc7e7cb3fc814ad842ad6e00000000000000000000000000000000000000000000000000000000000002cf000000000000000000000000000000000000000000000000000000000000022000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000020000000000000000000000000e9ba8fa0222fc76e8bcaa13e4258f749bb92af320000000000000000000000000000000000000000000000000003baf82d03a0000000000000000000000000000000000000000000000000000000000000000060000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
            output: '0x',
            error: '',
            calls: [
              {
                from: '0xdef1c0ded9bec7f1a1670819833240f027b25eff',
                to: '0x4af649ffde640ceb34b1afaba3e0bb8e9698cb01',
                type: 'DELEGATECALL',
                gas: '0x1d55b33e',
                gasUsed: '0x246ef',
                value: '0x31bced02db0000',
                input:
                  '0xfbee349d00000000000000000000000000000000000000000000000000000000000000c00000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000001ccc7b6351d59f42bbb85f1fcc89cd4ac31c69cfa0681c900c46ddb7ad3f3c690f1006752ecedda5ee83902884f78ae85a3a1996bc56dc30f6aba0004ddc87699f00000000000000000000000000000000000000000000000000000000000003000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000ff900d7067a24874264ced8198cc87ebd7c1c53d0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000006669f99b0000000000000000000000000000000024081bbd5ce9458a998286f53a873a41000000000000000000000000eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee000000000000000000000000000000000000000000000000002e01f4d5d760000000000000000000000000000000000000000000000000000000000000000160000000000000000000000000ef9c21e3ba31a74910fc7e7cb3fc814ad842ad6e00000000000000000000000000000000000000000000000000000000000002cf000000000000000000000000000000000000000000000000000000000000022000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000020000000000000000000000000e9ba8fa0222fc76e8bcaa13e4258f749bb92af320000000000000000000000000000000000000000000000000003baf82d03a0000000000000000000000000000000000000000000000000000000000000000060000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
                output: '0x',
                error: '',
                calls: [
                  {
                    from: '0xdef1c0ded9bec7f1a1670819833240f027b25eff',
                    to: '0x0000000000000000000000000000000000000001',
                    type: 'STATICCALL',
                    gas: '0x1ce0362d',
                    gasUsed: '0xbb8',
                    value: null,
                    input:
                      '0xcecc68f79868cc3c883e5eb9975d469f1f43b9b991a7a7559e7230b7e5e834f0000000000000000000000000000000000000000000000000000000000000001ccc7b6351d59f42bbb85f1fcc89cd4ac31c69cfa0681c900c46ddb7ad3f3c690f1006752ecedda5ee83902884f78ae85a3a1996bc56dc30f6aba0004ddc87699f',
                    output:
                      '0x000000000000000000000000ff900d7067a24874264ced8198cc87ebd7c1c53d',
                    error: '',
                    calls: null,
                  },
                  {
                    from: '0xdef1c0ded9bec7f1a1670819833240f027b25eff',
                    to: '0xef9c21e3ba31a74910fc7e7cb3fc814ad842ad6e',
                    type: 'CALL',
                    gas: '0x1cdfcf6a',
                    gasUsed: '0x15add',
                    value: '0x0',
                    input: `0x23b872dd000000000000000000000000ff900d7067a24874264ced8198cc87ebd7c1c53d000000000000000000000000${SENDER_ADDRESS_NO_0X_MOCK}00000000000000000000000000000000000000000000000000000000000002cf`,
                    output: '0x',
                    error: '',
                    calls: null,
                    logs: [
                      {
                        address: '0xef9c21e3ba31a74910fc7e7cb3fc814ad842ad6e',
                        topics: [
                          '0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925',
                          '0x000000000000000000000000ff900d7067a24874264ced8198cc87ebd7c1c53d',
                          '0x0000000000000000000000000000000000000000000000000000000000000000',
                          '0x00000000000000000000000000000000000000000000000000000000000002cf',
                        ],
                        data: '0x',
                      },
                      {
                        address: '0xef9c21e3ba31a74910fc7e7cb3fc814ad842ad6e',
                        topics: [
                          '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef',
                          '0x000000000000000000000000ff900d7067a24874264ced8198cc87ebd7c1c53d',
                          `0x000000000000000000000000${SENDER_ADDRESS_NO_0X_MOCK}`,
                          '0x00000000000000000000000000000000000000000000000000000000000002cf',
                        ],
                        data: '0x',
                      },
                    ],
                  },
                  {
                    from: '0xdef1c0ded9bec7f1a1670819833240f027b25eff',
                    to: '0xff900d7067a24874264ced8198cc87ebd7c1c53d',
                    type: 'CALL',
                    gas: '0x1cde5550',
                    gasUsed: '0x0',
                    value: '0x2e01f4d5d76000',
                    input: '0x',
                    output: '0x',
                    error: '',
                    calls: null,
                  },
                  {
                    from: '0xdef1c0ded9bec7f1a1670819833240f027b25eff',
                    to: '0xe9ba8fa0222fc76e8bcaa13e4258f749bb92af32',
                    type: 'CALL',
                    gas: '0x1cde2e8a',
                    gasUsed: '0x0',
                    value: '0x3baf82d03a000',
                    input: '0x',
                    output: '0x',
                    error: '',
                    calls: null,
                  },
                ],
                logs: [
                  {
                    address: '0xdef1c0ded9bec7f1a1670819833240f027b25eff',
                    topics: [
                      '0x50273fa02273cceea9cf085b42de5c8af60624140168bd71357db833535877af',
                    ],
                    data: `0x0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000ff900d7067a24874264ced8198cc87ebd7c1c53d000000000000000000000000${SENDER_ADDRESS_NO_0X_MOCK}0000000000000000000000000000000024081bbd5ce9458a998286f53a873a41000000000000000000000000eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee000000000000000000000000000000000000000000000000002e01f4d5d76000000000000000000000000000ef9c21e3ba31a74910fc7e7cb3fc814ad842ad6e00000000000000000000000000000000000000000000000000000000000002cf0000000000000000000000000000000000000000000000000000000000000000`,
                  },
                ],
              },
            ],
          },
          feeEstimate: 7243125887434752,
          baseFeePerGas: 42103363836,
        },
      ],
      blockNumber: '0x129689d',
      id: '3ea521e3-e0c5-44af-81af-321221bebc95',
    },
    id: '0',
  },
};

export const BUY_ERC721_REQUEST_2_MOCK: MockRequestResponse = {
  request: {
    id: '1',
    jsonrpc: '2.0',
    method: 'infura_simulateTransactions',
    params: [
      {
        transactions: [
          {
            from: SENDER_ADDRESS_MOCK,
            to: '0xef9c21e3ba31a74910fc7e7cb3fc814ad842ad6e',
            data: `0x6352211e00000000000000000000000000000000000000000000000000000000000002cf`,
          },
          {
            chainId: '0x1',
            from: SENDER_ADDRESS_MOCK,
            to: '0xdef1c0ded9bec7f1a1670819833240f027b25eff',
            value: '0x31bced02db0000',
            data: '0xfbee349d00000000000000000000000000000000000000000000000000000000000000c00000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000001ccc7b6351d59f42bbb85f1fcc89cd4ac31c69cfa0681c900c46ddb7ad3f3c690f1006752ecedda5ee83902884f78ae85a3a1996bc56dc30f6aba0004ddc87699f00000000000000000000000000000000000000000000000000000000000003000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000ff900d7067a24874264ced8198cc87ebd7c1c53d0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000006669f99b0000000000000000000000000000000024081bbd5ce9458a998286f53a873a41000000000000000000000000eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee000000000000000000000000000000000000000000000000002e01f4d5d760000000000000000000000000000000000000000000000000000000000000000160000000000000000000000000ef9c21e3ba31a74910fc7e7cb3fc814ad842ad6e00000000000000000000000000000000000000000000000000000000000002cf000000000000000000000000000000000000000000000000000000000000022000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000020000000000000000000000000e9ba8fa0222fc76e8bcaa13e4258f749bb92af320000000000000000000000000000000000000000000000000003baf82d03a0000000000000000000000000000000000000000000000000000000000000000060000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
          },
          {
            from: SENDER_ADDRESS_MOCK,
            to: '0xef9c21e3ba31a74910fc7e7cb3fc814ad842ad6e',
            data: `0x6352211e00000000000000000000000000000000000000000000000000000000000002cf`,
          },
        ],
      },
    ],
  },
  response: {
    jsonrpc: '2.0',
    result: {
      transactions: [
        {
          return:
            '0x0000000000000000000000000000000000000000000000000000000000000000',
          status: '0x1',
          gasUsed: '0x5f66',
          gasLimit: '0x60b9',
          fees: [
            {
              maxFeePerGas: '0xfb65bc42d',
              maxPriorityFeePerGas: '0x288f0c5',
              balanceNeeded: '0x5efbd31e2053e',
              currentBalance: '0x3374df8f3ee8d4c',
              error: '',
            },
          ],
          stateDiff: {
            post: {
              [SENDER_ADDRESS_MOCK]: {
                nonce: '0x3bd',
              },
            },
            pre: {
              [SENDER_ADDRESS_MOCK]: {
                balance: '0x3374df8f3ee8d4c',
                nonce: '0x3bc',
              },
            },
          },
          feeEstimate: 1028248351627214,
          baseFeePerGas: 42103363836,
        },
        {
          return: '0x',
          status: '0x1',
          gasUsed: '0x2a000',
          gasLimit: '0x2d2a6',
          fees: [
            {
              maxFeePerGas: '0xfb65bc42d',
              maxPriorityFeePerGas: '0x288f0c5',
              balanceNeeded: '0x5e176c11a5f1d4',
              currentBalance: '0x3315e3bc20c880e',
              error: '',
            },
          ],
          stateDiff: {
            post: {
              [SENDER_ADDRESS_MOCK]: {
                balance: '0x305910bf1138d4c',
                nonce: '0x3be',
              },
              '0xdef1c0ded9bec7f1a1670819833240f027b25eff': {
                storage: {
                  '0xeccd0aa0b0cae8a0393c4fcec180bedb48844984d6ea85756283f2a84cf37e42':
                    '0x0000000000000000000000000000000000000000000000020000000000000000',
                },
              },
              '0xe9ba8fa0222fc76e8bcaa13e4258f749bb92af32': {
                balance: '0x171e213c2748203',
              },
              '0xef9c21e3ba31a74910fc7e7cb3fc814ad842ad6e': {
                storage: {
                  '0x3440dd3ee3ca5de61d4ee92cfe26c447934bd6b8480a62ce27fbb9ed18f73cd4':
                    '0x0000000000000000000000000000000000000000000000000000000000001077',
                  '0x65534a61afb536dbc0061b7dbeb0f72092486077fcdfc4d28d70b226ed847a88':
                    '0x0000000000000000000000000000000000000000000000000000000000000003',
                  '0x7147429d9c36092cffc563112aac67146541c751f01a33e802076e13916cced1': `0x000000000000000000000000${SENDER_ADDRESS_NO_0X_MOCK}`,
                  '0xa3dd05d36cfa40690563b0b3f6b1b0603d431d1c3573682cff963d848b558c67':
                    '0x0000000000000000000000000000000000000000000000000000000000000002',
                  '0xe7bc4be1d73122b60587e3436277f212112d1ea05407d1ba62e996ce0e1ec828':
                    '0x0000000000000000000000000000000000000000000000000000000000000001',
                  '0xea81aa3597df52a22f198dc4d5802c492ddd6c108c03ad22e53ba5bbb9666352':
                    '0x00000000000000000000000000000000000000000000000000000000000002cf',
                },
              },
              '0xff900d7067a24874264ced8198cc87ebd7c1c53d': {
                balance: '0x4c8ba807b58e46',
              },
            },
            pre: {
              [SENDER_ADDRESS_MOCK]: {
                balance: '0x3374df8f3ee8d4c',
                nonce: '0x3bd',
              },
              '0xdef1c0ded9bec7f1a1670819833240f027b25eff': {
                balance: '0x130e736d76ea3d',
                nonce: '0x4',
              },
              '0xe9ba8fa0222fc76e8bcaa13e4258f749bb92af32': {
                balance: '0x16e271b9570e203',
                nonce: '0x41',
              },
              '0xef9c21e3ba31a74910fc7e7cb3fc814ad842ad6e': {
                balance: '0x0',
                nonce: '0x1',
                storage: {
                  '0x3440dd3ee3ca5de61d4ee92cfe26c447934bd6b8480a62ce27fbb9ed18f73cd4':
                    '0x00000000000000000000000000000000000000000000000000000000000002cf',
                  '0x6210cdd80d7ed64c147610e636f3f5346cfa1e04fd82b95c61224b5d32099a6f':
                    '0x0000000000000000000000000000000000000000000000000000000000001077',
                  '0x65534a61afb536dbc0061b7dbeb0f72092486077fcdfc4d28d70b226ed847a88':
                    '0x0000000000000000000000000000000000000000000000000000000000000004',
                  '0x7147429d9c36092cffc563112aac67146541c751f01a33e802076e13916cced1':
                    '0x000000000000000000000000ff900d7067a24874264ced8198cc87ebd7c1c53d',
                  '0x9cbc963b226fe1134324ceb97d43b5ed9e3a4de61c920f075df835dd1d138cef':
                    '0x0000000000000000000000000000000000000000000000000000000000000002',
                  '0xa3dd05d36cfa40690563b0b3f6b1b0603d431d1c3573682cff963d848b558c67':
                    '0x0000000000000000000000000000000000000000000000000000000000000003',
                },
              },
              '0xff900d7067a24874264ced8198cc87ebd7c1c53d': {
                balance: '0x1e89b331de2e46',
                nonce: '0x1c',
              },
            },
          },
          feeEstimate: 7243125887606784,
          baseFeePerGas: 42103363836,
        },
        {
          return: `0x00000000000000000000000000000000${SENDER_ADDRESS_NO_0X_MOCK}`,
          status: '0x1',
          gasUsed: '0x5f66',
          gasLimit: '0x60b9',
          fees: [
            {
              maxFeePerGas: '0xfb65bc42d',
              maxPriorityFeePerGas: '0x288f0c5',
              balanceNeeded: '0x5efbd31e2053e',
              currentBalance: '0x2d346cfb066963a',
              error: '',
            },
          ],
          stateDiff: {
            post: {
              [SENDER_ADDRESS_MOCK]: {
                nonce: '0x3bf',
              },
            },
            pre: {
              [SENDER_ADDRESS_MOCK]: {
                balance: '0x305910bf1138d4c',
                nonce: '0x3be',
              },
            },
          },
          feeEstimate: 1028248351627214,
          baseFeePerGas: 42103363836,
        },
      ],
      blockNumber: '0x129689d',
      id: '486d2d6f-76ff-4d59-a5db-4217cbeb5463',
    },
    id: '1',
  },
};
