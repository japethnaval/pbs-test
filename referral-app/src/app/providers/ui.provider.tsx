"use client";

import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

export type Referrals = {
  id: number;
  given_name: string;
  surname: string;
  email: string;
  phone: string;
  home_address: string;
  state: string;
  suburb: string;
  postcode: string;
  country: string;
};

export interface UIContextProps {
  isFormLoading?: boolean;
  modalType?: string;
  referrals?: Referrals[];
  setReferrals: Dispatch<SetStateAction<Referrals[]>>;
  setIsFormLoading: Dispatch<SetStateAction<boolean>>;
  setModalType: Dispatch<SetStateAction<string>>;
}

export const UIContext = createContext<UIContextProps>({} as UIContextProps);

export const UIContextProvider = ({ children }: { children: ReactNode }) => {
  const [referrals, setReferrals] = useState<Referrals[]>([]);
  const [modalType, setModalType] = useState<string>("");
  const [isFormLoading, setIsFormLoading] = useState<boolean>(false);

  return (
    <UIContext.Provider
      value={{
        setModalType,
        modalType,
        setIsFormLoading,
        isFormLoading,
        setReferrals,
        referrals,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};
