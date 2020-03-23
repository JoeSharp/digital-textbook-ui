import * as React from "react";

import { Config, DEFAULT_CONFIG } from "./types";

export default React.createContext<Config>(DEFAULT_CONFIG);
