import { useState } from 'react'

export default function App() {
  const [c, setC] = useState('')
  const [f, setF] = useState('')
  const [history, setHistory] = useState([])

  // Convert Celsius to Fahrenheit and log the conversion.
  const cToF = () => {
    const value = (Number(c) * 9) / 5 + 32
    setF(String(value))
    setHistory((h) => [...h, `${c}C = ${value}F`])
  }
  // Convert Fahrenheit to Celsius and log the conversion.
  const fToC = () => {
    const value = ((Number(f) - 32) * 5) / 9
    setC(String(value))
    setHistory((h) => [...h, `${f}F = ${value}C`])
  }

  return (
    <div className="container">
      <h1>Temperature Converter</h1>
      <div className="card">
        <input placeholder="Celsius" value={c} onChange={(e) => setC(e.target.value)} />
        <button onClick={cToF}>Convert to Fahrenheit</button>
      </div>
      <div className="card">
        <input placeholder="Fahrenheit" value={f} onChange={(e) => setF(e.target.value)} />
        <button onClick={fToC}>Convert to Celsius</button>
      </div>
      <div className="card"><h3>History</h3>{history.map((h, i) => <p key={i}>{h}</p>)}</div>
    </div>
  )
}
