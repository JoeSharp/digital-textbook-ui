import React from "react";
import fetchMock from "fetch-mock";
import { match, MatchFunction } from "path-to-regexp";

import { IWorkDoc, IWork, WorkType } from "../../api/useMyWorkApi/types";
import useListReducer from "../../lib/useListReducer";
import { MockServer } from "./mockServerUtils";
import { createDocument } from "../data/testDataUtils";

const resource = "/myWork";
// const resourceUrl = `${process.env.REACT_APP_SERVICE_BASE_URL}${resource}`;
const resourceUrlWithWorkId = `express:${resource}/:workType/:workId`;

interface KeyWorkIds {
  workType: WorkType;
  workId: string;
}
const matchWorkIds: MatchFunction<KeyWorkIds> = match<KeyWorkIds>(
  `${resource}/:workType/:workId`,
  {
    decode: decodeURIComponent,
  }
);

export function getWorkTypeAndId(requestUrl: string): KeyWorkIds {
  const result = matchWorkIds(
    requestUrl.replace(process.env.REACT_APP_SERVICE_BASE_URL, "")
  );
  if (result) {
    return {
      workType: result.params["workType"],
      workId: result.params["workId"],
    };
  } else {
    throw new Error("Could not find the ID in this URL");
  }
}

export const useMockServer = (): MockServer => {
  const { items: myWork, addItem } = useListReducer<IWorkDoc>((c) => c._id, []);

  const setup = React.useCallback(() => {
    fetchMock.get(resourceUrlWithWorkId, (url) => {
      const { workId, workType } = getWorkTypeAndId(url);
      const found = myWork.find((c) => c.workId === workId);
      if (!!found) {
        return found;
      } else {
        return createDocument({
          workId,
          workType,
        });
      }
    });
    fetchMock.post(resourceUrlWithWorkId, (url, options) => {
      //   const id = getId(resource, url);
      const body = JSON.parse(options.body as string) as IWork;
      const work: IWorkDoc = createDocument(body);
      addItem(work);

      return work;
    });
  }, [myWork, addItem]);
  return { setup, data: myWork };
};

export default useMockServer;
