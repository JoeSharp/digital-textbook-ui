import React from "react";
import { storiesOf } from "@storybook/react";
import useForm from "../../../../../lib/useForm";
import JsonDebug from "../../../../../lib/JsonDebug";
import TrinketRunOptionPicker from "./TrinketRunOptionPicker";
import { ITrinketRunOption } from "../../../../../api/useEmbeddedIframeApi/types";

interface FormValues {
  runOption: ITrinketRunOption;
}

const TestHarness: React.FunctionComponent = () => {
  const { useControlledInputProps, value } = useForm<FormValues>({});

  const runOptionProps = useControlledInputProps<ITrinketRunOption>(
    "runOption"
  );

  return (
    <div>
      <TrinketRunOptionPicker {...runOptionProps} />
      <JsonDebug value={value} />
    </div>
  );
};

storiesOf(
  "General Purpose/Embedded Iframe/Trinket/Run Option Picker",
  module
).add("basic", () => <TestHarness />);
