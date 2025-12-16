'use client'

import LiquidGlass from 'liquid-glass-react'
import { useState } from 'react'

const Login: React.FC = () => {
    return (
        <div className="relative max-w-[600px] mx-auto w-full ">
            <LiquidGlass
                displacementScale={100}
                blurAmount={0.1}
                saturation={140}
                aberrationIntensity={2}
                elasticity={0}
                cornerRadius={32}
                overLight={false}
                mode='standard'
                style={{
                    position: "fixed",
                    top: "50%",
                    left: "50%",
                }}
            >
                <div className="p-6">
                    <h2>Your content here</h2>
                    <p>This will have the liquid glass effect</p>
                </div>
            </LiquidGlass>
        </div>
    )
}

export default Login