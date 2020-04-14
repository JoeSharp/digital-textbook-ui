import { v4 as uuid } from "uuid";

import { IMongoDocument } from "../../types";

export const createDocument = <T extends {}>(input: T): T & IMongoDocument => {
  return {
    _id: uuid(),
    ...input,
  };
};
