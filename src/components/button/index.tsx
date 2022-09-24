import { PropsWithChildren, ButtonHTMLAttributes } from 'react'

type ButtonProps = PropsWithChildren & ButtonHTMLAttributes<HTMLButtonElement>

export const Button: React.FC<ButtonProps> = ({ children, onClick }) => (
  <button
    onClick={onClick}
    style={{
      background: 'none',
      border: '2px solid black',
      borderRadius: '10px',
      cursor: 'pointer',
      padding: 10,
      width: '100px'
    }}
  >
    {children}
  </button>
)
