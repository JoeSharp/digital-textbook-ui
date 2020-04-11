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
import { Route, RouteComponentProps, Switch } from "react-router";
import CoursesPage from "../../Courses";
import EditCourse from "../../Courses/EditCourse";
import useAppNavigation from "../../../lib/useAppNavigation";

const Routes: React.FunctionComponent = () => {
  const { urlGenerator } = useAppNavigation();
  return (
    <Switch>
      <Route
        exact
        path={urlGenerator.goToAdminCourses()}
        render={() => <CoursesPage />}
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

      {/* Default route */}
      <Route render={() => <div>Path Not Found</div>} />
    </Switch>
  );
};

export default Routes;
