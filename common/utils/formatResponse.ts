import { AlchemyApiResponse, Execution } from "types";

// @todo @anggxyz
const parseResponseToNaturalLanguage = (
  result: AlchemyApiResponse["result"]
) => {
  return JSON.stringify(result, undefined, 2);
};

// @todo @anggxyz
const parseParamsToNaturalLanguage = (params: Array<Execution>) => {
  const naturalLanguage = params.map((p) => p.naturalLanguage);
  return JSON.stringify(naturalLanguage, null, 4);
};

export function formatResponse(
  response: AlchemyApiResponse | undefined,
  nerdMode: boolean
): string {
  if (!response) {
    return "";
  }

  // if nerd mode is on, display the json as is
  if (nerdMode) {
    return JSON.stringify(response, undefined, 2);
  }

  // pretty mode response
  return parseResponseToNaturalLanguage(response.result);
}

export function formatParams(
  params: Array<Execution> | undefined,
  nerdMode: boolean
): string {
  if (!params) {
    return "";
  }
  // if nerd mode is on, display the json as is
  const apiParams = params.map((p) => p.apiParams);
  if (nerdMode) {
    return JSON.stringify(apiParams, undefined, 2);
  }
  // pretty mode response
  return parseParamsToNaturalLanguage(params);
}
