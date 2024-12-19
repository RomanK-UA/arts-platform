interface ButtonProps {
    text: string,
    onClick: () => void,
    variant: string
}
export default function Button({ text, onClick, variant}: ButtonProps) {
  return (
    <button>
        {text}
    </button>
  )
}
