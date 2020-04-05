import { ICourseDoc } from "../../../types";

import { loremIpsum } from "lorem-ipsum";

const TEST_COURSES: ICourseDoc[] = new Array(5).fill(undefined).map((_, i) => ({
  _id: i.toString(),
  name: loremIpsum({ count: 2, units: "words" }),
  description: loremIpsum({ count: 10, units: "words" }),
}));

export { TEST_COURSES };
