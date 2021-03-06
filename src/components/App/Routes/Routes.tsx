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
import { Route, RouteComponentProps, Switch } from "react-router";
import ManageCourses from "../../Administrator/ManageCourses";
import EditCourse from "../../Administrator/EditCourse";
import CourseSelection from "../../Student/CourseSelection";
import useAppNavigation from "../../../lib/useAppNavigation";
import { RoleSelectionWithNav } from "../RoleSelection";
import StudyCourse from "../../Student/StudyCourse";
import EditLesson from "../../Administrator/EditLesson";
import EditTask from "../../Administrator/EditTask";
import PrimmChooser from "../../Student/PRIMM/PrimmChooser";
import PrimmChallenge from "../../Student/PRIMM/PrimmChallenge";

const Routes: React.FunctionComponent = () => {
  const { urlGenerator } = useAppNavigation();
  return (
    <Switch>
      <Route
        exact
        path={urlGenerator.goToRoleSelection()}
        render={() => <RoleSelectionWithNav />}
      />
      <Route
        exact
        path={urlGenerator.goToAdminCourses()}
        render={() => <ManageCourses />}
      />
      <Route
        exact
        path={urlGenerator.goToAdminCourse(undefined)}
        render={({
          match: {
            params: { courseId },
          },
        }: RouteComponentProps<any>) => <EditCourse courseId={courseId} />}
      />
      <Route
        exact
        path={urlGenerator.goToEditLesson(undefined)}
        render={({
          match: {
            params: { lessonId },
          },
        }: RouteComponentProps<any>) => <EditLesson lessonId={lessonId} />}
      />
      <Route
        exact
        path={urlGenerator.goToEditTask(undefined)}
        render={({
          match: {
            params: { taskId },
          },
        }: RouteComponentProps<any>) => <EditTask taskId={taskId} />}
      />
      <Route
        exact
        path={urlGenerator.goToStudyCourses()}
        render={() => <CourseSelection />}
      />
      <Route
        exact
        path={urlGenerator.goToStudyCourse(undefined)}
        render={({
          match: {
            params: { courseId },
          },
        }: RouteComponentProps<any>) => <StudyCourse courseId={courseId} />}
      />

      <Route
        exact
        path={urlGenerator.goToChoosePrimmChallenges()}
        render={() => <PrimmChooser />}
      />
      <Route
        exact
        path={urlGenerator.goToAttemptPrimmChallenge(undefined)}
        render={({
          match: {
            params: { challengeId },
          },
        }: RouteComponentProps<any>) => (
          <PrimmChallenge challengeId={challengeId} />
        )}
      />

      {/* Default route */}
      <Route render={() => <div>Path Not Found</div>} />
    </Switch>
  );
};

export default Routes;
