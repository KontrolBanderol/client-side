"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";
import { Toaster } from "@/components/ui/sonner";
import store from "@/lib/redux/store";
import { Provider } from "react-redux";

export function Providers({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider {...props}>
      <Provider store={store}>
        {children} <Toaster />
      </Provider>
    </NextThemesProvider>
  );
}
