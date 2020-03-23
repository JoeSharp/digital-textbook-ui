import * as React from "react";

import ConfigContext from "./ConfigContext";
import { Config, DEFAULT_CONFIG } from "./types";

const ConfigProvider: React.FunctionComponent = ({ children }) => {
  const [isReady, setIsReady] = React.useState<boolean>(false);
  const [config, setConfig] = React.useState<Config>(DEFAULT_CONFIG);

  React.useEffect(() => {
    async function fetchConfig() {
      const response = await fetch("/config.json");

      setConfig((await response.json()) as Config);
      setIsReady(true);
    }

    fetchConfig();
  }, [setIsReady, setConfig]);

  if (!isReady) {
    return <div>Waiting for config</div>;
  }

  return (
    <ConfigContext.Provider value={config}>{children}</ConfigContext.Provider>
  );
};

export default ConfigProvider;
