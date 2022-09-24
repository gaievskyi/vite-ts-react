import { useState } from 'react'
import { Button, Wrapper } from 'components'

type CounterProps = {
  initialCount?: number
}

export const Counter: React.FC<CounterProps> = ({ initialCount = 0 }) => {
  const [count, set] = useState(initialCount)

  const increment = () => {
    set((previousValue: number) => previousValue + 1)
  }

  const reset = () => {
    set(initialCount)
  }

  return (
    <Wrapper>
      <pre>{count}</pre>
      <Button onClick={increment}>+</Button>
      <Button onClick={reset}>C</Button>
    </Wrapper>
  )
}
