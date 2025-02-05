import { CreateReferralFormData } from "@/app/components/referral-fields/create-referral.schema";

export const fetchReferrals = async () => {
  try {
    const response = await fetch(process.env.NEXT_PUBLIC_REFERRALS_API!);

    if (!response.ok) {
      throw Error("Something went wrong");
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error fetching referrals:", error);
    throw Error("Something went wrong");
  }
};

export const createReferral = async (data: CreateReferralFormData) => {
  try {
    const response = await fetch(process.env.NEXT_PUBLIC_REFERRALS_API!, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw Error("Something went wrong");
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error fetching referrals:", error);
    throw Error("Something went wrong");
  }
};
