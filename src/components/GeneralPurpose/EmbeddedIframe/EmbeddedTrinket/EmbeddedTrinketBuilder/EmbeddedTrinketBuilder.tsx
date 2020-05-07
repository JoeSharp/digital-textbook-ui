import React from "react";
import useForm from "../../../../../lib/useForm";
import {
  ITrinketRunOption,
  ITrinketOutputOption,
  IEmbeddedTrinket,
  IEmbeddedIframeSystem,
} from "../../../../../api/useEmbeddedIframeApi/types";
import { ControlledInput } from "../../../../../lib/useForm/types";
import TrinketRunOptionPicker from "../TrinketRunOptionPicker";
import TrinketOutputOptionPicker from "../TrinketOutputOptionPicker";
import useEmbeddedTrinketUrl from "../useEmbeddedTrinketUrl";

interface Props extends ControlledInput<IEmbeddedTrinket> {}

const DEFAULT_TRINKET: IEmbeddedTrinket = {
  system: IEmbeddedIframeSystem.Trinket,
  trinketId: "AABBCCDD",
  runOption: ITrinketRunOption.either,
  outputOption: ITrinketOutputOption.codeAndOutputSideBySide,
  showInstructions: false,
  autoRun: false,
};

const EmbeddedTrinketBuilder: React.FunctionComponent<Props> = ({
  value,
  onChange,
}) => {
  const initialValues = React.useMemo(
    () => ({ ...DEFAULT_TRINKET, ...value }),
    [value]
  );

  const { useCheckboxInput, useTextInput, useControlledInputProps } = useForm<
    IEmbeddedTrinket
  >({
    initialValues,
    onChange,
  });

  const trinketIdProps = useTextInput("trinketId");
  const runOptionProps = useControlledInputProps<ITrinketRunOption>(
    "runOption"
  );
  const outputOptionProps = useControlledInputProps<ITrinketOutputOption>(
    "outputOption"
  );
  const showInstructionProps = useCheckboxInput("showInstructions");
  const autoRunProps = useCheckboxInput("autoRun");

  const trinketSrc = useEmbeddedTrinketUrl(value);

  return (
    <form>
      <div className="form-group">
        <label>Trinket ID</label>
        <input className="form-control" {...trinketIdProps} />
      </div>
      <div className="form-group">
        <label>Run Option</label>
        <TrinketRunOptionPicker {...runOptionProps} />
      </div>
      <div className="form-group">
        <label>Output Option</label>
        <TrinketOutputOptionPicker {...outputOptionProps} />
      </div>
      <div className="form-group">
        <label>Show Instructions</label>
        <input {...showInstructionProps} />
      </div>
      <div className="form-group">
        <label>Auto Run</label>
        <input {...autoRunProps} />
      </div>
      <div>Embed URL: {trinketSrc}</div>
    </form>
  );
};

export default EmbeddedTrinketBuilder;
