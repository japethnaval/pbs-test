"use client";
import { UIContext } from "@/app/providers/ui.provider";
import { useCallback, useContext, useEffect } from "react";
import { createPortal } from "react-dom";
import { ReferralFields } from "../referral-fields/referral-fields.component";

const Popup = ({ title }: { title: string }) => {
  const { modalType, setModalType } = useContext(UIContext);

  const handleClickOutside = useCallback(
    (e: MouseEvent) => {
      if ((e.target as HTMLElement).id === "popup-overlay") {
        setModalType("");
      }
    },
    [setModalType]
  );

  useEffect(() => {
    if (modalType === "create") {
      document.addEventListener("click", handleClickOutside);
    }
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [modalType, handleClickOutside]);

  if (modalType !== "create") return null;

  return createPortal(
    <div
      id="popup-overlay"
      className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50"
      role="dialog"
      aria-modal="true"
    >
      <div className="overflow-x-auto bg-white p-6 rounded-lg shadow-lg max-w-3xl w-full max-h-[90%]">
        <h2 className="text-3xl font-semibold mb-4">{title}</h2>
        <ReferralFields />
      </div>
    </div>,
    document.body
  );
};

export default Popup;
