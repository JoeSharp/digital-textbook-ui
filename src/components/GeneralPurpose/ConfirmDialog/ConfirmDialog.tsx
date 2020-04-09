/*
 * Copyright 2018 Crown Copyright
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import * as React from "react";
import Modal from "react-modal";

import customStyles from "../ModalDialog/customStyles";

interface NewProps<T> {
  getQuestion: () => string;
  getDetails?: (data: T) => string;
  onConfirm: (data: T) => void;
}

interface Props extends ReactModal.Props {
  question: string;
  details?: string;
  onConfirm: () => void;
  onCloseDialog: () => void;
}

const ConfirmDialog: React.FunctionComponent<Props> = ({
  question,
  details,
  onCloseDialog,
  onConfirm,
  ...rest
}) => {
  return (
    <Modal className={`themed-modal light`} {...rest} style={customStyles}>
      <div className="themed-modal__container">
        <header className="themed-modal__header">{question}</header>
        {details && <div className="themed-modal__content">{details}</div>}
        <div className="themed-modal__footer__actions">
          <button className="btn btn-primary" onClick={onCloseDialog}>
            Cancel
          </button>
          <button
            className="btn btn-danger"
            onClick={() => {
              onConfirm();
              onCloseDialog();
            }}
          >
            Confirm
          </button>
        </div>
      </div>
    </Modal>
  );
};

interface UseDialog<T> {
  /**
   * The owning component is ready to start a deletion process.
   * Calling this will open the dialog, and setup the UUIDs
   */
  showDialog: (data: T) => void;
  /**
   * These are the properties that the owning component can just give to the Dialog component
   * using destructing.
   */
  componentProps: Props;
}

/**
 * This is a React custom hook that sets up things required by the owning component.
 */
export const useDialog = <T extends {}>(props: NewProps<T>): UseDialog<T> => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [question, setQuestion] = React.useState<string>("No Question");
  const [details, setDetails] = React.useState<string | undefined>(undefined);
  const [data, setData] = React.useState<T>();

  const {
    onConfirm,
    getQuestion,
    getDetails = (): string | undefined => undefined,
  } = props;

  const _onConfirm = React.useCallback(() => {
    if (!!data) {
      onConfirm(data as T);
    }
  }, [onConfirm, data]);

  const _onCloseDialog = React.useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);

  const _showDialog = React.useCallback(
    (data: T) => {
      setData(data);
      setQuestion(getQuestion());
      setDetails(getDetails(data));
      setIsOpen(true);
    },
    [setData, setQuestion, getQuestion, setDetails, getDetails, setIsOpen]
  );

  return {
    componentProps: {
      question,
      details,
      isOpen,
      onConfirm: _onConfirm,
      onCloseDialog: _onCloseDialog,
    },
    showDialog: _showDialog,
  };
};

export default ConfirmDialog;
