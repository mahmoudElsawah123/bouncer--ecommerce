"use client";

import { Provider } from "react-redux";
import Store from "./Store";

type ProvidersProps = {
  children: React.ReactNode;
};

export function Providers({ children }: ProvidersProps) {
  return <Provider store={Store}>{children}</Provider>;
}
