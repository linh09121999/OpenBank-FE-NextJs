import { ResTransactionRequest } from "@/types/Transaction-Request/response";
import React from "react";
import { create } from "zustand";

interface StateTransactionRequest {
    resTransactionRequest: ResTransactionRequest[]
    setResTransactionRequest: React.Dispatch<React.SetStateAction<ResTransactionRequest[]>>
}

export const useStateTransactionRequest = create<StateTransactionRequest>((set) => ({
    resTransactionRequest: [],
    setResTransactionRequest: (value) =>
        set((state) => ({
            resTransactionRequest:
                typeof value === 'function' ? value(state.resTransactionRequest) : value
        }))
}))