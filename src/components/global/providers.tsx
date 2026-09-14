"use client";

import { Toaster } from "@/components/ui/sonner";
import { makeStore, store } from "@/lib/store";
import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { Spinner } from "../ui/spinner";

const Providers = ({ children }: { children: React.ReactNode }) => {
  const { store, persistor } = makeStore();
  return (
    <>
      <Provider store={store}>
        <PersistGate
          loading={
            <div className="flex items-center justify-center h-96">
              <Spinner className="w-10 border-2 border-gray-300 border-r-gray-600" />
            </div>
          }
          persistor={persistor}
        >
          <Toaster />
          {children}
        </PersistGate>
      </Provider>
    </>
  );
};

export default Providers;
