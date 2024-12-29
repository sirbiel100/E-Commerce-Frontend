"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type AlertType = {
  display: boolean;
  type: "success" | "error" | null;
  message: string | null;
};

type AlertContextType = {
  alert: AlertType;
  triggerAlert: (type: "success" | "error", message: string) => void;
  closeAlert: () => void;
};

const AlertContext = createContext<AlertContextType | undefined>(undefined);

export function AlertProvider({ children }: { children: ReactNode }) {
  const [alert, setAlert] = useState<AlertType>({
    display: false,
    type: null,
    message: null,
  });

  const triggerAlert = (type: "success" | "error", message: string) => {
    setAlert({ display: true, type, message });

    // Fecha o alerta automaticamente após 3 segundos
    setTimeout(() => {
      setAlert({ display: false, type: null, message: null });
    }, 3 * 1000);
  };

  const closeAlert = () => {
    setAlert({ display: false, type: null, message: null });
  };

  return (
    <AlertContext.Provider value={{ alert, triggerAlert, closeAlert }}>
      {children}
    </AlertContext.Provider>
  );
}

export function useAlertContext() {
  const context = useContext(AlertContext);
  if (!context) {
    throw new Error("useAlertContext must be used within an AlertProvider");
  }
  return context;
}
