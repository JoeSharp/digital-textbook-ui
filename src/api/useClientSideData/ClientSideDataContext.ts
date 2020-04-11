import * as React from "react";
import { ICourseDoc } from "../../types";
import { ClientSideData } from "./types";
import { getDefaultObjectReducer } from "../../lib/useObjectReducer/useObjectReducer";

const ClientSideDataContext: React.Context<ClientSideData> = React.createContext(
  {
    courses: getDefaultObjectReducer<ICourseDoc>(),
  }
);

export default ClientSideDataContext;
