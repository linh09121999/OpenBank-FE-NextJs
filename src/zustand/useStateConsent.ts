import { MyConsentsInfo } from '@/types/Consent/response'
import { create } from 'zustand'

interface stateConsent {
    resMyConsentInfo: MyConsentsInfo[];
    setResMyConsentInfo: React.Dispatch<React.SetStateAction<MyConsentsInfo[]>>
}

export const useStateConsent = create<stateConsent>((set) => ({
    resMyConsentInfo: [],
    setResMyConsentInfo: (value) =>
        set((state) => ({
            resMyConsentInfo:
                typeof value === 'function' ? value(state.resMyConsentInfo) : value
        }))
}))