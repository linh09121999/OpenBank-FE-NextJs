'use client'

import { Footer, Header, Bar } from "@/components/Dashboard";
import { useAuth } from "@/contexts/AuthContext";
import { useStateGeneral } from "@/zustand/useStateGeneral";
import { motion, AnimatePresence } from "motion/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

type LayoutWrapperProps = {
    children: React.ReactNode;
};

const LayoutWrapper: React.FC<LayoutWrapperProps> = ({ children }) => {
    const router = useRouter()
    const {
        sidebarOpen, setSidbarOpen,
        activeSection, setActiveSection,
        isDark, setIsDark
    } = useStateGeneral()

    const { isAuthenticated } = useAuth()
    useEffect(() => {
        if (!isAuthenticated) {
            router.push('/login')
        }
    }, [isAuthenticated])

    return (
        <div className={`min-h-screen relative overflow-hidden ${isDark
            ? "bg-black/40"
            : "bg-white/85"
            }`}>
            <img src="../footer-bg.png" alt="bg" className="fixed top-0 left-0 w-full h-screen object-cover -z-10" />

            <Bar
                isCollapsed={sidebarOpen}
                onToggle={() => setSidbarOpen(!sidebarOpen)}
                activeSection={activeSection}
                onSectionChange={setActiveSection}
                isDark={isDark}
            />
            <div className="relative z-1 w-full">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{ marginLeft: sidebarOpen ? 92 : 280 }}
                    transition={{ duration: 0.3 }}>
                    <Header
                        isDark={isDark}
                        onToggle={() => setIsDark(!isDark)}
                    />
                    <main className="min-h-[78vh]  p-5">
                        {children}
                    </main>
                    <Footer isDark={isDark} />
                </motion.div>
            </div>
        </div >
    );
};
export default LayoutWrapper;