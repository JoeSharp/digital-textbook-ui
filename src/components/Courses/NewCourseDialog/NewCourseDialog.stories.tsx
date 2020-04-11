/*
 * Copyright 2018 Crown Copyright
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import * as React from "react";
import { storiesOf } from "@storybook/react";

import NewCourseDialog, { useDialog } from "./NewCourseDialog";
import { useCoursesApi } from "../../../api";

let TestHarness: React.FunctionComponent = () => {
  const { courses, refreshCourses } = useCoursesApi();

  const { showDialog, componentProps } = useDialog();

  componentProps.onAfterClose = refreshCourses;

  return (
    <React.Fragment>
      <NewCourseDialog {...componentProps} />
      <button onClick={showDialog}>Add</button>
      <h4>Courses from API</h4>
      <ul>
        {courses.map((c) => (
          <li key={c._id}>{JSON.stringify(c)}</li>
        ))}
      </ul>
    </React.Fragment>
  );
};

storiesOf("Courses/New Course Dialog", module).add("basic", () => (
  <TestHarness />
));
