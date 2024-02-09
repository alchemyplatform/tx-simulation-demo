import { AlchemyApiResponse, Execution } from "types";

// @todo @anggxyz
const parseResponseToNaturalLanguage = (params: Array<Execution>) => {
  const naturalLanguage = params.map((p) => p.naturalLanguageResponse);
  return JSON.stringify(naturalLanguage, null, 4);
};

// @todo @anggxyz
const parseParamsToNaturalLanguage = (params: Array<Execution>) => {
  const naturalLanguage = params.map((p) => p.naturalLanguage);
  return JSON.stringify(naturalLanguage, null, 4);
};

export function formatResponse(
  response: AlchemyApiResponse | undefined,
  nerdMode: boolean,
  params: Array<Execution>
): string {
  if (!response) {
    return "No response received.";
  }

  // If nerd mode is on, display the JSON as is
  if (nerdMode) {
    return JSON.stringify(response, undefined, 2);
  } else {
    return parseResponseToNaturalLanguage(params);
  }
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
