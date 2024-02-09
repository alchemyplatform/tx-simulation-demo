import { Execution } from "types";
export const mockSimulateAssetChanges: Array<Execution> = [
  {
    apiParams: {
      id: 1,
      jsonrpc: "2.0",
      method: "alchemy_simulateAssetChanges",
      params: [
        {
          from: "0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045",
          to: "0x72EAa8ba8726a10D5e0d8441c592451C7C6670FC",
          value: "0x10a741a462780000",
          data: "0x",
        },
      ],
    },
    txType: "Native Transfer",
    naturalLanguage: `Transfer 1.2 ETH from vitalik.eth to alc.eth`,
    naturalLanguageResponse: `vitalik.eth: -1.2 ETH, alc.eth: +1.2 ETH`,
  },
  {
    apiParams: {
      id: 1,
      jsonrpc: "2.0",
      method: "alchemy_simulateAssetChanges",
      params: [
        {
          from: "0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045",
          to: "0xe5cB067E90D5Cd1F8052B83562Ae670bA4A211a8",
          value: "0x1bc16d674ec80000",
          data: "0x",
        },
      ],
    },
    txType: "Native Transfer",
    naturalLanguage: `Transfer 2 ETH from vitalik.eth to sahilaujla.eth`,
    naturalLanguageResponse: `vitalik.eth: -2 ETH, sahilaujla.eth: +2 ETH`,
  },
  {
    apiParams: {
      id: 1,
      jsonrpc: "2.0",
      method: "alchemy_simulateAssetChanges",
      params: [
        {
          from: "0xe5cB067E90D5Cd1F8052B83562Ae670bA4A211a8",
          to: "0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045",
          value: "0x1bc16d674ec80000",
          data: "0x",
        },
      ],
    },
    txType: "Native Transfer",
    naturalLanguage: `Transfer 2 ETH from sahilaujla.eth to vitalik.eth`,
    naturalLanguageResponse: `Transaction would revert: sahilaujla.eth has insufficient funds, required 2 ETH but has 0.03 ETH`,
  },
  {
    apiParams: {
      id: 1,
      jsonrpc: "2.0",
      method: "alchemy_simulateAssetChanges",
      params: [
        {
          from: "0x28C6c06298d514Db089934071355E5743bf21d60",
          to: "0x5283D291DBCF85356A21bA090E6db59121208b44",
          value: "0x0",
          data: "0xa9059cbb000000000000000000000000f4466e34f158b007eec21c3d74466cb11fa6cb32000000000000000000000000000000000000000000000004c53ecdc18a600000",
        },
      ],
    },
    txType: "Token Transfer",
    naturalLanguage: `Transfer 88 BLUR from 0x28C6c06298...f21d60 to 0xf4466e34F1...Fa6cB32`,
    naturalLanguageResponse: `0x28C6c06298...f21d60: -88 BLUR, 0xf4466e34F1...Fa6cB32: +88 BLUR`,
  },
];

export const mockSimulateExecution: Array<Execution> = [
  {
    // https://etherscan.io/tx/0xabe99276f81de4b54e4795cd2c0113cbde1d83893be4a4c34ef2e2c3addbe3b0
    apiParams: {
      id: 1,
      jsonrpc: "2.0",
      method: "alchemy_simulateExecution",
      params: [
        {
          from: "0xb699Dd31905Aad5d38718389367F28830CFFB330",
          to: "0xC20e204606557cb98b305be605F924d8565fb700",
          value: "0x0",
          data: "0xa22cb4650000000000000000000000002f18f339620a63e43f0839eeb18d7de1e1be4dfb0000000000000000000000000000000000000000000000000000000000000001",
        },
      ],
    },
    txType: "Approval: setApprovalForAll",
    naturalLanguage: `Set approval for LIGHTLING tokens held by 0xb699D...30CFFB330 for trade on 0x2f18F...Be4DfB`,
    naturalLanguageResponse: `This attempt would lead to a successful transaction. Turn on the nerd mode to see execution traces and decoded logs.`,
  },
  {
    // https://etherscan.io/tx/0xebc27d7336ae53b467cdeb91ec5f60fe0a0541a10c47ced0a6c0f073ad942c5a
    apiParams: {
      id: 1,
      jsonrpc: "2.0",
      method: "alchemy_simulateExecution",
      params: [
        {
          from: "0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045",
          to: "0x68b3465833fb72A70ecDF485E0e4C7bD8665Fc45",
          value: "0x1dff1d119ebe0000",
          data: "0x5ae401dc000000000000000000000000000000000000000000000000000000006390b0e7000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000040000000000000000000000000000000000000000000000000000000000000016000000000000000000000000000000000000000000000000000000000000000e45023b4df000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc2000000000000000000000000a0b86991c6218b36c1d19d4a2e9eb0ce3606eb4800000000000000000000000000000000000000000000000000000000000001f4000000000000000000000000d8da6bf26964af9d7eed9e03e53415d37aa96045000000000000000000000000000000000000000000000000000000009e2191400000000000000000000000000000000000000000000000001dff1d119ebdff9f000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000412210e8a00000000000000000000000000000000000000000000000000000000",
        },
      ],
    },
    txType: "Swap: Uniswap",
    naturalLanguage: `Swap 2.150734911236002673 ETH for USDC on Uniswap V3`,
    naturalLanguageResponse: `This attempt would lead to a failed transaction. Turn on the nerd mode to see the error`,
  },
  {
    // https://etherscan.io/tx/0x26b8e4b073b35463ad6bc2253782a4b447c9388f8256c3d55b4e9075862143e3
    apiParams: {
      id: 1,
      jsonrpc: "2.0",
      method: "alchemy_simulateExecution",
      params: [
        {
          from: "0x453231aB01ad2323b341a6571595295642926E5b",
          to: "0x06450dEe7FD2Fb8E39061434BAbCFC05599a6Fb8",
          value: "0x0",
          data: "0x9ff054df000000000000000000000000000000000000000000000000000000000000003a",
        },
      ],
    },
    txType: "Function: claimRank",
    naturalLanguage: `Claim rank 58 on XENCrypto contract (0x06450dEe7FD2Fb8E39061434BAbCFC05599a6Fb8)`,
    naturalLanguageResponse: `This attempt would lead to a successful transaction. Turn on the nerd mode to see execution traces and decoded logs.`,
  },
];
