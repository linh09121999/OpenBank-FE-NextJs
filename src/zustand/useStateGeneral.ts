import { Page } from '@/types/type';
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
import { AiTwotoneBank } from "react-icons/ai";
import { PiGitBranch } from "react-icons/pi";
import {
    GrAtm,
    GrSystem
} from "react-icons/gr";
import { RiCustomerService2Line } from "react-icons/ri";
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
}

export const useStateGeneral = create<State>((set) => ({
    loading: false,
    setLoading: (isCheck) => set({ loading: isCheck }),
    sidebarOpen: false,
    setSidbarOpen: (isCheck) => set({ sidebarOpen: isCheck }),
    navItems: [
        {
            id: "overview",
            label: 'Dashboard',
            path: '/',
            badge: null,
            icon: MdOutlineDashboard
        },
        {
            id: 'banks',
            label: 'Banks Management',
            path: '/banks',
            badge: 'New',
            icon: AiTwotoneBank
        },
        {
            id: 'branches',
            label: 'Branches',
            path: '/branches',
            icon: PiGitBranch
        },
        {
            id: 'atms',
            label: 'ATMs',
            path: '/atms',
            icon: GrAtm
        },
        {
            id: 'accounts',
            label: 'Accounts',
            path: '/accounts',
            icon: MdOutlineManageAccounts
        },
        {
            id: 'account-access',
            label: 'Account Access',
            path: '/account-access',
            icon: IoAccessibilityOutline
        },
        {
            id: 'customers',
            label: 'Customers',
            path: '/customers',
            icon: RiCustomerService2Line
        },
        {
            id: 'cards',
            label: 'Cards',
            path: '/cards',
            icon: FaRegAddressCard
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
            id: 'counterparties',
            label: 'Counterparties',
            path: '/counterparties',
            icon: FaUsersViewfinder
        },
        {
            id: 'consents',
            label: 'Consents',
            path: '/consents',
            icon: BsJournalCheck
        },
        {
            id: 'products',
            label: 'Products',
            path: '/products',
            icon: LuPackage2
        },
        {
            id: 'users',
            label: 'Users',
            path: '/users',
            icon: FaRegUser
        },
        {
            id: 'roles-entitlements',
            label: 'Roles & Entitlements',
            path: '/roles-entitlements',
            icon: FaRegUser
        },
        {
            id: 'webhooks',
            label: 'Webhooks',
            path: '/webhooks',
            icon: MdWebhook
        },
        {
            id: 'api-collections',
            label: 'API Collections',
            path: '/api-collections',
            icon: TbApi,
            badge: 'New'
        },
        {
            id: 'system-admin',
            label: 'System Admin',
            path: '/system-admin',
            icon: GrSystem
        },
        {
            id: 'directory',
            label: 'Directory',
            path: '/directory',
            icon: GoFileDirectory
        },
        {
            id: 'data-warehouse',
            label: 'Data Warehouse',
            path: '/data-warehouse',
            icon: LuWarehouse
        }
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
    isDark: false,
    setIsDark: (isCheck) => set({ isDark: isCheck })
}))