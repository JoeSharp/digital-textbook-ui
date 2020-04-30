import React from "react";
import { storiesOf } from "@storybook/react";
import { loremIpsum } from "lorem-ipsum";

import useProgress from "./useProgress";

interface TestSection {
  title: string;
  content: string;
}

const makeSection = (): TestSection => ({
  title: loremIpsum({ units: "words", count: 1 }),
  content: loremIpsum({ units: "paragraph", count: 3 }),
});

const sections: TestSection[] = Array(5).fill(null).map(makeSection);

const TestHarness: React.FunctionComponent = () => {
  const {
    canGoNext,
    onNext,
    canGoPrevious,
    onPrevious,
    onReset,
    current: { title, content },
  } = useProgress({
    sections,
  });

  return (
    <div>
      <h1>{title}</h1>
      <p>{content}</p>
      <button onClick={onReset}>Reset</button>
      {canGoPrevious && <button onClick={onPrevious}>Previous</button>}
      {canGoNext && <button onClick={onNext}>Next</button>}
    </div>
  );
};

storiesOf("lib/useProgress", module).add("basic", () => <TestHarness />);
