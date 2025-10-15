import React, {useState} from 'react'
import AdPlaceholder from '../components/AdPlaceholder'
import { Helmet } from 'react-helmet-async'

export default function PasswordGenerator(){
  const [length, setLength] = useState(12)
  const [includeSymbols, setIncludeSymbols] = useState(true)
  const [includeNumbers, setIncludeNumbers] = useState(true)
  const [password, setPassword] = useState('')

  const generate = () => {
    const lower = 'abcdefghijklmnopqrstuvwxyz'
    const upper = lower.toUpperCase()
    const numbers = '0123456789'
    const symbols = '!@#$%^&*()-_=+[]{};:,.<>?'
    let chars = lower + upper
    if(includeNumbers) chars += numbers
    if(includeSymbols) chars += symbols
    let out = ''
    for(let i=0;i<length;i++) out += chars.charAt(Math.floor(Math.random()*chars.length))
    setPassword(out)
  }

  return (
    <div className="space-y-6">
      <Helmet>
        <title>Password Generator – QuickToolsPRO</title>
        <meta name="description" content="Generate strong, secure passwords instantly online."/>
      </Helmet>
      <div className="card">
        <h2 className="text-xl font-bold">Password Generator</h2>
        <p className="text-sm text-gray-500 mt-1">Create strong passwords quickly. Adjust length and character sets.</p>
        <div className="mt-4 flex items-center gap-3">
          <label className="text-sm">Length</label>
          <input type="number" value={length} min={6} max={64} onChange={e=>setLength(Number(e.target.value))} className="border p-1 rounded w-24" />
          <label className="ml-4"><input type="checkbox" checked={includeNumbers} onChange={e=>setIncludeNumbers(e.target.checked)} /> Numbers</label>
          <label className="ml-4"><input type="checkbox" checked={includeSymbols} onChange={e=>setIncludeSymbols(e.target.checked)} /> Symbols</label>
          <button onClick={generate} className="ml-auto bg-indigo-600 text-white px-4 py-2 rounded">Generate</button>
        </div>
        {password && (
          <div className="mt-4">
            <div className="p-3 bg-gray-50 border rounded font-mono break-words">{password}</div>
            <div className="mt-2 flex justify-end">
              <button onClick={()=>navigator.clipboard.writeText(password)} className="px-3 py-2 bg-indigo-600 text-white rounded">Copy</button>
            </div>
          </div>
        )}
      </div>
      <AdPlaceholder />
    </div>
  )
}
