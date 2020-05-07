import React from "react";
import { storiesOf } from "@storybook/react";
import useForm from "../../../../../lib/useForm";
import JsonDebug from "../../../../../lib/JsonDebug";
import TrinketOutputOptionPicker from "./TrinketOutputOptionPicker";
import { ITrinketOutputOption } from "../../../../../api/useEmbeddedIframeApi/types";

interface FormValues {
  runOption: ITrinketOutputOption;
}

const TestHarness: React.FunctionComponent = () => {
  const { useControlledInputProps, value } = useForm<FormValues>({});

  const outputOptionProps = useControlledInputProps<ITrinketOutputOption>(
    "runOption"
  );

  return (
    <div>
      <TrinketOutputOptionPicker {...outputOptionProps} />
      <JsonDebug value={value} />
    </div>
  );
};

storiesOf(
  "General Purpose/Embedded Iframe/Trinket/Output Option Picker",
  module
).add("basic", () => <TestHarness />);
