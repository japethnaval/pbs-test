"use client";
import { HookFormProvider } from "@/app/providers/hook-form.provider";
import { useCallback } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { Input } from "../@form/input.component";
import {
  CreateReferralFormData,
  CreateReferralSchema,
} from "./create-referral.schema";
import { ReferralActions } from "./referral-actions";

export const ReferralFields = () => {
  const onSubmit = useCallback(async () => {}, []);

  return (
    <HookFormProvider
      id="referrals"
      mode="onSubmit"
      onSubmit={onSubmit as SubmitHandler<FieldValues>}
      defaultValues={
        {
          given_name: "",
          surname: "",
          email: "",
          phone: "",
          home_address: "",
          street: "",
          state: "",
          suburb: "",
          postcode: "",
          country: "",
        } as CreateReferralFormData
      }
      schema={CreateReferralSchema}
    >
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-5">
          <div>
            <p className="mb-2 text-md text-gray-400 font-semibold">
              PERSONAL DETAILS
            </p>
            <hr />
          </div>
          <div className="flex flex-col md:flex-row lg:flex-row gap-6">
            <Input
              name="given_name"
              type="text"
              label="GIVEN NAME"
              placeholder="Given name"
            />
            <Input
              name="surname"
              type="text"
              label="SURNAME"
              placeholder="Surname"
            />
          </div>
          <div className="flex flex-col md:flex-row lg:flex-row gap-6">
            <Input name="phone" type="text" label="PHONE" placeholder="Phone" />
            <Input name="email" type="text" label="EMAIL" placeholder="Email" />
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <div>
            <p className="mb-2 text-md text-gray-400 font-semibold">ADDRESS</p>
            <hr />
          </div>
          <div className="flex flex-col md:flex-row lg:flex-row gap-6">
            <Input
              name="home_address"
              type="text"
              label="HOME ADDRESS"
              placeholder="Home address"
            />
            <Input
              name="street"
              type="text"
              label="STREET"
              placeholder="Street"
            />
          </div>
          <div className="flex flex-col md:flex-row lg:flex-row gap-6">
            <Input
              name="suburb"
              type="text"
              label="SUBURB"
              placeholder="Suburb"
            />
            <Input name="state" type="text" label="STATE" placeholder="State" />
          </div>
          <div className="flex flex-col md:flex-row lg:flex-row gap-6">
            <Input
              name="postcode"
              type="text"
              label="POSTCODE"
              placeholder="Postcode"
            />
            <Input
              name="country"
              type="text"
              label="COUNTRY"
              placeholder="Country"
            />
          </div>
        </div>

        <ReferralActions />
      </div>
    </HookFormProvider>
  );
};
