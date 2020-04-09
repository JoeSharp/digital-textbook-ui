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

import ModalDialog from "./ModalDialog";

const TestHarness: React.FunctionComponent = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  return (
    <React.Fragment>
      <ModalDialog
        isOpen={isOpen}
        header={<h3>This is the header</h3>}
        content={<div>Maybe put something helpful in here</div>}
        actions={
          <React.Fragment>
            <button
              className="btn btn-primary"
              onClick={() => setIsOpen(false)}
            >
              Nothing
            </button>
            <button
              className="btn btn-primary"
              onClick={() => setIsOpen(false)}
            >
              Something
            </button>
          </React.Fragment>
        }
        onRequestClose={() => setIsOpen(false)}
      />
      <button className="btn btn-primary" onClick={() => setIsOpen(!isOpen)}>
        Open
      </button>
    </React.Fragment>
  );
};

storiesOf("General Purpose/Modal Dialog", module).add("basic", () => (
  <TestHarness />
));
