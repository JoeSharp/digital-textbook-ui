import React from "react";
import { IEmbeddedCodeDotOrg } from "../../../../api/types";

interface Props {
  project: IEmbeddedCodeDotOrg;
}

const EmbeddedCodeDotOrg: React.FunctionComponent<Props> = ({
  project: { projectId },
}) => (
  <iframe
    title="Code.org Project"
    src={`https://codeprojects.org/${projectId}`}
  ></iframe>
);

export default EmbeddedCodeDotOrg;
