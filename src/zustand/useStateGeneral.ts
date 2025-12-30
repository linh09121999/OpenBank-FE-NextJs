import { BankViewItem, GroupedBankAccount, Page } from '@/types/type';
import { create } from 'zustand'
import {
    MdOutlineDashboard,
    MdOutlineManageAccounts,
    MdWebhook
} from "react-icons/md";
import {
    IoSettingsOutline,
    IoAccessibilityOutline
} from "react-icons/io5";
import { BiLogOut } from "react-icons/bi";
import { PiGitBranch } from "react-icons/pi";
import {
    GrAtm,
    GrSystem
} from "react-icons/gr";
import { RiBankLine, RiCustomerService2Line } from "react-icons/ri";
import {
    FaRegAddressCard,
    // FaRegUser
} from "react-icons/fa";
import {
    FaUsersViewfinder,
    FaRegUser
} from "react-icons/fa6";
import { GrTransaction } from "react-icons/gr";
import {
    LuGitPullRequestDraft,
    LuPackage2,
    LuWarehouse
} from "react-icons/lu";
import { BsJournalCheck } from "react-icons/bs";
import { TbApi } from "react-icons/tb";
import { GoFileDirectory } from "react-icons/go";

interface State {
    loading: boolean;
    setLoading: (isCheck: boolean) => void;
    sidebarOpen: boolean;
    setSidbarOpen: (isCheck: boolean) => void;
    navItems: Page[];
    bottomNavItems: Page[];
    activeSection: string;
    setActiveSection: (section: string) => void;
    isDark: boolean;
    setIsDark: (isCheck: boolean) => void;
    bankViewItems: GroupedBankAccount[];
    setBankViewItems: React.Dispatch<React.SetStateAction<GroupedBankAccount[]>>

}

export const useStateGeneral = create<State>((set, get) => ({
    loading: false,
    setLoading: (isCheck) => set({ loading: isCheck }),
    sidebarOpen: false,
    setSidbarOpen: (isCheck) => set({ sidebarOpen: isCheck }),
    navItems: [
        {
            id: "overview",
            label: 'Dashboard',
            path: '/',
            icon: MdOutlineDashboard
        },
        {
            id: 'banks-accounts',
            label: 'Banks & Accounts',
            path: '/banks-accounts',
            badge: 'New',
            icon: RiBankLine
        },
        {
            id: 'branches',
            label: 'Branches',
            path: '/branches',
            icon: PiGitBranch
        },
        {
            id: 'transactions',
            label: 'Transactions',
            path: '/transactions',
            icon: GrTransaction
        },
        {
            id: 'transaction-requests',
            label: 'Transaction Requests',
            path: '/transaction-requests',
            icon: LuGitPullRequestDraft
        },
        {
            id: 'customers',
            label: 'Customers',
            path: '/customers',
            icon: RiCustomerService2Line
        },
        {
            id: 'products',
            label: 'Products',
            path: '/products',
            icon: LuPackage2
        },
        {
            id: 'cards',
            label: 'Cards',
            path: '/cards',
            icon: FaRegAddressCard
        },
        {
            id: 'atms',
            label: 'ATMs',
            path: '/atms',
            icon: GrAtm
        },
        {
            id: 'consents',
            label: 'Consents',
            path: '/consents',
            icon: BsJournalCheck
        },
    ],
    bottomNavItems: [
        {
            id: "settings",
            label: 'Settings',
            path: '/settings',
            icon: IoSettingsOutline
        },
        {
            id: "logout",
            label: 'Logout',
            icon: BiLogOut
        }
    ],
    activeSection: 'overview',
    setActiveSection: (section) => set({ activeSection: section }),
    isDark: true,
    setIsDark: (isCheck) => set({ isDark: isCheck }),
    bankViewItems: [],
    setBankViewItems: (value) =>
        set((state) => ({
            bankViewItems:
                typeof value === "function" ? value(state.bankViewItems) : value
        })),
}))