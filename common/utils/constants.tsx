export const ALCHEMY_ENDPOINT = `https://eth-mainnet.g.alchemy.com/v2/${process.env.NEXT_PUBLIC_ALCHEMY_API_KEY}`;
export const DEFAULT_DATA_DISPLAY =
  "Click on the buttons to simulate a transaction";
export const HELP_TEXTS = {
  DEFAULT: {
    title: `Click to expand`,
    text: `Get to know the exact impact of a transaction before it hits the blockchain. The Transaction
    Simulation APIs can help prevent unwanted hacks or theft, so you
    know exactly what a transaction will do by simulating it before you
    approve it in your wallet. This means identifying exactly what
    assets will be transferred, what logs will be emitted, what internal
    calls will be made, etc., before it even happens.`,
  },
  BUNDLE_SIMULATION: {
    text: `This method allows you to simulate multiple transactions sequentially. Limited to 3 transactions. 4500 CU cost.`,
    title: `alchemy_simulateExecutionBundle`,
  },
  BUNDLE_ASSET: {
    text: `This method allows you to simulate multiple transactions sequentially. Limited to 3 transactions. 4500 CU cost.`,
    title: `alchemy_simulateAssetChangesBundle`,
  },
  SIMULATE_EXECUTION: {
    text: `Simulates a transaction and returns decoded execution traces and decoded logs.`,
    title: `alchemy_simulateExecution`,
  },
  ASSET_CHANGES: {
    text: `Simulates a transaction and returns an array of all the asset related changes that this transcation would create`,
    title: `alchemy_simulateAssetChanges`,
  },
};

export const LOOM_DEMO_URL =
  "https://www.loom.com/share/5251952b6da940c8b30474755e1e7307?sid=4178a14d-6b46-4b2f-84fe-abbeda41d317";
