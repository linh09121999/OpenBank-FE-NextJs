import { create } from 'zustand'

interface State {
    loading: boolean;
    setLoading: (isCheck: boolean) => void;
}

export const useStateGeneral = create<State>((set) => ({
    loading: false,
    setLoading: (isCheck) => set({ loading: isCheck }),
}))