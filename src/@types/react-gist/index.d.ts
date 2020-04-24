declare module "react-gist" {
  import * as React from "react";

  interface Props {
    id: string;
    file?: string;
  }

  class Gist extends React.Component<Props, any> {}

  export default Gist;
}
