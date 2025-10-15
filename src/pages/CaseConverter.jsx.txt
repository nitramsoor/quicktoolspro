import React, {useState} from 'react'
import { Helmet } from 'react-helmet-async'
import AdPlaceholder from '../components/AdPlaceholder'

export default function CaseConverter() {
  const [text, setText] = useState('')
  const [mode, setMode] = useState('upper')

  const convertText = () => {
    if(mode==='upper') return text.toUpperCase()
    if(mode==='lower') return text.toLowerCase()
    if(mode==='capitalize') return text.replace(/\b\w/g, c => c.toUpperCase())
    return text
  }

  return (
    <div className="space-y-6">
      <Helmet>
        <title>Case Converter – QuickToolsPRO</title>
        <meta name="description" content="Convert text to UPPER, lower, Capitalize and more."/>
      </Helmet>
      <div className="card">
        <h2 className="text-xl font-bold">Case Converter</h2>
        <textarea
          className="w-full p-3 mt-2 border rounded h-40"
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder="Paste text here"
        />
        <div className="mt-2 flex gap-2 flex-wrap">
          <button onClick={()=>setMode('upper')} className="px-3 py-1 bg-indigo-600 text-white rounded">UPPERCASE</button>
          <button onClick={()=>setMode('lower')} className="px-3 py-1 bg-indigo-600 text-white rounded">lowercase</button>
          <button onClick={()=>setMode('capitalize')} className="px-3 py-1 bg-indigo-600 text-white rounded">Capitalize</button>
        </div>
        <div className="mt-2 p-3 bg-gray-50 border rounded">{convertText()}</div>
      </div>
      <AdPlaceholder />
    </div>
  )
}
