import { ResAccountBalancesbyBANK_ID, ResBankAccountBalance } from '@/types/Account/response'
import React from 'react'
import { create } from 'zustand'

interface stateAccount {
    resAccountBlancesByBankID: ResAccountBalancesbyBANK_ID[];
    setResAccountBlancesByBankID: React.Dispatch<React.SetStateAction<ResAccountBalancesbyBANK_ID[]>>;
}

export const useStateAccount = create<stateAccount>((set) => ({
    resAccountBlancesByBankID: [],
    setResAccountBlancesByBankID: (value) =>
        set((state) => ({
            resAccountBlancesByBankID:
                typeof value === 'function' ? value(state.resAccountBlancesByBankID) : value
        })),
}))