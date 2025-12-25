import { FirehoseTransactions } from "@/types/Transaction/response";
import { create } from "zustand";

interface StateTransaction {
    resTransactionAccountCore: FirehoseTransactions[]
    setResTransactionAccountCore: React.Dispatch<React.SetStateAction<FirehoseTransactions[]>>
}

export const useStateTransaction = create<StateTransaction>((set) => ({
    resTransactionAccountCore: [],
    setResTransactionAccountCore: (value) =>
        set((state) => ({
            resTransactionAccountCore:
                typeof value === 'function' ? value(state.resTransactionAccountCore) : value
        }))
}))