type BadgeProps = {
    isDark: boolean;
    badge: string
}

const Badge: React.FC<BadgeProps> = ({ isDark, badge }) => {
    return (
        <>
            <span className={`px-2 z-10 py-0.5 rounded-full text-xs shrink-0 
                ${isDark
                    ? "bg-green-500/10 text-green-400 border border-green-500/30"
                    : "bg-green-500/10 text-green-500 border border-green-500/30"
                }
                `}>
                {badge}
            </span>
        </>
    )
}

export default Badge