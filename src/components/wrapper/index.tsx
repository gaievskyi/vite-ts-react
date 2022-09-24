import { PropsWithChildren } from 'react'

type WrapperProps = PropsWithChildren

export const Wrapper: React.FC<WrapperProps> = ({ children }) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      fontFamily: 'monospace',
      gap: 10,
      placeContent: 'center',
      placeItems: 'center'
    }}
  >
    {children}
  </div>
)
