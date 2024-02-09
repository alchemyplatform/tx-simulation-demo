export type ExecutionType = "SIMULATE_EXECUTION" | "SIMULATE_ASSET_CHANGES";
export type ApiMethod =
  | "alchemy_simulateAssetChanges"
  | "alchemy_simulateExecution"
  | "alchemy_simulateAssetChangesBundle"
  | "alchemy_simulateExecutionBundle";
type Transaction = {
  from: string;
  to: string;
  value: string;
  data: string;
};

type TransactionParam = {
  id: number;
  jsonrpc: string;
  method: ApiMethod;
  params: Array<Transaction>;
};
// @todo add more
export type AlchemyApiResponse =
  | AssetChangesResponse
  | SimulateExecutionResponse
  | BundledExecutionResponse;
type AssetChangesResponse = {
  jsonrpc: string;
  id: number;
  result: {
    changes: Array<{
      assetType: "ERC20" | "ERC721" | "ERC1155";
      changeType: "TRANSFER";
      from: string;
      to: string;
      rawAmount: string;
      contractAddress: string;
      tokenId: string | null;
      decimals: number;
      symbol: string;
      name: string;
      logo: string;
      amount: string;
    }>;
    gasUsed: string;
    error: null | Object;
  };
};

type DecodedCallOrEvent = {
  decoded: {
    authority: "ETHERSCAN";
    methodName?: string;
    eventName?: string;
    inputs: Array<{
      name: string;
      value: string;
      type: string;
      indexed?: boolean;
    }>;
    outputs?: [];
  };
  type?: "CALL";
  from?: string;
  to?: string;
  value?: string;
  gas?: string;
  gasUsed?: string;
  input?: string;
  output?: string;
  address?: string;
  data?: string;
  topics?: Array<string>;
};

type SimulateExecutionResponse = {
  jsonrpc: string;
  id: number;
  result: {
    calls: Array<DecodedCallOrEvent>;
    logs: Array<DecodedCallOrEvent>;
  };
};

type BundledExecutionResponse = {
  jsonrpc: string;
  id: number;
  result: Array<SimulateExecutionResponse | AssetChangesResponse>;
};

export type Execution = {
  apiParams: TransactionParam;
  response?: {
    data: AlchemyApiResponse;
  };
  // @todo refer etherscan
  txType: string;
  naturalLanguage: string;
  naturalLanguageResponse: string;
};
