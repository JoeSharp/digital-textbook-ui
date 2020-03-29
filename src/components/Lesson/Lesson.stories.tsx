import * as React from "react";
import { storiesOf } from "@storybook/react";

import Lesson from "./Lesson";

storiesOf("Lesson", module).add("Basic", () => <Lesson lessonId="1234" />);
