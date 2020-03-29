import { match, MatchFunction } from "path-to-regexp";

export interface MockServer {
  setup: () => void;
  data: any;
}

interface KeyId {
  id: string;
}

const ID_URLS: { [s: string]: MatchFunction<KeyId> } = {};

export function getId(resourceUrl: string, requestUrl: string): string {
  let matchId: MatchFunction<KeyId> = ID_URLS[resourceUrl];
  if (!matchId) {
    matchId = match<KeyId>(`/courses/:id`, {
      decode: decodeURIComponent
    });
    ID_URLS[resourceUrl] = matchId;
  }

  const result = matchId(
    requestUrl.replace(process.env.REACT_APP_SERVICE_BASE_URL, "")
  );
  if (result) {
    return result.params["id"];
  } else {
    throw new Error("Could not find the ID in this URL");
  }
}
