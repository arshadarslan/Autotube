type AgentPulseProps = {
    size?: "small" | "medium" | "large"; 
    color?: "purple" | "green" | "yellow";
}


function AgentPulse({ 
    size ="medium",
    color ="purple",
}: AgentPulseProps) {
        const sizeClasses = {
            small: "w-4 h-4",
            medium: "w-12 h-12",
            large: "w-16 h-16",
        }

        const colorClasses = {
            purple: "bg-purple-500 shadow-[0_0_8px_4px_rgba(168,85,247,0.5)]",
            green: "bg-green-500 shadow-[0_0_8px_4px_rgba(34,197,94,0.5)]",
            yellow: "bg-yellow-500 shadow-[0_0_8px_4px_rgba(255, 255, 0, 1)]",
        }
  return (
    <div className={`${sizeClasses[size]} ${colorClasses[color]} rounded-full animate-pulse`}/>
    
  )
}

export default AgentPulse