"use client";
import "./globals.css";
import { useEffect, useState } from "react";
import {
  executeAlchemyApiWithParams,
  prepareBundledParams,
} from "@common/utils/alchemy";
import { AlchemyApiResponse, Execution, ExecutionType } from "types";
import Button from "@common/components/Button";
import { DataDisplay } from "@common/components/MockupCode";
import { InputTypeSelector } from "@common/components/InputTypeSelector";
import { TransactionSelector } from "@common/components/TransactionSelector";
import {
  mockSimulateAssetChanges,
  mockSimulateExecution,
} from "@common/utils/mocks";
import { formatResponse, formatParams } from "@common/utils/formatResponse";
import {
  DEFAULT_DATA_DISPLAY,
  HELP_TEXTS,
  LOOM_DEMO_URL,
} from "@common/utils/constants";

export default function Home() {
  const [executionType, setExecutionType] = useState<ExecutionType>(
    "SIMULATE_ASSET_CHANGES"
  );
  const getTransactionsToDisplay = () => {
    switch (executionType) {
      case "SIMULATE_ASSET_CHANGES": {
        return mockSimulateAssetChanges;
      }
      case "SIMULATE_EXECUTION": {
        return mockSimulateExecution;
      }
      default: {
        return [];
      }
    }
  };
  const [dataDisplay, setDataDisplay] = useState<string | null>(
    DEFAULT_DATA_DISPLAY
  );
  const [params, setParams] = useState<Array<Execution>>([]);
  const [paramsDisplay, setParamsDisplay] = useState<string | null>(
    JSON.stringify(params, undefined, 2)
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const setDataDisplayLoading = (v: boolean) => setIsLoading(v);
  const setError = () => setDataDisplay("There was an error");
  const [bundle, setBundle] = useState<boolean>(false);
  const [nerdMode, setNerdMode] = useState<boolean>(false);
  const [executionResponse, setExecutionResponse] =
    useState<AlchemyApiResponse>();
  const [expandHelpText, setExpandHelpText] = useState<boolean>(false);
  const [helpText, setHelpText] = useState<{
    title: string;
    text: string;
  }>(HELP_TEXTS.DEFAULT);

  const simulate = async () => {
    if (params.length < 1) {
      return setDataDisplay(
        "No transactions selected. Please select a transaction on the left and click Execute"
      );
    }
    setDataDisplayLoading(true);
    try {
      if (!executionType) {
        throw "Error: Execution Type not set";
      }
      const prepared: Execution = bundle
        ? prepareBundledParams(executionType, params)
        : params[0];
      const response = await executeAlchemyApiWithParams(
        JSON.stringify(prepared.apiParams)
      );
      if (response.data) {
        const data = response.data as AlchemyApiResponse;
        setExecutionResponse(data);
        setDataDisplay(formatResponse(data, nerdMode, params));
      } else {
        throw "Error: data object not found in response";
      }
    } catch (err) {
      setDataDisplayLoading(false);
      setError();
      console.error(err);
    }
    setDataDisplayLoading(false);
  };
  const reset = () => {
    setDataDisplay(DEFAULT_DATA_DISPLAY);
    setIsLoading(false);
  };
  useEffect(() => {
    reset();
    setParams([]);
  }, [bundle, executionType]);
  useEffect(() => {
    reset();
    setParamsDisplay(formatParams(params, nerdMode));
  }, [params]);
  useEffect(() => {
    // @dev @note do nothing on the response side when nerd mode is switched
    // setDataDisplay(formatResponse(executionResponse, nerdMode));
    setParamsDisplay(formatParams(params, nerdMode));
  }, [nerdMode]);
  useEffect(() => {
    if (bundle && executionType === "SIMULATE_ASSET_CHANGES") {
      return setHelpText(HELP_TEXTS.BUNDLE_ASSET);
    }
    if (bundle && executionType === "SIMULATE_EXECUTION") {
      return setHelpText(HELP_TEXTS.BUNDLE_SIMULATION);
    }
    if (executionType === "SIMULATE_ASSET_CHANGES") {
      return setHelpText(HELP_TEXTS.ASSET_CHANGES);
    }
    if (executionType === "SIMULATE_EXECUTION") {
      return setHelpText(HELP_TEXTS.SIMULATE_EXECUTION);
    }
  }, [bundle, executionType]);

  return (
    <main className="flex flex-col h-full">
      <div className="flex flex-col items-center gap-6 px-24 mt-6">
        <iframe
          src={LOOM_DEMO_URL}
          frameBorder="0"
          allowFullScreen
          className=" w-[32rem] h-[20rem]"
        ></iframe>

        <div
          className="collapse bg-base-200 cursor-pointer w-full rounded-lg"
          onClick={() => setExpandHelpText((curr) => !curr)}
        >
          <input
            type="radio"
            name="my-accordion-1"
            checked={expandHelpText}
            onChange={() => setExpandHelpText(!expandHelpText)}
          />
          <div className="collapse-title text-lg font-medium">
            {helpText.title}
          </div>
          <div className="collapse-content">
            <p>{helpText.text}</p>
          </div>
        </div>
        <div className="flex flex-row items-center justify-between w-full">
          <div className="flex flex-row items-center gap-4">
            <InputTypeSelector
              text="Simulate Asset Changes"
              onChecked={setExecutionType}
              value="SIMULATE_ASSET_CHANGES"
              checked={executionType === "SIMULATE_ASSET_CHANGES"}
              name="execution-type-selector"
              type="radio"
              styles="radio radio-primary"
            />
            <InputTypeSelector
              text="Simulate Execution"
              onChecked={setExecutionType}
              value="SIMULATE_EXECUTION"
              checked={executionType === "SIMULATE_EXECUTION"}
              name="execution-type-selector"
              type="radio"
              styles="radio radio-primary"
            />
            <InputTypeSelector
              text="Bundle Execution"
              onChecked={setBundle}
              value={true}
              checked={bundle}
              name="bundle-selector"
              type="checkbox"
              styles="checkbox checkbox-secondary"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3 m-2 flex-1 overflow-auto px-24 h-[200px]">
        <div className="w-full h-full col-span-4 overflow-auto">
          <TransactionSelector
            setParams={setParams}
            transactions={getTransactionsToDisplay()}
            currentParams={params}
            multiSelect={bundle}
          />
        </div>
        <div className="flex flex-row w-full gap-3 h-96">
          <div className="flex flex-col h-full w-1/2">
            <div className="flex flex-row justify-between px-2">
              <div>Parameters being sent</div>
              <div>
                <div
                  className="tooltip tooltip-warning"
                  data-tip="Switch to 🤓 to view the JSON!"
                >
                  <InputTypeSelector
                    text="💅"
                    rightText="🤓"
                    onChecked={setNerdMode}
                    value={true}
                    checked={nerdMode}
                    name="nerdMode-selector"
                    type="checkbox"
                    styles="toggle toggle-secondary"
                  />
                </div>
              </div>
            </div>
            <DataDisplay text={paramsDisplay} />
          </div>
          <div className="flex flex-col h-full w-1/2">
            <div className="flex flex-row justify-between pb-[1rem] px-2">
              <div>Returned parameters</div>
            </div>
            <DataDisplay text={dataDisplay} loading={isLoading} />
          </div>
        </div>
        <div className="col-span-4 flex flex-col items-center">
          <Button onClick={simulate} styles="btn-lg">
            Simulate
          </Button>
        </div>
      </div>
    </main>
  );
}
