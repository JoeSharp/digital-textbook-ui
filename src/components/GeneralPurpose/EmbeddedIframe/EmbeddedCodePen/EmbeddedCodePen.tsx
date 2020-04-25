import React from "react";
import { IEmbeddedCodePen } from "../../../../api/types";

interface Props {
  codePen: IEmbeddedCodePen;
}

const EmbeddedCodePen: React.FunctionComponent<Props> = ({
  codePen: { codePenId },
}) => (
  <React.Fragment>
    <p
      className="codepen"
      data-height="265"
      data-theme-id="light"
      data-default-tab="html,result"
      data-user="JoeSharp"
      data-slug-hash={codePenId}
      style={{
        height: "256px",
        boxSizing: "border-box",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "2px solid",
        margin: "1em 0",
        padding: "1em",
      }}
      data-pen-title="Hello World for Website"
    >
      <span>
        See the Pen{" "}
        <a href="https://codepen.io/JoeSharp/pen/rmRKmY">
          Hello World for Website
        </a>{" "}
        by Joe Sharp (<a href="https://codepen.io/JoeSharp">@JoeSharp</a>) on{" "}
        <a href="https://codepen.io">CodePen</a>.
      </span>
    </p>
    <script async src="https://static.codepen.io/assets/embed/ei.js"></script>
  </React.Fragment>
);

export default EmbeddedCodePen;
