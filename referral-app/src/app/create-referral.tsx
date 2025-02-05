"use client";
import { fetchReferrals } from "@/@api/referrals";
import { useCallback, useContext, useEffect } from "react";
import { UIContext } from "./providers/ui.provider";

export const CreateReferral = () => {
  const { setModalType, setReferrals } = useContext(UIContext);

  const handleOpenPopup = useCallback(
    () => setModalType("create"),
    [setModalType]
  );

  useEffect(() => {
    const loadReferrals = async () => {
      const response = await fetchReferrals();
      if (response) {
        setReferrals(response.data);
      }
    };

    loadReferrals();
  }, []);

  return (
    <div className="flex justify-end items-center mb-4">
      <button
        onClick={handleOpenPopup}
        className="bg-gray-200 hover:bg-gray-400 text-black py-2 px-4 rounded"
      >
        Create Referral
      </button>
    </div>
  );
};
