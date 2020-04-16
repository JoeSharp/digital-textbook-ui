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

import React from "react";
import { storiesOf } from "@storybook/react";

import NewLessonDialog, { useDialog } from "./NewLessonDialog";
import JsonDebug from "../../../../lib/JsonDebug";
import { courses as testCourses } from "../../../../testing/data";
import { useClientSideData } from "../../../../api";

const courseId = testCourses[0]._id;

let TestHarness: React.FunctionComponent = () => {
  const { showDialog, componentProps } = useDialog(courseId);
  const {
    lessons: { itemsInList: allLessons },
  } = useClientSideData();

  const lessons = allLessons.filter((l) => l.courseId === courseId);

  return (
    <React.Fragment>
      <NewLessonDialog {...componentProps} />
      <button onClick={showDialog}>Add</button>
      <h4>Courses from API</h4>
      <JsonDebug value={{ lessons }} />
    </React.Fragment>
  );
};

storiesOf("Administrator/Edit Course/New Lesson Dialog", module).add(
  "basic",
  () => <TestHarness />
);
