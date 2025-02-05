import { createReferral, fetchReferrals } from "@/@api/referrals";
import { Referrals, UIContext } from "@/app/providers/ui.provider";
import { useCallback, useContext } from "react";
import { useFormContext } from "react-hook-form";
import { toast } from "react-toastify";
import { CreateReferralFormData } from "./create-referral.schema";

export const ReferralActions = () => {
  const { setIsFormLoading, setModalType, isFormLoading, setReferrals } =
    useContext(UIContext);
  const { reset, handleSubmit } = useFormContext();

  const onSubmitClick = useCallback(() => {
    handleSubmit(async (data) => {
      setIsFormLoading(true);
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        await createReferral(data as CreateReferralFormData);

        const referrals = await fetchReferrals();
        setReferrals(referrals.data as Referrals[]);
      } catch (error) {
        console.error(error);
      } finally {
        toast.success(`${data.given_name} has been created successfully`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });

        reset();
        setModalType("");
        setIsFormLoading(false);
      }
    })();
  }, [handleSubmit, reset, setIsFormLoading, setModalType, setReferrals]);

  return (
    <div className="flex flex-col md:flex-row lg:flex-row gap-6">
      <button
        disabled={isFormLoading}
        className={`bg-white-400 border-solid border border-gray-300 text-gray-400 rounded-sm py-2 px-4 w-full h-14 font-semibold shadow-md ${
          isFormLoading
            ? "opacity-50 cursor-not-allowed pointer-events-none"
            : ""
        }`}
      >
        UPLOAD AVATAR
      </button>
      <button
        disabled={isFormLoading}
        onClick={onSubmitClick}
        className={`bg-green-400 text-white rounded-sm py-2 px-4 w-full font-semibold shadow-md  ${
          isFormLoading
            ? "opacity-50 cursor-not-allowed pointer-events-none"
            : ""
        }`}
      >
        CREATE REFERRAL
      </button>
    </div>
  );
};
