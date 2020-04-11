import * as React from "react";
import { ICourseDoc, getDocumentId } from "../../types";
import useObjectReducer from "../../lib/useObjectReducer/useObjectReducer";

import { ClientSideData } from "./types";
import ClientSideDataContext from "./ClientSideDataContext";

const ClientSideDataProvider: React.FunctionComponent = ({ children }) => {
  const courses = useObjectReducer<ICourseDoc>(getDocumentId, {});

  const value: ClientSideData = { courses };

  return (
    <ClientSideDataContext.Provider value={value}>
      {children}
    </ClientSideDataContext.Provider>
  );
};

export { ClientSideDataProvider };

const useClientSideData = () => React.useContext(ClientSideDataContext);

export default useClientSideData;
