"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { createContext, ReactNode, useMemo } from "react";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { z } from "zod";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type GenericObject = Record<string, any>;

export type FormModes =
  | "all"
  | "onBlur"
  | "onChange"
  | "onSubmit"
  | "onTouched";

export type HookFormContextProps = {
  onSubmit: SubmitHandler<FieldValues>;
};
export const HookFormContext = createContext<HookFormContextProps>(
  {} as HookFormContextProps
);

export const HookFormProvider = ({
  children,
  schema,
  mode = "onSubmit",
  defaultValues,
  onSubmit,
  id,
}: {
  mode?: FormModes;
  id?: string;
  defaultValues?: GenericObject;
  schema?: z.ZodObject<GenericObject>;
  children: ReactNode;
  onSubmit: SubmitHandler<FieldValues>;
}) => {
  const memoizedDefaultValues = useMemo(
    () => defaultValues ?? {},
    [defaultValues]
  );

  const methods = useForm({
    defaultValues: memoizedDefaultValues,
    mode,
    reValidateMode: "onSubmit",
    resolver: schema ? zodResolver(schema) : undefined,
  });

  return (
    <FormProvider {...methods}>
      <form id={id} onSubmit={methods.handleSubmit(onSubmit)} noValidate>
        {children}
      </form>
    </FormProvider>
  );
};
