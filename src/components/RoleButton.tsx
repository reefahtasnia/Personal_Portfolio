
import { cn } from "@/lib/utils";

type RoleButtonProps = {
  role: string;
  label: string;
  isActive: boolean;
  onClick: () => void;
};

export default function RoleButton({ role, label, isActive, onClick }: RoleButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "neon-border relative px-6 py-3 rounded-md font-medium text-sm sm:text-base transition-all duration-300",
        "hover:scale-105 focus:outline-none focus:scale-105",
        isActive
          ? "bg-neon-blue dark:bg-neon-purple text-black transform scale-[0.98]"
          : "bg-transparent border-neon-blue dark:border-neon-purple animate-float animate-pulse-glow"
      )}
      style={{ 
        transformOrigin: "center",
        animation: isActive ? "none" : "float 3s ease-in-out infinite",
      }}
    >
      {label}
    </button>
  );
}
