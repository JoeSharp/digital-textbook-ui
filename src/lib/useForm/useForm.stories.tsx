import * as React from "react";
import { storiesOf } from "@storybook/react";
import useForm from ".";
import JsonDebug from "../JsonDebug";

interface SimpleInputsFormValues {
  firstName: string;
  surname: string;
}

const SIMPLE_INITIAL_VALUES: SimpleInputsFormValues = {
  firstName: "John",
  surname: "Wick"
};

const SimpleInputsTestHarness: React.FunctionComponent = () => {
  const [validatedValue, onValidate] = React.useState<object>({});
  const { useTextInput, value } = useForm<SimpleInputsFormValues>({
    initialValues: SIMPLE_INITIAL_VALUES,
    onValidate
  });
  const firstNameProps = useTextInput("firstName");
  const surnameProps = useTextInput("surname");

  return (
    <form>
      <label>First Name</label>
      <input {...firstNameProps} />
      <label>Surname</label>
      <input {...surnameProps} />
      <JsonDebug value={{ value, validatedValue }} />
    </form>
  );
};

storiesOf("lib/useForm", module).add("simpleInputs", () => (
  <SimpleInputsTestHarness />
));
