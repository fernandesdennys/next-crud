interface BotaoProps {
  cor?: 'green' | 'blue' | 'gray'
  className?: string
  children: React.ReactNode
  onClick?: () => void
}

export default function Botao({ cor = 'gray', className, children, onClick }: BotaoProps) {
  const cores: Record<string, string> = {
    gray: "from-gray-400 to-gray-700",
    blue: "from-blue-400 to-blue-700",
    green: "from-green-400 to-green-700"
  }

  return (
    <button
    onClick={onClick}
      className={`
        bg-gradient-to-r ${cores[cor]}
        text-white rounded-md px-4 py-2
        ${className}
      `}
    >
      {children}
    </button>
  )
}
