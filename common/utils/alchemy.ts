import axios from "axios";
import { ALCHEMY_ENDPOINT } from "./constants";
import { ApiMethod, Execution } from "types";
import { ExecutionType } from "types";

export const executeAlchemyApiWithParams = (params: string) => {
  return axios.post(ALCHEMY_ENDPOINT, params, {
    headers: { "Content-Type": "application/json", Accept: "application/json" },
  });
};

export const prepareBundledParams = (
  type: ExecutionType,
  selectedParams: Array<Execution>
): Execution => {
  let method: ApiMethod;
  switch (type) {
    case "SIMULATE_ASSET_CHANGES":
      {
        method = "alchemy_simulateAssetChangesBundle";
      }
      break;
    case "SIMULATE_EXECUTION":
      {
        method = "alchemy_simulateExecutionBundle";
      }
      break;
  }
  let bundled = {
    id: 1,
    method,
    jsonrpc: "2.0",
    params: [],
  };
  for (let i = 0; i < selectedParams.length; i++) {
    const params = [...bundled.params, selectedParams[i].apiParams.params[0]];
    Object.assign(bundled, {
      ...bundled,
      params,
    });
  }
  // @note alchemy's api expects an array of objects in the zeroth element of params array
  // not sure why there's this peculiar construction of this array
  Object.assign(bundled, { ...bundled, params: [bundled.params] });
  return {
    ...selectedParams[0], // @note does not affect the execution. only for mocking
    apiParams: bundled,
  };
};
