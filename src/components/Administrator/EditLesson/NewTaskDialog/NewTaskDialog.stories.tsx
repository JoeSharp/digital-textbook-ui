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

import NewCourseDialog, { useDialog } from "./NewTaskDialog";
import JsonDebug from "../../../../lib/JsonDebug";
import { useClientSideData } from "../../../../api";
import { lessons as testLessons } from "../../../../testing/data";

const lessonId = testLessons[0]._id;

let TestHarness: React.FunctionComponent = () => {
  const { showDialog, componentProps } = useDialog(lessonId);

  const {
    tasks: { itemsInList: allTasks },
  } = useClientSideData();

  const tasks = allTasks.filter((l) => l.lessonId === lessonId);

  return (
    <React.Fragment>
      <NewCourseDialog {...componentProps} />
      <button onClick={showDialog}>Add</button>
      <h4>Courses from API</h4>
      <JsonDebug value={{ tasks }} />
    </React.Fragment>
  );
};

storiesOf("Administrator/Edit Lesson/New Task Dialog", module).add(
  "basic",
  () => <TestHarness />
);
