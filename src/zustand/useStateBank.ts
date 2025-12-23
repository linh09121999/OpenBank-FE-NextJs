import { ResBank } from '@/types/Bank/response'
import { create } from 'zustand'

interface stateBank {
    resBank: ResBank[]
    setResBank: React.Dispatch<React.SetStateAction<ResBank[]>>
}

export const useStateBank = create<stateBank>((set) => ({
    resBank: [],
    setResBank: (value) =>
        set((state) => ({
            resBank:
                typeof value === 'function' ? value(state.resBank) : value
        })),
}))