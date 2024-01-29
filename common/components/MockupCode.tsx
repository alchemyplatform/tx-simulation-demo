import { DEFAULT_DATA_DISPLAY } from "@common/utils/constants";
import { ReactNode, useState } from "react";
import ReactModal from "react-modal";
import { GoScreenFull } from "react-icons/go";
import { MdOutlineClose } from "react-icons/md";
import { MdOutlineContentCopy } from "react-icons/md";
import { FaRegCircleCheck } from "react-icons/fa6";

const MockupCode = ({
  children,
  textToCopy,
}: {
  children: ReactNode;
  textToCopy: string | null;
}) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [fadeCopyButton, setFadeCopyButton] = useState(false);
  function openModal() {
    setIsOpen(true);
    setFadeCopyButton(false);
  }

  function closeModal() {
    setIsOpen(false);
    setFadeCopyButton(false);
  }
  function copy() {
    navigator.clipboard.writeText(textToCopy || "");
    setFadeCopyButton(true);
  }
  return (
    <div className="bg-gray-700 text-white w-full h-full rounded-xl overflow-auto">
      <div className="flex flex-col">
        <div className="pt-3 px-3 self-end">
          <button onClick={openModal}>
            <GoScreenFull />
          </button>
          <ReactModal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Code Full View"
            style={{
              content: {
                opacity: "100%",
                width: "60vw",
                height: "60vh",
                margin: "auto",
                color: "white",
                background: "#1e293b",
                overflowX: "clip",
                overflowY: "scroll",
              },
              overlay: {},
            }}
          >
            <div className="flex flex-col">
              <div className="flex flex-row justify-between">
                <button onClick={copy}>
                  <div className="flex flex-row items-center gap-2">
                    {fadeCopyButton ? (
                      <>
                        Copied <FaRegCircleCheck />
                      </>
                    ) : (
                      <>
                        Copy <MdOutlineContentCopy />
                      </>
                    )}
                  </div>
                </button>

                <button onClick={closeModal}>
                  <MdOutlineClose />
                </button>
              </div>
              <div>{children}</div>
            </div>
          </ReactModal>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

const MockupCodeComponent = ({
  children,
  center = false,
  textToCopy,
}: {
  children: ReactNode;
  center?: boolean;
  textToCopy: string | null;
}) => {
  if (center) {
    return (
      <MockupCode textToCopy={textToCopy}>
        <div className="w-full h-full items-center justify-center flex flex-col">
          {children}
        </div>
      </MockupCode>
    );
  }
  return (
    <MockupCode textToCopy={textToCopy}>
      <pre className="whitespace-pre-wrap break-words px-3">
        <br />
        {children}
      </pre>
    </MockupCode>
  );
};

export const DataDisplay = ({
  text,
  loading,
}: {
  text: string | null;
  loading?: boolean;
}) => {
  if (loading) {
    return (
      <MockupCodeComponent center textToCopy={text}>
        <span className="loading loading-ring loading-lg"></span>
      </MockupCodeComponent>
    );
  }
  return (
    <MockupCodeComponent textToCopy={text}>
      {text || DEFAULT_DATA_DISPLAY}
    </MockupCodeComponent>
  );
};
