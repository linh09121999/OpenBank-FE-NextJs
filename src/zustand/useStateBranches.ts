import { ResBranch } from '@/types/Branch/response';
import { create } from 'zustand'

interface StateBranches {
    resBranch: ResBranch[];
    setResBranch: React.Dispatch<React.SetStateAction<ResBranch[]>>
}

export const useStateBranch = create<StateBranches>((set) => ({
    resBranch: [],
    setResBranch: (value) =>
        set((state) => ({
            resBranch:
                typeof value === 'function' ? value(state.resBranch) : value
        }))
}))