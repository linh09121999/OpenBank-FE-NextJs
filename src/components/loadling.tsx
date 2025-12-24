"use client";

import React from "react";
import { Backdrop, CircularProgress } from '@mui/material'
import { useStateGeneral } from "@/zustand/useStateGeneral";

const Loading: React.FC = () => {
    const { loading } = useStateGeneral()

    return (
        <>
            {loading &&
                <Backdrop
                    sx={(theme) => ({ color: 'var(--color-green-400)', zIndex: theme.zIndex.drawer + 1 })}
                    open={loading}
                >
                    <CircularProgress color="inherit" />
                </Backdrop>
            }
        </>
    )
}

export default Loading