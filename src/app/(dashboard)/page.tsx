
'use client'

import { useStateGeneral } from "@/zustand/useStateGeneral";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

const Home: React.FC = () => {
  const router = useRouter()
  const { setActiveSection, bankViewItems, setBankViewItems,
    isDark, setIsDark, setLoading
  } = useStateGeneral()


  useEffect(() => {
  }, [])

  return (
    <>
      <div className="grid md:grid-cols-4 gap-5">
        
      </div >
    </>
  );
}

export default Home
