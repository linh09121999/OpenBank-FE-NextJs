import { ResUser_Current } from '@/types/User/response'
import { create } from 'zustand'

interface stateUser {
    resGetUserCurrent: ResUser_Current | undefined;
    setResGetUserCurrent: (data: ResUser_Current | undefined) => void
}

export const useStateUser = create<stateUser>((set) => ({
    resGetUserCurrent: undefined,
    setResGetUserCurrent: (data) => set({ resGetUserCurrent: data })
}))