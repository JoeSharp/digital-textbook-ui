import React from "react";
import { storiesOf } from "@storybook/react";
import Section from "./Section";
import { loremIpsum } from "lorem-ipsum";
import useCounter from "../../../../lib/useCounter";
import JsonDebug from "../../../../lib/JsonDebug";

const TestHarness: React.FunctionComponent = () => {
  const { value, increment } = useCounter();
  const [title, setTitle] = React.useState<string>("");
  const [content, setContent] = React.useState<string>("");

  React.useEffect(() => {
    setTitle(loremIpsum({ units: "words", count: 1 }));
    setContent(loremIpsum({ units: "paragraph", count: 3 }));
  }, [value, setTitle, setContent]);

  return (
    <Section title={title} isComplete={true} onComplete={increment}>
      <p>{content}</p>
      <JsonDebug value={{ value }} />
    </Section>
  );
};

storiesOf("Student/PRIMM/Sections", module).add("basic", () => <TestHarness />);
