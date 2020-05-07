import React from "react";

import {
  IEmbeddedTrinket,
  QueryParamsObj,
  ITrinketRunOption,
  ITrinketOutputOption,
} from "../../../../api/useEmbeddedIframeApi/types";

const useEmbeddedTrinketUrl = ({
  trinketId,
  runOption = ITrinketRunOption.either,
  outputOption = ITrinketOutputOption.codeAndOutputSideBySide,
  showInstructions = true,
  autoRun = false,
}: IEmbeddedTrinket): string => {
  const queryParams: QueryParamsObj = React.useMemo(() => {
    const params: QueryParamsObj = {};
    if (runOption !== ITrinketRunOption.either) {
      params["runOption"] = runOption.toString();
    }
    if (outputOption === ITrinketOutputOption.hideTheCode) {
      params["outputOnly"] = true.toString();
    } else if (outputOption === ITrinketOutputOption.codeOrOutputToggle) {
      params["toggle"] = true.toString();
    }
    if (showInstructions) {
      params["showInstructions"] = true.toString();
    }
    if (autoRun) {
      params["start"] = "result";
    }

    return params;
  }, [runOption, outputOption, showInstructions, autoRun]);

  return Object.entries(queryParams)
    .map((k) => ({ key: k[0], value: k[1] }))
    .reduce(
      (acc, curr, i) => `${acc}${i > 0 ? "&" : "?"}${curr.key}=${curr.value}`,
      `https://trinket.io/embed/python/${trinketId}`
    );
};

export default useEmbeddedTrinketUrl;
