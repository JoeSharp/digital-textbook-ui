import React from "react";
import { storiesOf } from "@storybook/react";
import { loremIpsum } from "lorem-ipsum";
import Section from "./Section";
import useProgress from "../../../../lib/useProgress";
import useObjectReducer from "../../../../lib/useObjectReducer";

interface TestSection {
  title: string;
  content: string;
}

const makeSection = (): TestSection => ({
  title: loremIpsum({ units: "words", count: 1 }),
  content: loremIpsum({ units: "paragraph", count: 3 }),
});

const sections: TestSection[] = Array(5)
  .fill(null)
  .map(() => makeSection());

const TestHarness: React.FunctionComponent = () => {
  const {
    current: { title, content },
    ...rest
  } = useProgress({
    sections,
  });
  const studentResponseControlProps = useObjectReducer({});

  return (
    <Section
      title={title}
      {...rest}
      studentResponseControlProps={studentResponseControlProps}
    >
      {content}
    </Section>
  );
};

storiesOf("Student/PRIMM/Section", module).add("basic", () => <TestHarness />);
