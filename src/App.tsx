import { useState } from 'react'

export const App = () => {
  const [first, setFirst] = useState(0)
  return (
    <div>
      <p className="underline text-red-600 font-bold">Number {first}</p>
      <button onClick={() => setFirst(first + 1)}>Click</button>
    </div>
  )
}
