import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { TimerInterval } from './TimerInterval'
import { TimerTimeout } from './TimerTimeout'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <p>
      setInterval: <TimerInterval initialSeconds={4} />
    </p>

    <p>
      setTimeout: <TimerTimeout initialSeconds={5} />
    </p>
  </StrictMode>,
)
