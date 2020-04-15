import React from "react";
import { storiesOf } from "@storybook/react";
import RoleSelection from "./RoleSelection";
import { ApplicationRoleType } from "./types";
import JsonDebug from "../../../lib/JsonDebug";

const TestHarness: React.FunctionComponent = () => {
  const [roleType, setRoleType] = React.useState<ApplicationRoleType>();

  return (
    <div>
      <RoleSelection onRoleSelection={setRoleType} />
      <JsonDebug value={{ roleType }} />
    </div>
  );
};

storiesOf("App/Role Selection", module).add("Basic", () => <TestHarness />);
