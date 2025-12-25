import { ResCustomerBy } from '@/types/Customer/response'
import React from 'react';
import { create } from 'zustand'

interface StateCustomer {
    resCustomerForCurrentUser: ResCustomerBy[];
    setResCustomerForCurrentUser: React.Dispatch<React.SetStateAction<ResCustomerBy[]>>
}

export const useStateCustomer = create<StateCustomer>((set) => ({
    resCustomerForCurrentUser: [],
    setResCustomerForCurrentUser: (value) =>
        set((state) => ({
            resCustomerForCurrentUser:
                typeof value === 'function' ? value(state.resCustomerForCurrentUser) : value
        }))
}))